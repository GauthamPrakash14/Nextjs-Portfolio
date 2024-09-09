"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Frontend Development', 
    Description: 'I am an experienced frontend developer with a passion for creating intuitive and visually appealing user interfaces. I am proficient in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and modern frameworks like React.js and Next.js. My expertise includes using state management tools (Redux, Context API), and task runners like Webpack. I am also skilled in version control with Git, ensuring efficient and collaborative development workflows. My focus is on building responsive, high-performance web applications that deliver seamless user experiences.',
    href: "",
  },
  {
    num: '02',
    title: 'Backend Development', 
    Description: 'I specialize in backend development, focusing on building secure, scalable, and efficient systems. I work with technologies like Node.js, Express.js, and Python (Django, Flask) as well as databases such as PostgreSQL, MySQL, DynamoDB, and MongoDB. I develop RESTful and GraphQL APIs for smooth data exchange and use Docker and Kubernetes for deployment and scalability. By integrating CI/CD pipelines with tools like Jenkins and Git, I ensure streamlined, reliable workflows. My priority is delivering backend solutions that are robust, performant, and maintainable.',
    href: "",
  },
  {
    num: '03',
    title: 'Data Engineering', 
    Description: 'I specialize in data engineering, designing and building scalable pipelines to process and transform large datasets. I work with tools like Apache Spark, Hadoop, and Airflow for data processing and orchestration. I am proficient in ETL development, using Python, SQL, and Apache Kafka for real-time data streaming. My expertise also includes working with cloud data platforms such as AWS Redshift, Google BigQuery, and Azure Data Lake. With a focus on efficiency, scalability, and data integrity, I help organizations turn raw data into actionable insights.',
    href: "",
  },
  {
    num: '04',
    title: 'Infra Management', 
    Description: 'I specialize in infrastructure management, ensuring scalable, secure, and efficient systems to support applications and services. My expertise includes working with cloud platforms like AWS, Azure, and Google Cloud, as well as managing server provisioning, network configurations, and security protocols. I am skilled in using Infrastructure as Code tools like Terraform and Ansible for automation, and I manage containerized environments with Docker and Kubernetes. With a focus on reliability and scalability, I ensure seamless infrastructure performance for complex, high-demand systems.', 
    href: "",
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate = {{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return(
              <div key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
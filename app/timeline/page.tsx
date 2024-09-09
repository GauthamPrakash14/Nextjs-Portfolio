"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaFlask, 
  FaAws
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiPostman, SiMongodb, SiPython, SiDjango, SiAwslambda, SiPostgresql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {

  title: "About me",
  description: "Please use the following information to get in touch.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gautham Prakash",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 77668133667",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "gauthampraksh236@gmail.com",
    },
    {
      fieldName: "Country",
      fieldValue: "United Kingdom",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "I have over 2 years of industry experience, gaining valuable knowledge and hands-on expertise in developing and managing scalable systems. My work has enhanced my skills in building efficient applications, managing infrastructure, and ensuring seamless integration across various technologies.",
  items: [
    {
      company: "INRIX UK Ltd.",
      position: "Software Engineer",
      duration: "Oct 2023 - Present",
    },
    {
      company: "Keyvalue Software Systems.",
      position: "Associate Software Engineer",
      duration: "Feb 2021 - Aug 2022",
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "I hold 2 degress in computer science. My education provided a strong foundation in Computer Science, equipping me with essential skills and knowledge in Software Development and Engineering, which I apply in my professional work.",
  items: [
    {
      institution: "University Of Leicester",
      degree: "MSc Advanced Computer Science",
      duration: "Sept 2022 - Nov 2023",
    },
    {
      institution: "Kerala Technological University",
      degree: "B Tech Computer Science",
      duration: "Aug 2016 - May 2020",
    },
  ]
}

const skills = {
  title: "My Skills",
  descrition: "I have developed a diverse skill set in Software Engineering, including expertise in React.js, Node.js etc, Tools like Postman, Docker etc, and programming languages like JavaScript, TypeScript, Python. My skills encompass Problem solving, Analytical skills, allowing me to tackle complex challenges and deliver high-quality solutions. These competencies are applied effectively in my professional projects.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'Html 5'
    },
    {
      icon: <FaCss3/>,
      name: 'Css 3'
    },
    {
      icon: <FaJs/>,
      name: 'Javascript'
    },
    {
      icon: <SiTypescript/>,
      name: 'Typescript'
    },
    {
      icon: <SiPython/>,
      name: 'Python'
    },
    {
      icon: <FaReact/>,
      name: 'React.js'
    },
    {
      icon: <SiNextdotjs/>,
      name: 'Next.js'
    },
    {
      icon: <SiTailwindcss/>,
      name: 'Tailwind.css'
    },
    {
      icon: <FaNodeJs/>,
      name: 'Node.js'
    },
    {
      icon: <SiExpress/>,
      name: 'Express.js'
    },
    {
      icon: <FaFigma/>,
      name: 'Figma'
    },
    {
      icon: <SiPostman/>,
      name: 'Postman'
    },
    {
      icon: <SiPostgresql/>,
      name: 'MongoDB'
    },
    {
      icon: <SiMongodb/>,
      name: 'MongoDB'
    },
    {
      icon: <SiDjango/>,
      name: 'Python django'
    },
    {
      icon: <FaFlask/>,
      name: 'Python flask'
    },
    {
      icon: <FaAws/>,
      name: 'AWS'
    },
    {
      icon: <SiAwslambda/>,
      name: 'AWS Lambda'
    },
  ]

}

const Timeline = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {
          delay: 2.4, 
          duration: 0.4,
          ease: "easeIn",
        }}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 capitalize">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about" className="capitalize">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold capitalize">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold capitalize">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descrition}</p>
                  </div>
                  <ScrollArea className="h-[600px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold capitalize">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return(
                        <li key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Timeline
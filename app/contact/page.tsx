"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+44) 7768133667",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "gauthamprakash236@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Ladywood, Birmingham, United Kingdom",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate = {{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              action="https://getform.io/f/f24edb0c-f36b-4712-b263-14e07fd7ecc9" 
              method='POST' 
              encType='multipart/form-data' 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              target="blank_"
            >
              <h3 className="text-4xl text-accent">Let`s work together</h3>
              <p className="text-white/60 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur quibusdam corporis, rem perspiciatis maxime sapiente eum voluptatibus incidunt sit cum officiis et distinctio totam. Dolor consequuntur a ullam porro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" name="firstname"/>
                <Input type="lastname" placeholder="Lastname" name="lastname"/>
                <Input type="email" placeholder="Email address" name="email"/>
                <Input type="phone" placeholder="phone number" name="phone"/>
              </div>
              <Textarea 
                className="h-[200px]"
                placeholder="Type your message here."
                name="textarea"
              />
              <Button type="submit" size="lg" className="max-w-40 capitalize">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex item-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
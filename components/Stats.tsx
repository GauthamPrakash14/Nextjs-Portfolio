"use client"

import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats = [
    {
        nums: 2,
        text: "Years of experience",
    },
    {
        nums: 12,
        text: "Projects completed",
    },
    {
        nums: 5,
        text: "Technologies mastered",
    },
    {
        nums: 276,
        text: "Code commits",
    }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl-pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[800vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => {
                    return(
                        <div 
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}>
                                <CountUp 
                                    end={stat.nums} 
                                    duration={5} 
                                    delay={2} 
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {stat.text}
                                </p>
                        </div>
                    )
                })} 
            </div>
        </div>
    </section>
  )
}

export default Stats
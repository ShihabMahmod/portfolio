"use client"
import {motion} from "framer-motion";
import Image from 'next/image';
const About = () => {
    
    return(
        <motion.div
        className="h-full"
        initial={{ y:"-200vh" }}
        animate={{y:"0%"}}
        transition={{duration:1}}
        >
            {/* Container */}
            <div className="">
               
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 lx:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64" >
                    <div className="flex flex-col gap-12 justify-center ">
                        <h1>BIOGRAPHY</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <span>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</span>
                        <div className="w-10 h-10 object-contain">
                            <Image src="/signature.png" alt="" fill  className="object-contain"/>
                        </div>
                    </div>
                    <div className="">SKILLS</div>
                    <div className="">EXPERIENCE</div>
                </div>
                <div className="hidden" ></div>
            </div>

        </motion.div>
    )
}
export default About;
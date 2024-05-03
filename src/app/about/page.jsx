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
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <span>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</span>
                        <div className="self-end">
                            <svg width="133" height="81" viewBox="0 0 133 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 48C16.2738 44.7319 8.86564 44.2234 6.44444 45.7222C0.0740328 49.6658 1 58.002 1 64.3333C1 68.9135 15.5872 65.008 18 63.5C22.2922 60.8174 33.5936 63.1265 34 69.2222C34.3727 74.8121 34.3855 80 28 80C22.2179 80 19.82 77.6067 15 76" stroke="black" stroke-linecap="round"/>
                            <path d="M23 41C23.0959 40.5203 24.8282 44.0757 25.1111 44.5C26.8622 47.1266 29.2705 49.1933 30.7778 52C32.7707 55.711 35.5941 59.1222 37.5 62.7222C39.1576 65.8533 38.6615 69.8785 40.2222 73C41.0606 74.6767 41 67.8814 41 67.0556C41 64.3577 40.7356 54.59 46 57.2222C49.5094 58.9769 52.6228 66.8304 55 70" stroke="black" stroke-linecap="round"/>
                            <path d="M51 64C51.2743 66.4687 60.0728 70.2206 61.7778 67C63.191 64.3305 62.896 52.2769 60.9444 50C57.9565 46.5141 58.571 52.3194 59.0556 54.5C59.7738 57.7323 65.2857 59 68 59C73.1478 59 81.1683 60.8317 85 57" stroke="black" stroke-linecap="round"/>
                            <path d="M55 37C55 38.3863 54.1466 43.891 56 44C59.1105 44.183 61.8177 42.4644 62 39C62.1924 35.3455 61.8734 35 58.2222 35C54.9739 35 55 38.2901 55 41" stroke="black" stroke-linecap="round"/>
                            <path d="M67 24C67.3538 30.3681 75.1612 33.0003 76.9444 38.9444C77.9417 42.2687 80.0757 44.4426 82 47.2222C87.0732 54.5501 81.7683 46.4037 83.0556 40.6111C84.0868 35.9704 92.5651 43.9806 93.5 44.5C98.4701 47.2612 101.496 40.5035 104 38" stroke="black" stroke-linecap="round"/>
                            <path d="M104 30C98.9487 21.0199 84.2844 42 99 42C103.262 42 103.925 36.0926 102.778 32.7778C101.915 30.2851 100.648 29.7037 104.167 30.0556C110.548 30.6937 116.509 31 123 31" stroke="black" stroke-linecap="round"/>
                            <path d="M106 1C106 9.28902 112.224 15.5838 115.444 22.9444C116.256 24.7993 116.113 28.0021 117.556 29.4444C119.465 31.3535 122.072 23.5185 123 22.4444C124.266 20.9786 131.068 15.7357 131.944 20.5556C133.413 28.6342 125.157 29 119 29" stroke="black" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <h1 className="font-bold text-2xl">SKILLS</h1>
                        <div className="flex gap-4">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">JavaScript</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Vue.js</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Laravel</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySql</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Postgresql</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Prisma</div>
                            
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Prisma</div>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center pd-48">
                        <h1 className="font-bold text-2xl">EXPERIENCE</h1>
                        {/* Experience List */}
                        <div className="">
                            {/* Experience List Item */}
                            <div className="flex justify-between h-48 ">
                                {/* Left */}
                                <div className="w-1/3 bg-red-200">
                                    {/* Job Title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-xl rounded-s-lg">Senior Laravel Developer</div>
                                    {/* Job Description */}
                                    <div className="p-3 text-sm italic">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                                    </div>
                                    {/* Date */}
                                    <div className="text-red-400 text-sm font-semibold ">2023-present</div>
                                    {/* Company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold ">Quomodosoft </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/3 bg-red-600 ">
                                    {/* Line */}
                                    <div className="">
                                        {/* Line Circle */}
                                        <div className="">

                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3"> 
                                    <div className="">Senior Laravel Developer</div>
                                    {/* Job Description */}
                                    <div className="">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                                    </div>
                                    {/* Date */}
                                    <div className="">2023-present</div>
                                    {/* Company */}
                                    <div className="">Quomodosoft </div>
                                </div>
                            </div>

                            <div className="">
                                {/* Left */}
                                <div className="">
                                    {/* Job Title */}
                                    <div className="">Senior Laravel Developer</div>
                                    {/* Job Description */}
                                    <div className="">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                                    </div>
                                    {/* Date */}
                                    <div className="">2023-present</div>
                                    {/* Company */}
                                    <div className="">Quomodosoft </div>
                                </div>
                                {/* CENTER */}
                                <div className="">
                                    {/* Line */}
                                    <div className="">
                                        {/* Line Circle */}
                                        <div className="">
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="">Right</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="hidden" ></div>
            </div>

        </motion.div>
    )
}
export default About;
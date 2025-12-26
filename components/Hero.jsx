import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";


const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center text-white flex items-center justify-center"
        >
            <div className="absolute -top-32 left-32 w-[500px] h-[500px]
            bg-purple-600/30 rounded-full blur-[140px]" />

            <div className="absolute top-1/3 right-32 w-[500px] h-[500px]
            bg-blue-600/30 rounded-full blur-[140px]" />



            <div className='hidden lg:block'>

                {/* Left skills column */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 ml-20 mt-8">

                    <FaHtml5 className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-orange-500 text-orange-500 ml-8 animate-floatFast [animation-delay:0s] hover:scale-125 transition cursor-pointer" />

                    <SiNextdotjs className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-2 border-white text-white ml-16 animate-floatFast [animation-delay:0.2s] hover:scale-125 transition cursor-pointer" />

                    <FaCss3Alt className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-blue-600/90 text-blue-600/90 animate-floatFast [animation-delay:0.3s] hover:scale-125 transition cursor-pointer" />

                    <SiExpress className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-2 border-white text-white ml-16 animate-floatFast [animation-delay:0.4.2s] hover:scale-125 transition cursor-pointer" />

                    <FaJs className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-yellow-400 text-yellow-400 ml-8 animate-floatFast [animation-delay:0.4s] hover:scale-125 transition cursor-pointer" />

                </div>
                {/* Right skills column */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 mr-20 mt-8">
                    <FaReact className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-blue-400 text-blue-400 ml-8 animate-floatFast [animation-delay:0s] hover:scale-125 transition cursor-pointer" />
                    <SiTypescript className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-2 border-blue-500 text-blue-500 animate-floatFast [animation-delay:0.2s] hover:scale-125 transition cursor-pointer" />
                    <FaNodeJs className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-green-400 text-green-400 ml-16 animate-floatFast [animation-delay:0.3s] hover:scale-125 transition cursor-pointer" />
                    <SiTailwindcss className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-2 border-blue-500 text-blue-500 animate-floatFast [animation-delay:0.4.2s] hover:scale-125 transition cursor-pointer" />
                    <SiMongodb className="bg-white/10 backdrop-blur-md text-6xl border-2 rounded-xl p-1 border-green-600/90 text-green-600/90 ml-16 animate-floatFast [animation-delay:0.4s] hover:scale-125 transition cursor-pointer" />
                </div>
                {/* Center content */}
                <div className="relative z-10 text-center px-6">
                    <div className='flex items-center justify-center gap-2 mb-10 border-gray-500 border px-4 backdrop-blur-md py-1.5 rounded-full w-fit mx-auto'>
                        <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                        <p className=' text-sm'>Available for work</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Hi, I’m <span className="bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">Sulyman</span>
                    </h1>
                    <p className="mt-6 text-xl md:text-3xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
                        MERN Stack Developer crafting beautiful web experiences
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        {/* View My Work */}
                        <a
                            href="#projects"
                            className="
      px-6 py-3
      rounded-lg
      bg-gradient-to-r from-indigo-700  to-pink-600
      text-white
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
    "
                        >
                            View My Work
                        </a>

                        {/* Download CV */}
                        <a
                            href="/cv.pdf"
                            download
                            className="
      px-6 py-3
      rounded-lg
      hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]

      bg-transparent border border-blue-500/80 hover:border-blue-500/100
      text-white
      font-semibold
      transition-all duration-300
    "
                        >
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
            {/* Center content */}
            <div className="relative z-10 text-center px-6 lg:hidden mt-20">
                <div className='flex items-center justify-center mb-2 gap-2 border-gray-500 border px-4 backdrop-blur-md py-1.5 rounded-full w-fit mx-auto'>
                    <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                    <p className=' text-sm'>Available for work</p>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-widest">
                    Hi, I’m <span className="bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">Sulyman</span>
                </h1>

                <p className="mt-6 text-xl md:text-3xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
                    MERN Stack Developer crafting beautiful web experiences
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    {/* View My Work */}

                    <a
                        href="#projects"
                        className="
      px-6 py-3
      rounded-lg
      bg-gradient-to-r from-indigo-700  to-pink-600
      text-white text-sm md:text-md
      transition-all duration-300
      hover:scale-105
      hover:shadow-lg hover:shadow-purple-600/30
    "
                    >
                        View My Work
                    </a>

                    {/* Download CV */}
                    <a
                        href="/cv.pdf"
                        download
                        className="
      px-6 py-3
      rounded-lg
      shadow-md 
      bg-transparent border border-blue-500/80 hover:border-blue-500/100
      text-white text-sm md:text-md
      font-semibold
      transition-shadow duration-300
      hover:shadow-lg hover:shadow-blue-600/30
    "
                    >
                        Download CV
                    </a>
                </div>

                {/* Skills list */}
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">HTML5</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">CSS3</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">JavaScript</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">React</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">Next.js</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">Node.js</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">Express.js</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">MongoDB</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">TypeScript</span>
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer">Tailwind</span>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Hero

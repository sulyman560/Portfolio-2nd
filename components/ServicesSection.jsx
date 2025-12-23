import { Love_Light } from 'next/font/google';
import React from 'react'
import { FaHeart, FaLightbulb, FaRocket, FaStar } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

const ServicesSection = () => {
    const features = [
        {
            logo: <FaRocket className="border border-blue-500/20 rounded-md p-2 w-10 h-10 mr-4 text-[#7c86ff] text-3xl mb-4" />,
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality",
        },
        {
            logo: <FaHeart className="border border-blue-500/20 rounded-md p-2 w-10 h-10 mr-4 text-[#7c86ff] text-3xl mb-4" />,
            title: "User-Focused",
            description: "Creating experiences that users love",
        },
        {
            logo: <FaLightbulb className="border border-blue-500/20 rounded-md p-2 w-10 h-10 mr-4 text-[#7c86ff] text-3xl mb-4" />,
            title: "Modern Solutions",
            description: "Using cutting-edge technologies",
        }
    ];
    return (
        <section className="py-16 mx-auto px-6 max-w-6xl">
            <div 
            className="container mx-auto px-6 bg-[#0d1320] backdrop-blur-md py-10 rounded-2xl border border-blue-500/20
            hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300  hover:bg-[#151627] 
            "
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-[#21213b] text-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:bg-[#262841] hover:scale-105"
                        >

                            <div className='flex'>
                                <div className=''>{feature.logo}</div>
                                <div className=''>
                                    <h3 className="text-md font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
                <hr className='border-1 border-white/10 my-6' />
                <div className='flex flex-col items-center text-gray-500'>
                    <p className='uppercase text-sm'>Technologies I Work With</p>
                    <div className='flex flex-wrap gap-4 mt-4 items-center justify-center'>
                        {["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript", "TypeScript"].map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#21213b] backdrop-blur-md px-4 py-2 rounded-full text-sm hover:scale-105 transition cursor-pointer"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServicesSection

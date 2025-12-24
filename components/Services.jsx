import { color } from "motion";
import { Shrikhand } from "next/font/google";
import { useState } from "react";
import { FaCode, FaPalette, FaMobileAlt, FaBullhorn, FaTiktok, FaFileExcel, FaCheck, FaServer, FaShoppingCart, FaRocket } from "react-icons/fa";

const Services = () => {


    const services = [
        {
            icon: <FaCode />,
            color: "text-indigo-500",
            title: "Web Development",
            desc: "Building responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS.",
            features: [
                "Responsive Design",
                "Fast Loading Speed",
                "SEO Best Practices",
                "Cross-Browser Compatible",
            ],
        },
        {
            icon: <FaMobileAlt />,
            color: "text-purple-500",
            title: "Mobile-First Design",
            desc: "Creating beautiful mobile-first experiences that work seamlessly across all devices and screen sizes.",
            features: [
                "Touch-Optimized UI",
                "Progressive Web Apps",
                "Smooth Animations",
                "Offline Support",
            ],
        },
        {
            icon: <FaServer />,
            color: "text-pink-500",
            title: "Backend Development",
            desc: "Developing robust server-side applications with Node.js, Express, and MongoDB for scalable solutions.",
            features: [
                "RESTful APIs",
                "Database Design",
                "Authentication & Security",
                "Cloud Deployment",
            ],
        },
        {
            icon: <FaPalette />,
            color: "text-yellow-500",
            title: "UI / UX Design",
            desc: "Crafting intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
            features: [
                "Wireframing & Prototyping",
                "User Research",
                "Interactive Design",
                "Accessibility First",
            ],
        },
        {
            icon: <FaShoppingCart />,
            color: "text-green-500",
            title: "E-Commerce Solutions",
            desc: "Full-stack e-commerce platforms with payment integration, inventory management, and admin dashboards.",
            features: [
                "Payment Gateway Integration",
                "Shopping Cart System",
                "Order Management",
                "Admin Dashboard",
            ],
        },
        {
            icon: <FaRocket />,
            color: "text-blue-500",
            title: "Performance Optimization",
            desc: "Improving website speed, performance, and user experience through code optimization and best practices.",
            features: [
                "Code Splitting",
                "Image Optimization",
                "Caching Strategies",
                "Core Web Vitals",
            ],
        },
    ];
    return (
        <section className="py-24" id="services">
            <div className="max-w-2xl md:max-w-6xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl text-white mb-4 font-bold">
                        What I <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Can</span> <span className="text-pink-400">Do</span>
                    </h1>
                    <h2 className="text-xl font text-gray-200 text-center mb-12">
                        Services I offer to help bring your ideas to life
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const bgColor = service.color ? service.color.replace("text", "bg") : "";
                        const borderColor = service.color ? service.color.replace("text", "border") : "";
                        const bgColorMap = {
                            "text-indigo-500": "bg-indigo-500 border-indigo-500",
                            "text-pink-500": "bg-pink-500 border-pink-500",
                            "text-purple-500": "bg-purple-500 border-purple-500",
                            "text-blue-500": "bg-blue-500 border-blue-500",
                            "text-green-500": "bg-green-500 border-green-500",
                            "text-yellow-500": "bg-yellow-500 border-yellow-500",
                        };


                        return (
                            <div
                                key={index}
                                className="relative group bg-[#141c2f] p-8 md:p-6 rounded-2xl border border-[#242437]
                                hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-100 md:hover:scale-105
                                transition-all duration-300 text-gray-200"
                                
                            >
                                <div className="
                                    absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]
                                " />

                                <div
                                    className={`text-4xl ${service.color} ${borderColor} mb-5 hover:scale-100 md:hover:scale-110 transition duration-300 border-2 rounded-md p-4 w-16 h-16 flex items-center justify-center`}
                                >
                                    {service.icon} 
                                </div>

                                <h1 className="text-white font-semibold text-2xl mb-3">{service.title}</h1>
                                <p className="text-md text-gray-400 leading-relaxed">{service.desc}</p>

                                {service.features && (
                                    <div className="mt-4">
                                        {service.features.map((feature, fIndex) => (
                                            <ul key={fIndex} className="mt-2 md:mt-4 list-none text-sm md:text-md font-medium">
                                                <li className="flex gap-2 items-center">
                                                    <FaCheck className={`w-4 h-4 rounded-full p-1 ${bgColorMap[service.color]} text-black`} />
                                                    {feature}
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

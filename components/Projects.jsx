import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";


const projects = [
    {
        title: "SkillBay - A Job Portal",
        description:
            "A full-stack MERN job portal where employers post jobs and candidates apply with real-time features.",
        image: "/work-1.png", // public folder path
        tools: ["React", "Tailwind CSS", "MongoDB", "Node.js", "JWT", "Cloudinary", "Multer"],
        live: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio website built with React and Tailwind CSS to showcase projects and skills.",
        image: "/work-2.png",
        tools: ["React", "Express", "Tailwind CSS", "MongoDB", "Node.js", "JWT", "Cloudinary"],
        live: "#",
        github: "#",
    },
    {
        title: "E-Commerce App",
        description:
            "An e-commerce web app with product listing, cart system, and authentication.",
        image: "/work-3.png",
        tools: ["React", "Express", "Tailwind CSS", "MongoDB", "Node.js", "JWT"],
        live: "#",
        github: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-gray-950 text-white py-16 px-4 md:px-10"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                    Featured <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-md md:text-xl font text-gray-200 text-center mb-12">A showcase of my recent work and personal projects.</p>
                {/* Projects Grid */}
                <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                            group relative scale-100 hover:scale-105
                            border border-indigo-500/20 rounded-xl
                            hover:border-indigo-500/30
                            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                            transition-all duration-300 
                            "
                        >
                            {/* Background Glow */}
                            <div className="absolute -top-32 left-22 w-[500px] h-[500px]
                            bg-purple-600/20 rounded-full blur-[140px]" />
                            {/* Image Wrapper */}
                            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="
                                    absolute inset-0 bg-black/60
                                    opacity-0 group-hover:opacity-100
                                    transition duration-300
                                    flex items-center justify-center
                                    ">
                                    <div className=" 
                                        flex gap-4 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <a
                                            href={project.github} target="_blank" rel="noreferrer"
                                            className="p-1 text-md rounded-full backdrop-blur-md hover:scale-105 transition border border-white"
                                        >
                                            <BsGithub className="w-10 h-10 p-2 text-white" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1 text-md rounded-full bg-indigo-600 hover:scale-105 transition border border-indigo-500"
                                        >
                                            <BsBoxArrowUpRight className="w-10 h-10 p-2 text-white" />
                                        </a>
                                    </div>

                                </div>
                            </div>



                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    {project.description}
                                </p>


                                <div className="mt-4">
                                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

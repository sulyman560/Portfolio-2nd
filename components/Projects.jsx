import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";


const projects = [
    {
        title: "GreenCart (E-Commerce App)",
        description:
            "Here are the main functions of the GreenCart eCommerce website 👇 Product Listing – Displays products with images, names, and prices.Add to Cart – Allows users to add selected items to their shopping cart.Cart Management – Users can increase, decrease, or remove items from the cart.Checkout System – Lets users confirm their order (may be demo-based).Responsive Design – Works smoothly on both mobile and desktop devices.",
        image: "/project4.jpeg", // public folder path
        tools: ["React", "Tailwind CSS", "MongoDB", "Node.js", "JWT", "Cloudinary", "Multer"],
        live: "https://greencart-ashy.vercel.app",
        github: "https://github.com/sulyman560/GreenCart",
    },
    {
        title: "PingUp (Social media App)",
        description:
            "Main Functions / Work of the Site Wine Listing / Catalog – Users can see a collection of wines, often with images, names, and details. Wine Details – Clicking a wine likely shows more info: description, price, origin, or rating. Search / Filter (if available) – Users might filter wines by type, region, or rating. Add to Favorites / Wishlist – Some apps allow saving preferred wines (though might be demo-only). Responsive UI – Works well on mobile and desktop, clean modern interface.",
        image: "/project5.jpeg",
        tools: ["React", "Express", "Tailwind CSS", "MongoDB", "Node.js", "JWT", "Cloudinary"],
        live: "https://ping-up-wine.vercel.app",
        github: "https://github.com/sulyman560/PingUp",
    },
    {
        title: "Food-Del (E-Commerce App)",
        description:
            "It is a food delivery website with the following main functions: Menu Display: Shows a list of available food items. Order Placement: Users can select and order their favorite food. User Interaction: Provides easy navigation for a smooth user experience.",
        image: "/project6.jpeg",
        tools: ["React", "Express", "Tailwind CSS", "MongoDB", "Node.js", "JWT"],
        live: "https://food-del-frontend1-5l6a.onrender.com",
        github: "https://github.com/sulyman560/food-del",
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
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                            relative group scale-100 hover:scale-105
                            border border-indigo-500/20 rounded-xl
                            hover:border-indigo-500/30
                            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                            transition-all duration-300 
                            "
                        >
                            {/* Background Glow */}
                            <div className="
                                    absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]
                                " />
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
                                            href={project.github} target="_blank" rel="noreferrer">
                                            <BsGithub className="
                                            w-10 h-10 p-2 text-white border border-white/30 rounded-full backdrop-blur-md hover:scale-125 transition duration-500" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="border border-white/30 bg-indigo-600 rounded-full hover:scale-125 transition duration-500"
                                            >
                                            <BsBoxArrowUpRight className="
                                            w-10 h-10 p-2 text-white" />
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

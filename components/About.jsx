import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
        <section id="about" className="py-20 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700">
            I am a fresher MERN Stack Developer with hands-on experience in building web applications using React, 
            Node.js, Express, and MongoDB. I have gained practical exposure to both frontend and backend development 
            through small projects and internships. I am highly motivated to take on new challenges, continuously 
            improve my skills, and contribute to impactful development projects.
            </p>
        </section>
    )
}

export default About

import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
        <section id="about" className="py-20 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700">I am a passionate frontend developer who builds clean and responsive web interfaces using React and Tailwind CSS.</p>
        </section>
    )
}

export default About

import Image from 'next/image'
import React from 'react'
import { BsGithub, BsPhone } from 'react-icons/bs'
import { FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { HiLocationMarker, HiMail } from 'react-icons/hi'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">

        <div className="md:max-w-96">
          <div className='flex gap-4 items-center'>
            <Image
              src={"/profile-pic.jpg"}
              alt='Project Image'
              className='rounded-full'
              width={80} height={80}
            />
            <div className='flex flex-col'>
              <a
                href="#hero" className="">
                <h1 className="
                  bg-[length:200%_100%] animate-textShine
                  text-2xl font-bold relative  overflow-hidden  inline-block
                  bg-gradient-to-r from-purple-600 to-indigo-500/90 bg-clip-text text-transparent">
                  CoderSulyman
                </h1>
                {/* Light moving line */}

              </a>
              <span className='text-md font-semibold text-gray-300'>MERN Stack Developer</span>
            </div>

          </div>

          <p className="mt-6 text-sm">

            Aspiring full-stack developer with practical experience in frontend and backend development through
            projects and internships.Passionate about building beautiful functional web applications with clean code
            and modern technologies. Let's create something amazing together!
          </p>

          <div className="flex items-center gap-2 mt-4 text-md">

            <BsGithub className="cursor-pointer p-2 border border-gray-500/30 rounded-md w-10 h-10 hover:bg-gray-500/10 hover:scale-110 transition duration-300" />
            <FaLinkedin className="cursor-pointer p-2 border border-gray-500/30 rounded-md w-10 h-10 hover:bg-gray-500/10 hover:scale-110 transition duration-300" />
            <HiMail className="cursor-pointer p-2 border border-gray-500/30 rounded-md w-10 h-10 hover:bg-gray-500/10 hover:scale-110 transition duration-300" />
            <FaWhatsapp className="cursor-pointer p-2 border border-gray-500/30 rounded-md w-10 h-10 hover:bg-gray-500/10 hover:scale-110 transition duration-300" />
          </div>

        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">

          <div>

            <h2 className="font-semibold mb-5 text-lg">Company</h2>

            <ul className="text-sm space-y-2">

              <li><a href="#hero">Home</a></li>

              <li><a href="#about">About us</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact us</a></li>

              <li><a href="#">Privacy policy</a></li>

            </ul>

          </div>

          <div>

            <h2 className="font-semibold mb-5 text-lg">Get in touch</h2>

            <div className="flex flex-col text-sm space-y-2">

              <a href="tel:+8801967106291" className='hover:text-indigo-400/90 transition duration-300'><FaPhone className="inline mr-2" /> (+88) 01967106291</a>

              <a href="mailto:sulyman560@gmail.com" className='hover:text-indigo-400/90 transition duration-300'><HiMail className="inline mr-2" /> sulyman560@gmail.com</a>
              <p href="#"><HiLocationMarker className="inline mr-2" /> Jashore, Khulna, Bangladesh</p>
            </div> 

          </div>

        </div>

      </div>

      <p className="pt-4 text-center text-sm pb-5">

        Copyright {new Date().getFullYear()} © <a href="#">Coder - Sulyman</a>. All Right Reserved.

      </p>

    </footer>
  )
}

export default Footer

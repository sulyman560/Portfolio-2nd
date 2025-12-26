'use client';
import { useState } from "react";
import { BsMailbox, BsSend } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaLocationArrow } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "30e95b66-1e78-46bc-8a24-d1efd1ca81da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

    return (
        <section id="contact" className="relative overflow-hidden py-24">
            {/* Glow */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[160px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-5xl font-bold text-white text-center mb-4">
                    Get In <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-xl font text-gray-200 text-center mb-12">Have a project in mind? Let&apos;s work together to create something amazing.</p>

                <div className="grid gap-8 md:grid-cols-2">

                    {/* Contact Form */}
                    <div className="bg-[#0b1120] border border-[#242437] rounded-2xl p-8">
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label className="text-sm text-gray-200">Your Name</label>
                                <input
                                    type="text" name='name'
                                    placeholder="Your Name"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                                    border border-[#242437] text-white outline-none
                                    focus:border-indigo-500 focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-200">Your Email</label>
                                <input
                                    type="email" name='email'
                                    placeholder="name@example.com"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                                    border border-[#242437] text-white outline-none
                                    focus:border-indigo-500 focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-200">Your Message</label>
                                <textarea
                                    rows="5" name='message'
                                    placeholder="Tell me about your project..."
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                                    border border-[#242437] text-white outline-none
                                    focus:border-indigo-500 resize-none focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <button
                                type='submit'
                                className="
                                    w-full bg-gradient-to-r from-indigo-600 to-purple-600
                                    hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600
                                    hover:scale-105
                                    hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                                    inline-flex items-center justify-center
                                    px-6 py-3
                                    text-md
                                    text-white font-semibold
                                    rounded-md
                                    overflow-hidden
                                    transition-all duration-500
                                ">
                                Send Message <FaPaperPlane className="ml-2" />
                            </button>
                            <p className='mt-4 text-white'>{result}</p>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[#0b1120] border border-[#242437] rounded-2xl p-8 hover:scale-105 transition duration-500">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4 text-gray-400">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-white/20 rounded-md bg-indigo-600/20 border-indigo-500">
                                        <HiMail className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div className="">
                                        <p className="text-sm">Email</p>
                                        <p className="text-white">sulyman560@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-white/20 rounded-md bg-purple-600/20 border-purple-500">
                                        <HiLocationMarker className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm">Location</p>
                                        <p className="text-white">Jashore, Khulna, Bangladesh</p>
                                    </div>
                                </div>

                                <div className='w-full text-green-400 flex items-center gap-2 mb-10 border-green-500/40 bg-green-500/10 border px-4 backdrop-blur-md py-2 rounded-md w-fit mx-auto'>
                                    <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                                    <p className=' text-sm'>Available for freelance work</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#0b1120] border border-[#242437] rounded-2xl p-8 hover:scale-105 transition duration-500">

                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Connect With Me
                            </h3>

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-2xl items-center sm:items-start">

                                <div className="flex flex-col gap-6 w-full sm:w-auto">
                                    <a
                                        href="https://github.com/sulyman560"  
                                        className="flex flex-col items-center text-white md:hover:scale-125 transition duration-500 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] px-10 sm:px-20 py-5 border border-white/20 rounded-md transition"
                                    >
                                        <FaGithub />
                                        <span className="text-sm">Github</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/sulyman-ahammed-ab581017a"
                                        className="flex flex-col items-center text-white md:hover:scale-125 transition duration-500 hover:border-indigo-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] px-10 sm:px-20 py-5 border border-indigo-500/20 rounded-md transition"
                                    >
                                        <FaLinkedin className="text-blue-700" />
                                        <span className="text-sm">Linkedin</span>
                                    </a>
                                </div>

                                <div className="flex flex-col gap-6 w-full sm:w-auto">
                                    <a
                                        href="https://www.twitter.com/sulyman_ahammed"
                                        className="flex flex-col items-center text-white md:hover:scale-125 transition duration-500 hover:border-indigo-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] px-10 sm:px-20 py-5 border border-indigo-500/20 rounded-md transition"
                                    >
                                        <FaTwitter className="text-blue-500" />
                                        <span className="text-sm">Twitter</span>
                                    </a>

                                    <a
                                        href="mailto:sulyman560@gmail.com"
                                        className="flex flex-col items-center text-white md:hover:scale-125 transition duration-500 hover:border-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] px-10 sm:px-20 py-5 border border-red-500/20 rounded-md transition"
                                    >
                                        <FaEnvelope className="text-red-500" />
                                        <span className="text-sm">Email</span>
                                    </a>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

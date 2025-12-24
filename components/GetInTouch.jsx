import { BsMailbox, BsSend } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaLocationArrow } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const Contact = () => {
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
                        <form className="space-y-6">
                            <div>
                                <label className="text-sm text-gray-200">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                  border border-[#242437] text-white outline-none
                  focus:border-indigo-500 focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-200">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                  border border-[#242437] text-white outline-none
                  focus:border-indigo-500 focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-200">Your Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#141c2f]
                  border border-[#242437] text-white outline-none
                  focus:border-indigo-500 resize-none focus:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300"
                                />
                            </div>

                            <button
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
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[#0b1120] border border-[#242437] rounded-2xl p-8">
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

                                <div className='w-full text-green-400 flex items-center gap-2 mb-10 border-green-500/40 bg-green-500/10 border px-4 backdrop-blur-md py-1.5 rounded-md w-fit mx-auto'>
                                    <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                                    <p className=' text-sm'>Available for freelance work</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#0b1120] border border-[#242437] rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Connect With Me
                            </h3>

                            <div className="flex gap-5 text-2xl">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <FaGithub />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <FaTwitter />
                                </a>
                                <a href="mailto:itstumpaa@gmail.com" className="text-gray-400 hover:text-white transition">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

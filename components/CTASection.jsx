import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CTASection() {
    return (
        <section className="text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2">
                    Ready to start your project?
                </h2>
                <p className="text-md mb-4 text-gray-400">
                    Let’s work together and build something amazing!
                </p>
                <div className="flex justify-center">
                    <button
                        className="
                        bg-gradient-to-r from-indigo-600 to-purple-600
                        hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600
                        scale-100 hover:scale-105 
                        hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition duration-300
                        relative inline-flex items-center justify-center
                        px-6 py-2
                        text-md
                        text-white
                        rounded-xl
                        overflow-hidden
                        transition-all duration-300
        
      "
                    >
                        {/* light effect
                        White light → rgba(255,255,255,0.5)

                        Red light → rgba(239,68,68,0.6)]


                        Purple glow → rgba(168,85,247,0.6)

                        Blue glow → rgba(59,130,246,0.6)
                        */}
                        <span className="relative z-10">Let’s Work Together</span><FaArrowRight className="ml-2 relative z-10" />
                    </button>
                </div>
            </div>
        </section>
    );
}

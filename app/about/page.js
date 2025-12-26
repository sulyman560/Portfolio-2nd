import Image from "next/image";
import { IoMdCode } from "react-icons/io";

export default function About() {
  return (
    <section className="w-full mx-auto px-6 py-20 text-white">
      {/* ===== Header ===== */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-6xl font-semibold text-center mb-2">
          About <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-full"></div>

      </div>

      {/* ===== Intro Section ===== */}
      <div className="relative max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="
            absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]
        " />
        {/* Left Text */}
        <div className="text-md backdrop-blur-md bg-indigo-600/10 hover:bg-indigo-400/10 transition-all duration-500 rounded-xl p-8 border border-gray-800 lg:col-span-2 rounded-xl border border-gray-800 p-8 
        space-y-5 text-gray-300 leading-relaxed shadow-lg">
          {/* Header */}
          <p className="flex items-center gap-4 text-2xl font-semibold text-gray-200">
            <IoMdCode className="text-white bg-gradient-to-r from-purple-600 to-indigo-500 p-2 w-10 h-10 rounded-md" />
            My Journey
          </p>

          {/* Paragraphs */}
          <p>
            Hey there! I'm{" "}
            <span className="font-semibold text-indigo-500">Sulyman Ahammed</span>, a
            passionate MERN Stack Developer based in <span className="text-purple-500">Nasirabad, Chattogram,
              Bangladesh</span>. My journey into web development combines technical
            expertise with a unique background in Marketing from Southern
            University, giving me a holistic perspective on building products
            that users love.
          </p>

          <p>
            I specialize in building <span className="text-indigo-500">full-stack web applications</span> with a focus on
            clean, maintainable code. From implementing secure authentication
            systems and payment integrations to architecting RESTful APIs, I
            bring ideas to life with modern technologies like React, Next.js,
            Node.js, and MongoDB.
          </p>

          <p>
            My recent projects include <b className="text-purple-400">skillBay</b> (a freelance marketplace),
            <b className="text-purple-500"> goParcel</b> (a delivery tracking platform with Stripe
            integration), and <b className="text-indigo-500">Winter Dog Care</b> (a Next.js pet care booking
            system). Each project has taught me valuable lessons about
            scalability, user experience, and the importance of writing
            performant, maintainable code.
          </p>

          <p>
            When I'm not coding, I'm exploring new technologies, contributing to
            open-source projects, or enhancing my skills through continuous
            learning. I'm fluent in Bengali, English, and Hindi, which helps me
            collaborate with diverse teams and clients globally.
          </p>
        </div>

        {/* Right Profile Card */}
        <div className="relative flex flex-col gap-2 items-center justify-center rounded-xl p-8 space-y-6 text-gray-300 shadow-lg bg-gradient-to-l from-purple-700/20 to-indigo-700/20 hover:scale-105 transition-all duration-300">
          <Image src={"/profile-pic.jpg"} alt="Profile" width={150} height={150} className="rounded-full mx-auto shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

          <div className="flex flex-col text-center">
            <h3 className="text-xl font-semibold">Sulyman Ahammed</h3>
            <p className="text-md text-gray-400">MERN Stack Developer</p>

            <p className="text-sm font text-gray-300 text-center">
              CSE (Computer Science & Engineering) – Northern University of Business
              & Technology in Khulna
            </p>
          </div>


          <div className="flex flex-wrap gap-1 justify-center">
            {["Full Stack", "RESTful APIs", "UI/UX"].map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-sm font rounded-full backdrop-blur-sm border border-gray-700 text-gray-200 hover:scale-105 transition-transform duration-200"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="
            absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]
        " />
        {/* left text */}
        <div className="relative flex flex-col gap-2 items-center justify-center rounded-xl p-8 space-y-6 text-gray-300 backdrop-blur-md bg-indigo-600/10 hover:bg-indigo-400/10 shadow-lg border border-gray-800 transition-all duration-300">
          {/* ===== What I Do ===== */}
          <div className="">
            <h2 className="text-xl font-semibold mb-4">What I Do</h2>
            <ul className="text-sm text-gray-300">
              {[
                "Full-stack MERN application development",
                "Secure authentication systems (JWT, Firebase)",
                "Payment gateway integration (Stripe API)",
                "RESTful API design & implementation",
                "Responsive UI with Next.js & React",
                "Database architecture with MongoDB",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-center mb-2">
                  <span className="text-green-400">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right Text */}
        <div className="text-md backdrop-blur-md bg-indigo-600/10 hover:bg-indigo-400/10 transition-all duration-500 rounded-xl p-8 border border-gray-800 lg:col-span-2 rounded-xl border border-gray-800 p-8 
        space-y-5 text-gray-300 leading-relaxed shadow-lg">
          {/* ===== Core Values ===== */}
          <div className="">
            <h2 className="text-3xl font-semibold mb-10">
              Core Values & Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "💡",
                  title: "Clean Code",
                  desc: "Writing maintainable, readable, and scalable code",
                },
                {
                  icon: "🔒",
                  title: "Security First",
                  desc: "Implementing secure authentication and data protection",
                },
                {
                  icon: "🚀",
                  title: "Performance",
                  desc: "Optimizing for speed, SEO, and user experience",
                },
                {
                  icon: "📚",
                  title: "Continuous Learning",
                  desc: "Always exploring new tools and best practices",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>






      {/* ===== Stats ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-20">
        {[
          { value: "12+", label: "Projects Completed" },
          { value: "3", label: "Languages" },
          { value: "15+", label: "Technologies" },
          { value: "500+", label: "Learning Hours" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              {item.value}
            </h3>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

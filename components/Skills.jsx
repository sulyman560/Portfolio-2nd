import { color } from "motion";
import React from "react";
import { FaCode, FaCss3, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiPostgresql, SiPostman, SiTailwindcss, SiVscodium } from "react-icons/si";

const skills = [
    {
        title: "Frontend",
        icons: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaReact />, <SiNextdotjs />, <SiTailwindcss />],
        colors: ["text-orange-500", "text-blue-600/90", "text-yellow-400", "text-blue-400", "text-white", "text-blue-500", "text-white"],
        names: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
        levels: ["90%", "85%", "80%", "75%", "85%", "70%"],
        barColors: [
            "#e34c26",
            "#264de4",
            "#f7df1e",
            "#61dafb",
            "#ffffff",
            "#38bdf8",
        ],
    },
    {
        title: "Backend",
        icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
        colors: ["text-orange-500", "text-blue-600/90", "text-yellow-400", "text-blue-400", "text-white", "text-blue-500", "text-white"],
        names: ["Node.js", "Express.js", "MongoDB"],
        levels: ["70%", "65%", "60%"],
        barColors: [
            "#39b143ff",
            "#ffffff",
            "#4ba750ff",
        ]
    },
    {
        title: "Tools & Others",
        icons: [<FaCode />, <SiPostman />, <FaGithub />],
        colors: ["text-orange-500", "text-blue-600/90", "text-yellow-400", "text-blue-400", "text-white", "text-blue-500", "text-white"],
        names: ["VS Code", "Postman", "Git & GitHub"],
        levels: ["80%", "70%", "90%", "75%"],
        barColors: [
            "#264de4",
            "#ca5133ff",
            "#ffffff",
        ],
    },

];


const Skills = () => {
    return (
        <section id="skills" className="text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-5xl font-bold text-center mb-4">
                    My <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
                </h2>
                <p className="text-xl font text-gray-200 text-center mb-12">Technologies and tools I use to bring ideas to life</p>
                
                {/* Skills Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="
                            p-6 border border-indigo-500/30 rounded-xl
                            hover:border-indigo-400
                            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                            transition-all duration-300
                            "
                        >
                        
                            <div className="mb-4">
                                <div className="flex items-center mb-4 gap-2">
                                    {/* dot */}
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                                    <h3 className="text-2xl font-semibold">{skill.title}</h3>
                                </div>

                                <hr className=" border-1 border-indigo-500/30" />
                            </div>
                            {skill.names.map((name, idx) => {
                                return { name: name, level: skill.levels[idx], icon: skill.icons ? skill.icons[idx] : null, color: skill.colors ? skill.colors[idx] : null, barClasses: skill.barColors ? skill.barColors : null };
                            }).map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-4 mb-6">
                                    {/* Skill Icon could go here if needed */}
                                    <div className={`text-2xl border border-white/20 rounded-lg p-2`}
                                        style={{ color: skill.barClasses[idx] }}

                                    >{skill.icon}</div>
                                    <div className="w-full items-center">
                                        {/* Skill Name and Level */}
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-semibold">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-300">
                                                {skill.level}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full relative overflow-hidden ${skill.barClasses?.[idx] || "bg-indigo-500"}`}
                                                style={{ background: skill.barClasses?.[idx], width: skill.level }}
                                            >
                                                {/* Light moving line */}
                                                <span
                                                    className="
                                                    absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-progressShine">

                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}


                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;

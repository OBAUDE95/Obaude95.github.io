"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Autonomous Sales Agent",
        desc: "An intelligent conversational agent capable of engaging customers, answering specific queries, and closing sales autonomously.",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        tags: ["Agentic AI"],
        link: "#",
        large: true
    },
    {
        title: "Crime Type Predictor",
        desc: "Predictive ML engine for Chicago district analysis.",
        img: "/crime.jpg",
        tags: [],
        link: "https://github.com/OBAUDE95/Crime-Prediction-Model-in-Chicago",
        large: false
    },
    {
        title: "Financial Report AI",
        desc: "Dashboard summarizer using LangChain and Plotly.",
        img: "/Ai.jpg",
        tags: [],
        link: "https://github.com/OBAUDE95/Plotly-and-Dash-Langchain-Competition-by-Obaude-Ayodeji",
        large: false
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4 relative z-10 bg-[#050505]/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl font-bold mb-16 tracking-tighter"
                >
                    <span className="text-white/20">02.</span> Selected <span className="gradient-text">Works.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className={`bento-card p-0 group overflow-hidden h-[400px] ${project.large ? "md:col-span-2 h-[500px]" : ""}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10"></div>

                            {project.img.startsWith("http") ? (
                                // External image (Unsplash)
                                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                            ) : (
                                // Local static asset
                                <Image src={project.img} alt={project.title} fill className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                            )}

                            <div className={`absolute inset-0 z-20 flex flex-col justify-end ${project.large ? "p-10" : "p-8"}`}>
                                {project.tags.length > 0 && (
                                    <div className="flex gap-3 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1 rounded-full border border-[#06b6d4] text-[#06b6d4] text-xs font-bold tracking-widest uppercase bg-[#06b6d4]/10 backdrop-blur-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h3 className={`font-display font-bold mb-2 ${project.large ? "text-4xl md:text-6xl mb-4" : "text-3xl"}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-gray-300 ${project.large ? "text-xl max-w-2xl font-light" : "text-sm"}`}>
                                    {project.desc}
                                </p>
                                {!project.large && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-[#06b6d4] border-b border-[#06b6d4] pb-1 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                                        View Source
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

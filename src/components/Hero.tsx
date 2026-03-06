"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* Main Hero Text (Spans 8 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-8 flex flex-col justify-center"
                >
                    <div className="inline-block px-4 py-2 border border-white/10 rounded-full mb-6 text-sm font-bold tracking-widest uppercase w-max bg-white/5">
                        🚀 Engineering the Future
                    </div>
                    <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight tracking-tighter mb-6">
                        Building <span className="gradient-text block">Autonomous AI</span> Systems.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10">
                        I am Obaude Ayodeji Michael. A Machine Learning Engineer & GenAI developer turning complex mathematical models into breathtaking digital experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="bg-[#06b6d4] hover:bg-white hover:text-[#050505] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 text-lg">
                            Explore Works
                        </a>
                        <div className="flex items-center gap-4 px-6 py-4 border border-white/10 rounded-full bg-white/5">
                            <a href="https://github.com/OBAUDE95" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors"><Github /></a>
                            <a href="https://www.linkedin.com/in/ayodeji-obaude-79b5051b2/" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors"><Linkedin /></a>
                            <a href="https://x.com/obaudeayodeji" target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors"><Twitter /></a>
                        </div>
                    </div>
                </motion.div>

                {/* Profile Bento Box (Spans 4 cols) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-4"
                >
                    <div className="bento-card h-full flex flex-col justify-end min-h-[400px] relative p-0 overflow-hidden group">
                        <Image
                            src="/deji.jpg"
                            alt="Obaude Ayodeji"
                            fill
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-0"></div>
                        <div className="relative p-8 z-10">
                            <div className="text-[#06b6d4] text-sm font-bold uppercase tracking-widest mb-2">Based In</div>
                            <h3 className="font-display text-3xl font-bold">Nigeria 🌍</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

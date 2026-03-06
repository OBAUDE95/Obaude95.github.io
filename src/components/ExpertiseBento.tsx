"use client";

import { motion } from "framer-motion";
import { Brain, Code } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ExpertiseBento() {
    return (
        <section id="expertise" className="py-32 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl font-bold mb-16 tracking-tighter"
                >
                    <span className="text-white/20">01.</span> Core <span className="gradient-text">Expertise.</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
                >

                    {/* BENTO 1: Large Box */}
                    <motion.div variants={itemVariants} className="bento-card md:col-span-2 md:row-span-2 group">
                        <div className="h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-[#06b6d4]/20 rounded-2xl flex items-center justify-center text-[#06b6d4] text-3xl mb-8 group-hover:scale-110 transition-transform">
                                <Brain size={32} />
                            </div>
                            <div>
                                <h3 className="font-display text-4xl font-bold mb-4">Generative AI & LLMs</h3>
                                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                                    Building autonomous agents, sales chatbots, and educational RAG applications that seamlessly integrate with business logic to drive true automation.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* BENTO 2: Small Box */}
                    <motion.div variants={itemVariants} className="bento-card group flex flex-col justify-center items-center text-center">
                        <h3 className="font-display text-6xl font-bold gradient-text mb-2">95%</h3>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Model Accuracy Avg</p>
                    </motion.div>

                    {/* BENTO 3: Small Box */}
                    <motion.div variants={itemVariants} className="bento-card group bg-gradient-to-br from-[#8b5cf6]/20 to-transparent">
                        <div className="h-full flex flex-col justify-between">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                                <Code size={24} />
                            </div>
                            <h3 className="font-display text-2xl font-bold">Predictive Modeling</h3>
                            <p className="text-gray-400 text-sm mt-2">Deep learning and classical ML models built via Scikit-learn, TensorFlow, and PyTorch.</p>
                        </div>
                    </motion.div>

                    {/* BENTO 4: Wide Box */}
                    <motion.div variants={itemVariants} className="bento-card md:col-span-3 flex items-center justify-between group overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-[#06b6d4]/10 rounded-full blur-3xl group-hover:bg-[#06b6d4]/20 transition-colors"></div>
                        <div className="z-10 w-full md:w-2/3">
                            <h3 className="font-display text-3xl font-bold mb-4">Mentorship & Leadership</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Currently mentoring upcoming tech talent in Data Science and software engineering best practices at <span className="text-white font-bold">ALX Africa</span>, translating complex concepts into actionable engineering skills.
                            </p>
                        </div>
                        <div className="hidden md:flex text-6xl text-white/10 group-hover:scale-125 group-hover:text-[#06b6d4]/50 transition-all font-display font-bold">
                            ALX
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

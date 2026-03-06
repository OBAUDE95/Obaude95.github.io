"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-display font-bold text-2xl tracking-tighter">
                    OBAUDE<span className="text-[#06b6d4]">.AI</span>
                </a>

                <div className="hidden md:flex space-x-8">
                    <a href="#about" className="hover:text-[#06b6d4] transition-colors text-sm uppercase tracking-widest font-bold">About</a>
                    <a href="#expertise" className="hover:text-[#06b6d4] transition-colors text-sm uppercase tracking-widest font-bold">Expertise</a>
                    <a href="#projects" className="hover:text-[#06b6d4] transition-colors text-sm uppercase tracking-widest font-bold">Works</a>
                </div>

                <a href="#contact" className="hidden md:inline-flex bg-white text-[#050505] px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform cursor-hover">Let&apos;s Talk</a>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 flex flex-col items-center py-6 space-y-6"
                >
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest font-bold">About</a>
                    <a href="#expertise" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest font-bold">Expertise</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest font-bold">Works</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="bg-white text-[#050505] px-6 py-2 rounded-full font-bold">Let&apos;s Talk</a>
                </motion.div>
            )}
        </nav>
    );
}

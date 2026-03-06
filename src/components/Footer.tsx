"use client";

export default function Footer() {
    return (
        <footer id="contact" className="py-32 px-4 border-t border-white/5 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Let&apos;s <span className="gradient-text">Build.</span></h2>
                <p className="text-xl text-gray-400 font-light mb-12">Whether you need an advanced AI agent or a stunning digital experience.</p>
                <a href="mailto:obaudeayodejimichael@gmail.com" className="inline-block text-3xl md:text-5xl font-display font-bold border-b-2 border-white hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors pb-2 cursor-hover-target">
                    obaudeayodejimichael@gmail.com
                </a>
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-bold uppercase tracking-widest gap-4">
                    <p>&copy; {new Date().getFullYear()} OBAUDE.AI</p>
                    <div className="space-x-6">
                        <a href="https://github.com/OBAUDE95" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-hover">Github</a>
                        <a href="https://www.linkedin.com/in/ayodeji-obaude-79b5051b2/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-hover">LinkedIn</a>
                        <a href="https://x.com/obaudeayodeji" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-hover">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

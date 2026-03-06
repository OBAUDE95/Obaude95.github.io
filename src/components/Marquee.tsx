"use client";

const skills = [
    "Python Architecture",
    "Generative AI",
    "LLMs",
    "PyTorch",
    "TensorFlow",
    "Data Science",
    "FastAPI",
    "RAG Systems",
    "Machine Learning"
];

export default function Marquee() {
    return (
        <section className="py-10 border-y border-white/5 bg-[#050505]/50 backdrop-blur-md">
            <div className="marquee-container" aria-hidden="true">
                <div className="marquee-content">
                    {skills.map((skill, idx) => (
                        <span key={`skill-1-${idx}`} className="skill-tag">{skill}</span>
                    ))}
                </div>
                <div className="marquee-content">
                    {skills.map((skill, idx) => (
                        <span key={`skill-2-${idx}`} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

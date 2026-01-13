import React from "react";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Team Lead & Web Development Intern",
            company: "GAOTek Inc.",
            period: "Aug 2024 - Feb 2025",
            description: "Led a team of 15+ interns, streamlining Agile workflows and delivering multiple MERN projects.",
            achievements: [
                "Led 15 interns to deliver 4+ MERN projects by streamlining Agile workflows.",
                "Deployed e-commerce sites using React/Node.js, improving load times by 30%.",
                "Mentored 15+ interns in MERN best practices, reducing deployment errors by 20%."
            ]
        },
        {
            id: 2,
            role: "Full Stack Web Development Intern",
            company: "IIFA Tech",
            period: "June 2025 - Aug 2025",
            description: "Developed and optimized full-stack applications with a focus on data integrity and UI responsiveness.",
            achievements: [
                "Built MERN & PostgreSQL apps, ensuring high data integrity and availability.",
                "Optimized RESTful APIs, significantly reducing backend data retrieval latency.",
                "Revamped Admin Dashboard with real-time filters, boosting efficiency by 25%."
            ]
        }
    ];

    const education = [
        {
            id: 1,
            degree: "Masters of Cyber Security",
            school: "FAST NUCES, Lahore",
            year: "Aug 2025 - June 2027",
            details: "Focusing on advanced security protocols and blockchain technology."
        },
        {
            id: 2,
            degree: "Bachelor of Computer Science",
            school: "Kinnaird College for Women, Lahore",
            year: "Nov 2021 - June 2025",
            details: "Graduated with strong foundation in Software Engineering and Web Technologies."
        }
    ];

    return (
        <div name="experience" className="w-full bg-surface py-24 section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-heading mb-4">Experience & Education</h2>
                <p className="text-body text-lg max-w-2xl mx-auto">
                    A track record of delivering technical excellence and driving product growth.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold text-heading mb-8 flex items-center">
                        <span className="w-2 h-8 bg-secondary mr-4 rounded-sm"></span>
                        Professional History
                    </h3>
                    <div className="space-y-12 border-l-2 border-slate-200 ml-3 pl-8 relative">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="relative">
                                <span className="absolute -left-[39px] top-2 w-5 h-5 bg-secondary rounded-full border-4 border-surface"></span>
                                <h4 className="text-xl font-bold text-heading">{exp.role}</h4>
                                <p className="text-primary font-medium mb-2">{exp.company} <span className="text-slate-400 mx-2">|</span> {exp.period}</p>
                                <p className="text-body mb-4">{exp.description}</p>
                                <ul className="list-disc list-outside ml-4 text-body text-sm space-y-1">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold text-heading mb-8 flex items-center">
                        <span className="w-2 h-8 bg-accent mr-4 rounded-sm"></span>
                        Education
                    </h3>
                    <div className="space-y-8">
                        {education.map((edu) => (
                            <div key={edu.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="text-xl font-bold text-heading">{edu.degree}</h4>
                                <p className="text-secondary font-medium mb-2">{edu.school}</p>
                                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
                                    {edu.year}
                                </span>
                                <p className="text-body text-sm">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

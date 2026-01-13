import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "C++", "Java", "Solidity"]
        },
        {
            title: "Web Development",
            skills: ["MERN Stack", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"]
        },
        {
            title: "Database Management",
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Neon DB"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git/GitHub", "VS Code", "Postman", "Agile Methodologies", "Jira"]
        },
        {
            title: "Soft Skills",
            skills: ["Leadership", "Cross-Team Collaboration", "Mentorship", "Problem Solving"]
        }
    ];

    return (
        <div name="skills" className="w-full bg-background py-24 section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-heading mb-4">Technical Expertise</h2>
                <p className="text-body text-lg max-w-2xl mx-auto">
                    A comprehensive toolset for building high-fidelity software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-slate-300 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-heading mb-4 border-b border-slate-100 pb-2">
                            {category.title}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-center text-body">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

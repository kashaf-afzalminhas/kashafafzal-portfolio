import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-white py-24 section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="border-l-4 border-secondary pl-6 mb-8">
            <h2 className="text-4xl font-bold text-heading mb-2">About Me</h2>
            <p className="text-body text-lg italic">
              Full-Stack Engineer & Cyber Security Master's Student
            </p>
          </div>

          <div className="text-body text-lg space-y-6">
            <p>
              I am a results-driven software engineer with a strong foundation in the MERN stack and blockchain technology. Currently pursuing a Masters in Cyber Security at FAST NUCES, I combine secure coding practices with modern web development to build robust digital products.
            </p>
            <p>
              With experience leading teams and deploying real-world applications, I focus on solving complex problems through scalable architecture and efficient code. My work spans from decentralized freelance platforms to custom ERP systems, always prioritizing performance and user experience.
            </p>
            <p>
              Whether leading a team  or architecting a smart contract protocol, I bring a disciplined, impact-focused approach to engineering.
            </p>
          </div>
        </div>

        <div className="bg-surface p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-heading mb-6 border-b border-slate-200 pb-4">
            Core Competencies
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1">▹</span>
              <div>
                <strong className="text-heading block">Full-Stack Development</strong>
                <span className="text-body text-sm">Expertise in MERN Stack, Next.js, and SQL/NoSQL databases.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1">▹</span>
              <div>
                <strong className="text-heading block">Blockchain Engineering</strong>
                <span className="text-body text-sm">Smart Contract development with Solidity, Web3.js, and DeFi protocols.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1">▹</span>
              <div>
                <strong className="text-heading block">Leadership & Agile</strong>
                <span className="text-body text-sm">Proven ability to lead technical teams and mentor developers in agile environments.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1">▹</span>
              <div>
                <strong className="text-heading block">Cyber Security</strong>
                <span className="text-body text-sm">Integrating security best practices into web and blockchain architecture.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
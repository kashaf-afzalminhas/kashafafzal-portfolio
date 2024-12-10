import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-[#B3E5FC] to-[#FFF8E1] text-black" name='about'>
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full py-5 md:py-10">
        <div className="pb-4 text-center">
          <h2 className="text-3xl md:text-2xl font-bold mb-2">About Me</h2>
          <p className="text-base md:text-lg text-gray-600">A brief introduction about my skills and passion.</p>
        </div>
        <div className="text-sm md:text-base mt-3 space-y-4">
          <p className="text-justify">
            Highly skilled and detail-oriented Frontend Web Developer with a passion for crafting visually appealing and user-friendly interfaces. Proficient in MongoDB, Express.js, React.js, and Node.js (MERN stack), I possess strong problem-solving abilities and a keen eye for design. I am dedicated to staying current with the latest web development trends and best practices. Eager to contribute to innovative projects, I strive to deliver high-quality web solutions that enhance user experiences.
          </p>
          <p className="text-justify">
            Beyond writing clean and optimized code, I enjoy collaborating with cross-functional teams to align the frontend with the broader application architecture. I am a creative problem-solver who thrives on the challenge of finding elegant solutions to complex issues. In my free time, you can find me exploring the latest frontend development trends, contributing to open-source projects, or tinkering with personal side projects to expand my skillset. I am passionate about continuously learning and growing as a software engineer, and I am excited to bring my expertise and enthusiasm to new and challenging opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
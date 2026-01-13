import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-background flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          <p className="text-secondary font-medium text-lg mb-4">
            Hi, I'm Kashaf Afzal
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-heading mb-6 tracking-tight">
            Building Scalable <br /> Digital Products
          </h1>
          <p className="text-body text-xl max-w-2xl mb-10 leading-relaxed">
            I engineer high-performance web applications and blockchain solutions
            for startups and enterprise clients. Focusing on clean architecture,
            user experience, and business impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="btn-primary text-center cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="btn-secondary text-center cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
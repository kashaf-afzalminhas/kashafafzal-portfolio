import React from "react";
import { HiArrowUturnDown } from "react-icons/hi2";
import myImage from "../assets/home.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#B3E5FC] via-[#FFF8E1] to-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:mr-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black inline">
            Hi, I'm Kashaf Afzal Minhas.
          </h2>
          <h3 className="text-gray-700 text-3xl sm:text-2xl">A passionate Software Engineer.</h3>
          <p className="text-gray-600 mt-2 text-2xl">
            "Bringing your visions to life on the web - pixel-perfect, responsive, and delightful."
          </p>
          {/* Button positioned for PC */}
          <button className="text-gray w-fit md:ml-3 md:my-4 md:mt-4 px-6 py-3 my-2 mt-5 flex items-center rounded-md bg-gradient-to-r from-[#B3E5FC] to-[#FFF8E1] cursor-pointer">
            <a href="https://kashaf-afzalminhas.github.io/kashafafzal-portfolio/Kashaf-Afzal-Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              Download Resume
            </a>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowUturnDown size={20} className="ml-2" />
            </span>
          </button>
        </div>
        {/* Centered image for mobile, positioned on the right */}
        <div className="mt-8 md:mt-0 flex justify-end w-full flex-grow">
          <img 
            src={myImage} 
            alt="Kashaf Afzal Minhas" 
            className="rounded-2xl w-full md:w-auto" 
          />
        </div>
      </div>
      {/* Center the image vertically on mobile screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-grow {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%; /* Ensure it takes full height */
          }
          img {
            width: 90%; /* Adjust image size for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
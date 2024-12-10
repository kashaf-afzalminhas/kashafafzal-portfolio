import React from "react";
import hope from '../assets/hopeforpaws.png';
import shop from '../assets/shop.jpg';

function Project() {
  const posts = [
    {
      id: 1,
      title: "Hope For Paws",
      description:
        "Led the development of the Hope For Paws platform, a MERN stack application focused on enhancing animal welfare collaboration where users can adopt animals and post queries related to animal health.",
      src: hope,
      style: 'shadow-blue-600'
    },
    {
      id: 2,
      title: "E-Commerce Website (2023)",
      description:
        "Developed a feature-rich e-commerce website using HTML, CSS, JavaScript, and PHP. Catered to personalized gift shopping experiences for customers, collaborating with a cross-functional team to gather requirements, create wireframes, and design an intuitive user interface.",
      src: shop,
      style: 'shadow-pink-500'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-[#B3E5FC] via-[#FFF8E1] to-white w-full h-auto py-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-[#B3E5FC] inline-block pb-2">
            Projects
          </p>
          <p className="py-4 text-lg">Check Out Some Of My Projects</p>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 text-center px-4">
          {posts.map(({ id, src, title, style, description }) => (
            <div
              key={id}
              className={` opacity-80 shadow-black hover:scale-105 duration-500 rounded-lg overflow-hidden ${style} transition-transform`}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-56 object-cover" 
              />
              <div className="p-4 flex flex-col items-center"> {/* Center align items */}
                <p className="font-bold text-lg">{title}</p>
                <p className="text-gray-600 text-sm text-center">{description}</p> {/* Center text */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
import React from "react";
import profile from '../assets/home.png';
import hope from '../assets/hopeforpaws.png';
import shop from '../assets/shop.jpg';

function Project() {
  const posts = [
    {
      id: 1,     
       title: "Hope For Paws",
      description:
        "Led the development of the Hope For Paws platform, a MERN stack application focused on enhancing animal welfare collaboration where users can adopt animals and post queries related to animal health",
      src: hope,
      style: 'shadow-blue-600'
    },
    {
      id: 2,
      title: "E-Commerce Website (2023)",
      description:
        "Developed a feature-rich e-commerce website using HTML, CSS, JavaScript, and PHP. Catered to personalized gift shopping experiences for customers. Collaborated with a cross-functional team to gather requirements, create wireframes, and design an intuitive user interface.",
      src: shop,
      style: 'shadow-pink-500'
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description:
        "Developed a dynamic portfolio website using React.js, showcasing projects and skills in an interactive format.Included contact forms and interactive elements to facilitate user engagement and inquiries.",
      src: profile,
      style: 'shadow-purple-800'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-[#B3E5FC] shadow-l via-[#FFF8E1] to-white w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#B3E5FC] p-2 inline">
            Projects
          </p>
          <p className="py-6">Check Out Some Of My Projects</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {posts.map(({ id, src, title, style, description }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-44 mx-auto" />
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
import React from "react";
import Html from "../assets/html.jpg";
import Css from "../assets/css.jpg";
import express from "../assets/js.jpg";
import nodee from "../assets/nd.jpg";
import ReactLogo from "../assets/reactj.jpg";
import mongoo from "../assets/mongo.png";

function Services() {
  const skill = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-600'
    },
    {
      id: 2,
      src: Css,
      title: 'CSS/Tailwind/Bootstrap',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: express,
      title: 'Express Js',
      style: 'shadow-yellow-600'
    },
    {
      id: 4,
      src: nodee,
      title: 'Node Js',
      style: 'shadow-teal-700'
    },
    {
      id: 5,
      src: ReactLogo,
      title: 'React JS',
      style: 'shadow-blue-400'
    },
    {
      id: 6,
      src: mongoo,
      title: 'MongoDB',
      style: 'shadow-teal-800'
    },
  ];

  return (
    <div
      name="services"
      className="bg-gradient-to-b from-[#B3E5FC] shadow-l via-[#FFF8E1] to-white w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold p-2 inline">Services</p>
          <p className="py-6">These are the technologies that I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
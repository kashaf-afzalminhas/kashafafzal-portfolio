import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'services' },
    { id: 5, link: 'contact' },
  ];

  return (
    <>
      <nav className="w-full h-20 flex justify-between text-white bg-gradient-to-tr from-[#D4CFC4] via-[#A8D5BA] to-[#A2D5E0] fixed px-4">
        <h1 className="text-4xl font-signature ml-2 mt-4">Kashaf Afzal</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black hover:font-extrabold hover:text-xl"
            >
              <Link to={link} smooth duration={500}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#D4CFC4] to-[#A8D5BA] text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-2 text-2xl"
              >
                <Link to={link} smooth duration={500}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
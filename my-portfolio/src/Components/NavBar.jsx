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

  const handleLinkClick = () => {
    setNav(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      <nav className="w-full h-16 flex bg-[#B3E5FC] justify-between items-center text-black  fixed px-4 shadow-lg z-10">
        <h1 className="text-2xl md:text-sm font-LyonText font-signature font-medium ml-2">Kashaf Afzal</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-2 cursor-pointer text-md capitalize font-medium text-gray-800 hover:scale-105 hover:text-black transition duration-300 hover:font-bold"
            >
              <Link to={link} smooth duration={500} onClick={handleLinkClick}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-800 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#B3E5FC] to-[#FFE5B4] text-gray-800">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-2xl transition duration-300 hover:text-black hover:font-bold"
                onClick={handleLinkClick} // Close navbar on link click
              >
                <Link to={link} smooth duration={500} onClick={handleLinkClick}>
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
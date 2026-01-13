import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "projects", label: "Projects" },
    { id: 2, link: "services", label: "Services" },
    { id: 3, link: "about", label: "About" },
    { id: 4, link: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight cursor-pointer">
            <Link to="home" smooth duration={500}>
              Kashaf Afzal
            </Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="cursor-pointer font-medium text-body hover:text-primary transition-colors duration-200"
            >
              <Link to={link} smooth duration={500}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-primary md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-primary">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer py-6 text-2xl font-medium"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
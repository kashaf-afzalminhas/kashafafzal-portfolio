import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const links = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/kashaf-afzal-minhas-160027248/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/kashaf-afzalminhas',
  },
  {
    id: 3,
    child: (
      <>
        Mail <CiMail size={30} />
      </>
    ),
    href: 'mailto:kashafafzal909@gmail.com',
  },
];

const Social = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 absolute">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-[#B3E5FC] ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
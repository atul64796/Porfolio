import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='bg-black fixed w-[100%] z-1000'>
                {/* Hamburger Icon for Mobile */}
                <div className='flex justify-end absolute z-20 w-full p-4 md:hidden'>
                    <FaBars
                        className='text-white text-3xl md:hidden max-[769px]:inline hover:text-yellow-400 transition-all duration-100 ease-in-out'
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                {/* Navigation Bar */}
                <nav className={`${isOpen ? "flex" : "hidden"} flex h-16 items-center max-[769px]:flex-col max-[769px]:items-start max-[769px]:h-80 max-[769px]:justify-center max-[769px]:gap-3 md:flex p-4 relative max-[768px]:top-15 bg-black rounded z-20`}>
                    {/* Logo or Name */}
                    <div className='flex w-[27%] justify-start max-[768px]:w-full'>
                        <span className='text-white text-[17px] font-bold max-[823px]:text-[19px]'>ATUL CHOURASIA</span>
                    </div>

                    {/* Navigation Links */}
                    <div className='flex justify-center w-[50%] max-[769px]:w-full max-[769px]:justify-start'>
                        <ul className='flex gap-6 max-[823px]:gap-3 max-[769px]:flex-col'>
                            <a href='#about' className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out' onClick={() => setIsOpen(false)}>About</a>
                            <a href='#tech-stack' className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out' onClick={() => setIsOpen(false)}>Tech Stack</a>
                            <a href="#project-bar" className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out' onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#contact-sec" className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out' onClick={() => setIsOpen(false)}>Contact</a>
                        </ul>
                    </div>

                    {/* Social Icons + Resume Button */}
                    <div className='flex justify-center gap-4 max-[769px]:flex-col max-[769px]:w-full'>
                        {/* Social Media Icons */}
                        <div className='flex justify-center items-center gap-5 max-[769px]:justify-start'>
                            <a href="https://www.instagram.com/atul_kumar_chourasia/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='text-white text-2xl hover:text-pink-500 transition ease-in-out' />
                            </a>
                            <a href="https://github.com/atul64796" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-white text-2xl hover:text-gray-300 transition ease-in-out' />
                            </a>
                            <a href="https://www.linkedin.com/in/atul-kumar-chourasia-36494827a" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='text-white text-2xl hover:text-blue-400 transition ease-in-out' />
                            </a>
                        </div>

                        {/* Resume Download Button */}
                        <a
                            href="/Atul_Chourasia_Resume.pdf"
                            download="Atul_Chourasia_Resume.pdf"
                            className="px-4 w-full max-[769px]:w-full"
                        >
                            <div className="border-1 bg-yellow-400 rounded-lg flex items-center justify-center p-2 gap-2 hover:bg-amber-500 transition ease-in-out">
                                <IoDocumentTextOutline className="text-2xl font-bold" />
                                <span className="font-bold">Resume</span>
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;

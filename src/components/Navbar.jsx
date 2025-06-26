import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='bg-black fixed w-[100%] z-1000 '>
                <div className='flex justify-end   absolute z-20 w-full p-4 md:hidden   '>
                    <FaBars className='text-white text-3xl md:hidden max-[769px]:inline hover:text-yellow-400 transition-all duration-100 ease-in-out' onClick={() => setIsOpen(!isOpen)} />
                </div>

                <nav className={`${isOpen ? "flex" : "hidden"}  flex h-16 items-center max-[769px]:flex-col max-[769px]:items-start max-[769px]:h-80 max-[769px]:justify-center max-[769px]:gap-3 md:flex p-4 relative max-[768px]:top-15  bg-black    rounded  z-20 `}>
                    <div className='flex w-[27%] justify-start max-[768px]:w-full'>
                        <span className='text-white text-[17px] font-bold max-[823px]:text-[19px]'>ATUL CHOURASIA</span>
                    </div>

                    {/* Middle Nav Links */}
                    <div className='flex justify-center w-[50%] max-[769px]:w-full max-[769px]:justify-start'>
                        <ul className='flex gap-6 max-[823px]:gap-3 max-[769px]:flex-col'>
                            <a href='#about' className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out'>About</a>
                            <a href='#tech-stack' className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out'>Tech Stack</a>
                            <a href="#project-bar" className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out'>Projects</a>
                            <a href="#contact-sec"  className='text-gray-400 hover:text-white cursor-pointer transition ease-in-out'>Contact</a>
                        </ul>
                    </div>

                    {/* Social Media & Resume */}
                    <div className='flex  justify-center gap-4 max-[769px]:flex-col max-[769px]:w-full '>
                        <div className='flex justify-center items-center gap-5 max-[769px]:justify-start'>
                            <a href="https://www.instagram.com/atul_kumar_chourasia/"><FaInstagram className='text-white text-2xl hover:text-pink-500 transition ease-in-out' /></a>
                            <a href="https://github.com/atul64796"><FaGithub className='text-white text-2xl hover:text-gray-300 transition ease-in-out' /></a>
                            <a href="https://www.linkedin.com/in/atul-kumar-chourasia-36494827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='text-white text-2xl hover:text-blue-400 transition ease-in-out' /></a>
                            </div>
                            {/* Resume button */}
                            <div className=''>
                            <a href="#" className='px-4  '>
                                <div className='border-1 bg-yellow-400 rounded-lg flex items-center justify-center p-2 gap-2 max-[769px]:w-full hover:bg-amber-500 transition ease-in-out'>
                                    <IoDocumentTextOutline className='text-2xl font-bold' />
                                    <a href='./public/resume.pdf' download className='font-bold'>Resume</a>
                                </div>
                            </a>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;

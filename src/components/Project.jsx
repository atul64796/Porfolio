import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
function Project() {
  return (
    <>
    <div className=' tech flex flex-col justify-center items-center mt-30 2 mb-10 p-10'>
    <h2 className=' text-amber-400 text-xl font-bold'>Featured Projects</h2>
    <h1 className=' text-white text-4xl max-md:text-3xl  font-family-sora font-bold text-center'>My Recent Work</h1>
    </div>
{/* FIRST PROJECT */}
    <div className='flex justify-center items-center gap-3 p-30   max-md:p-10 max-sm:p-0  max-[640px]:mb-16 '>

    <div className='flex  justify-center gap-10 max-[1241px]:flex-col max-[1241px]:items-center   '>
        <div className='left-side-project w-[45%] max-[890px]:w-[97%] max-[1241px]:w-[70%]   text-white border-1 border-white/20  max-[500px]:p-4 p-7 flex flex-col gap-6  '>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl max-[1323px]:xl max-[500px]:text-lg text-yellow-400'>AI Enchancer</h2>
                <h1 className='text-4xl  max-[1323px]:text-3xl   font-bold'>AI Image Enhancer</h1>
                <p>The AI Image Enhancer is a web-based application that utilizes advanced AI models to enhance image quality, resolution, and overall appearance. It applies deep learning techniques to upscale low-quality images, remove noise, sharpen details, and improve colors. The project is designed to help photographers, designers, and general users improve their images effortlessly."</p>
            </div>
            <div className='flex flex-wrap gap-5 max-[1323px]:gap-3 items-center  px-4 max-[500px]:gap-2 '>
                    <span className='border-1 max-[1323px]:text-sm  border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Java Script</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Tailwind CSS</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Html</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>React</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Node.js</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Express.js</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Open Ai</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Vercel</span>
            </div>
            <div className='flex p-1 max-[500px]:gap-3 gap-5  w-full  '>
            <a href=""><div className='flex gap-2 max-[1323px]:text-sm justify-center items-center  p-3 bg-blue-600 transform hover:scale-110 transition duration-100'><TbWorld /><p>Website</p></div></a>
            <a href=""><div className='flex gap-2 max-[1323px]:text-sm justify-center items-center border p-3 transform hover:scale-110 transition duration-100'><FaGithub /><p>Github</p></div></a>
            <a href=""><div className='flex gap-2  max-[1323px]:text-sm justify-center items-center border p-3 transform hover:scale-110 transition duration-100'><IoPlayCircleOutline /><p>Watch Demo</p></div></a>
            </div>
        </div>
        <div className='Right-side-project w-[50%]  flex justify-center items-center   p-8  max-[1241px]:hidden'>
            <div className='bg-black border-1 overflow-hidden border-gray-500 h-[20rem] w-full rounded-2xl hover:transform hover:scale-105 transition duration-150'>
            <div className='p-2 bg-gray-900 rounded-t-2xl flex'>
                <div className='flex gap-3 item-center p-1 w-[20%] '>
                    <span className=' bg-red-600 p-2 rounded-full'></span>
                    <span className=' bg-yellow-600 p-2 rounded-full'></span>
                    <span className=' bg-green-600 p-2 rounded-full'></span>
                    </div>
                <div className='flex gap-3 item-center  w-[65%]  justify-center'>
                  <div className='border-1 w-[75%] border-gray-00 bg-gray-800 rounded-md flex justify-center items-center '>
                    <p className='text-gray-400'>Available Soon</p>
                  </div>
                    </div>
                    <div className='flex gap-3 item-center  w-[25%]  justify-center'>
                  <div className='p-1  rounded-md flex gap-5'>
                    <FiRefreshCcw className='text-white cursor-pointer hover:text-gray-400 transition duration-100' />
                    <FaExternalLinkAlt className='text-white cursor-pointer hover:text-gray-400 transition duration-100'/>
                  </div>
                    </div>
            </div>
            <div className='flex justify-center items-center h-[80%]'>
                    <img src="./public/animation.gif" alt=""  className='h-20' />
                  </div>
            </div>
            
        </div>
        </div>
    </div>

     {/* SECOND PROJECT */}

    <div className='flex justify-center items-center gap-3 p-30 max-sm:p-0  max-md:p-10'>

    <div className='flex  justify-center gap-10 max-[1241px]:flex-col max-[1241px]:items-center   '>
       
        <div className='Left-side-project w-[50%]  flex justify-center items-center   p-8  max-[1241px]:hidden'>
            <div className='bg-black border-1 border-gray-500 h-[20rem] w-full rounded-2xl hover:transform hover:scale-105 transition duration-150'>
            <div className='p-2 bg-gray-900 rounded-t-2xl flex'>
                <div className='flex gap-3 item-center p-1 w-[20%] '>
                    <span className=' bg-red-600 p-2 rounded-full'></span>
                    <span className=' bg-yellow-600 p-2 rounded-full'></span>
                    <span className=' bg-green-600 p-2 rounded-full'></span>
                    </div>
                <div className='flex gap-3 item-center  w-[65%]  justify-center'>
                  <div className='border-1 w-[75%] border-gray-00 bg-gray-800 rounded-md flex justify-center items-center '>
                    <p className='text-gray-400'>Available Soon</p>
                  </div>
                    </div>
                    <div className='flex gap-3 item-center  w-[25%]  justify-center'>
                  <div className='p-1  rounded-md flex gap-5'>
                    <FiRefreshCcw className='text-white cursor-pointer hover:text-gray-400 transition duration-100' />
                    <FaExternalLinkAlt className='text-white cursor-pointer hover:text-gray-400 transition duration-100'/>
                  </div>
                    </div>       
            </div>
            <div className='flex justify-center items-center h-[80%]'>
               <img src="./public/animation.gif" alt="" className='h-20' />
            </div>
            </div>
        </div>

         <div className='right-side-project w-[45%]  max-[1241px]:w-[70%] max-[500px]:p-5 max-[890px]:w-[97%]   text-white border-1 border-white/20  p-7 flex flex-col gap-6 '>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl max-[1323px]:xl max-[500px]:text-lg text-yellow-400'>Ai Voice Assistant</h2>
                <h1 className='text-4xl  max-[1323px]:3xl  font-bold'>Axon</h1>
                <p>Axon isn't just an assistant; it's your digital ally, built to think, learn, and adapt with you. Whether you're organizing your day, finding insights, writing code, or exploring new ideas, Axon stays a step ahead — quietly powerful, always reliable. Inspired by the neural connections that power the human brain, Axon delivers fast, intuitive support with a human touch. It's not just artificial intelligence — it's intelligent partnership.</p>
            </div>
            <div className='flex flex-wrap gap-5 max-[1323px]:gap-3 items-center  px-4 '>
                    <span className='border-1 max-[1323px]:text-sm  border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Java Script</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Tailwind CSS</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Html</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>React</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Node.js</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Express.js</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Open Ai</span>
                    <span className='border-1 max-[1323px]:text-sm border-white/20 p-3 rounded-xl transform hover:scale-110 hover:border-yellow-400 hover:border-1 transition duration-100'>Vercel</span>
            </div>
            <div className='flex p-3 gap-5  max-[500px]:gap-3 max-[500px]:p-0 '>
            <a href=""><div className='flex gap-2 max-[500px]:gap-1 max-[1323px]:text-sm justify-center items-center p-3 bg-blue-600 transform hover:scale-110 transition duration-100'><TbWorld /><p>Website</p></div></a>
            <a href=""><div className='flex gap-2 max-[500px]:gap-1 max-[1323px]:text-sm justify-center items-center border p-3 transform hover:scale-110 transition duration-100'><FaGithub /><p>Github</p></div></a>
            <a href=""><div className='flex gap-2 max-[500px]:gap-1 max-[1323px]:text-sm justify-center items-center border  p-3 transform hover:scale-110 transition duration-100'><IoPlayCircleOutline /><p>Watch Demo</p></div></a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Project
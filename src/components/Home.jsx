import React, { useState,useEffect } from 'react';
import Typed from 'typed.js';
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import atul from '/profile/atul.jpg';
function Home() {

const el = React.useRef(null);

useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Full Stack Developer', 'Web Developer', 'Software Engineer'],
    typeSpeed: 50,            // Smooth, not too fast
    backSpeed: 30,            // Slower backspace for calm effect
    startDelay:0,          // Slight pause before first start
    backDelay: 3000,          // Pause before backspacing
    loop: true,               // Repeat the strings
    smartBackspace: true,     // Only remove changed part
    showCursor: true,         // Show typing cursor
    cursorChar: '|',          // Style of cursor
  });

  return () => {
    typed.destroy(); // clean up on unmount
  };
}, []);


  return (
    <div className="flex  min-h-screen max-[500px]:p-0 p-6  max-[1169px]:flex-col relative">
      <div className='w-[70%] item-center justify-center p-4 max-[1169px]:w-full '>
      <div className="card-container  flex  flex-col  w-70 h-12 [perspective:1000px] justify-center items-center mx-auto  mt-16">
        <div className="card-inner w-full h-full">
          {/* Front Side */}
          <div className="card-face card-front bg-yellow-500 text-black rounded-full flex items-center justify-center">
            <h2 className="text-lg max-[500px]:text-lg  font-bold"> <span className='text-blue-600 text-2xl'>☺️</span> Seeking Opportunites</h2>
          </div>

          {/* Back Side */}
          <div className="card-face card-back bg-blue-700 text-white rounded-full flex items-center justify-center">
            <h2 className="text-lg max-[500px]:text-lg font-bold"><span className='text-blue-600 text-2xl'>🫠</span>Available for freelancing</h2>
          </div>
        </div>
      </div>
     <div className='flex flex-col  items-center justify-center my-12 font-family-sora max-[500px]:gap-7 font-bold gap-15'>
       <h1 className='text-6xl max-[500px]:text-4xl text-white text-center max-[785px]:text-5xl  max-[626px]:text-4xl'> <span className="bg-gradient-to-r from-violet-400 via-cyan-500 to-cyan-500 bg-clip-text text-transparent">
  Hii, I'm {''}
</span>
  Atul Chourasia</h1>
       <h1 className=' text-5xl max-[500px]:text-2xl text-blue-500 text-center max-[785px]:text-4xl max-[626px]:text-3xl' >Aspiring <span className='text-yellow-400'ref={el} >
        </span></h1>
     </div>
     <div className='mt-2 '>
        <p className='text-white text-2xl font-semibold  max-[500px]:text-[16px] text-center  max-[785px]:text-xl max-[626px]:text-lg'>I am a passionate full stack developer with a keen interest in building dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.</p>
     </div>

    <div className=' flex max-[500px]:p-1 max-[500px]:gap-7 p-4 justify-center gap-16 mt-10'>
     <div className='buttons flex bg-amber-400 font-semibold w-47 justify-center items-center gap-2  py-2  rounded-2xl cursor-pointer hover:bg-amber-500 shadow-yellow-400 hover:shadow-lg transition-all duration-300 ease-in-out'>
      <p onClick={()=> document.getElementById('project-bar')?.scrollIntoView({behavior : 'smooth'})}>View Projects</p>
      <FaArrowRight />
     </div>

    <div className='buttons flex bg-black border-1 font-semibold border-white text-white w-47 justify-center items-center gap-2  py-3 rounded-2xl cursor-pointer hover:bg-gray-600/5 transition-all duration-300 ease-in-out '>
      <p onClick={()=> document.getElementById('contact-sec')?.scrollIntoView({behavior : 'smooth'})}>Contact Me</p>
      <MdOutlineEmail />
     </div>
  </div>
      </div>
      


     <div className="image-section flex items-center w-[35%]  justify-center max-[1169px]:w-full h-[92vh]  max-[1169px]:h-[65vh] max-[500px]:h-[55vh] ">
  <div className="image-container">
    <img
      src={atul}
      alt="Atul"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
<div className=' text-white absolute bottom-8 left-[47%] max-[500px]:left-[34%] flex flex-col justify-center items-center gap-4 max-[1169px]:bottom-[-20px] max-[1169px]:left-[40%] max-[450px]:bottom- '>
  <h2>Scroll to explore</h2>
  <div className='scroll'></div>
  </div>
    </div>
  );
}

export default Home;

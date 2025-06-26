import React from 'react'
import skills from '../assets/skills'
function Skills() {
  return (
   <>
   <div className='skills flex flex-col justify-center mt-16 items-center max-[116px]:mt-20 mb-10  ' id='about'>
    <h2 className=' text-amber-400 text-xl font-bold'>My Exploration</h2>
    <h1 className=' text-white text-4xl  font-family-sora font-bold '>Things I Love</h1>
    </div>

    <div className='flex flex-wrap justify-center gap-5 p-4'>
  {skills.map((skill, index) => (
    <div
      key={index}
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-4'
    >
      <div className='p-12 h-full hover:bg-white/10 border  bg-white/5 hover:shadow-amber-400  border-gray-700 rounded-lg backdrop-blur-md flex flex-col items-center gap-2 shadow-sm hover:scale-105 transition-transform duration-300'>
        <img src={skill.logo} alt={skill.name} className='h-12 w-12' />
        <h2 className='text-yellow-400 text-xl font-semibold text-center'>{skill.name}</h2>
        <p className='text-white text-center text-sm'>{skill.description}</p>
      </div>
    </div>
  ))}
</div>
<div className='flex justify-center items-center p-5  flex-col gap-3 '>
    <h1 className=' text-xl text-yellow-500 font-family font-semibold font-family-sora'>Continuous Learning Journey</h1>
    <p className='text-lg text-white w-[66%] max-[664px]:w-full max-[664px]:text-[17px] max-[500px]:w-full max-[500px]:text-[14px] text-center '>
I embrace the mindset of a perpetual learner. While I may not claim mastery, I'm constantly exploring new technologies and leveraging AI to enhance my capabilities. Every job / project is an opportunity to grow and innovate.</p>
</div>
   </>
  )
}

export default Skills
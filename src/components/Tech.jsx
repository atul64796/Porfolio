import React from 'react'
import tech from '../assets/tech'

function Tech() {
  return (
    <>
    <div className=' tech flex flex-col justify-center items-center mt-30 mb-10 p-10'>
    <h2 className=' text-amber-400 text-xl max-[500px]:text-2xl font-bold'>My Tech Stack</h2>
    <h1 className=' text-white text-4xl max-md:text-3xl max-[500px]:text-xl font-family-sora font-bold text-center'>Technologies I Worked On</h1>
    </div>
    <div className='flex justify-center items-center m-6 '>
        <div className='flex  gap-4 p-0 flex-wrap md:w-[40%] sm:w-[70%] max-[500px]:w-full  justify-evenly'>
        {tech.map((techs,index)=>(
            <div key={index} className='flex flex-col  justify-center item-center flex-wrap text-white hover:text-yellow-500    '>
                <div className=' flex flex-col justify-center item-center max-[500px]:p-0 p-4 transition duration-200 gap-2 transform hover:scale-120 '>
                <div className='p-4 bg-white/15 hover:bg-cyan-200/15 transition duration-100 rounded-sm  hover:shadow-lg shadow-amber-300 hover:border-1  border-white'><img src={techs.language} alt="" className='h-15 w-15' /></div>
                <div><h2 className=' text-center '>{techs.name}</h2></div>
                </div>
                  
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Tech
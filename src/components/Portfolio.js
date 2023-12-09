import React from 'react'
import myYoutube from "../assets/myyoutube.png";
import mySweggy from "../assets/mysweggy.png";
import myTravel from "../assets/mytravel.png";
import myAnimation from "../assets/mytravel.png";

const Portfolio = () => {
  return (
    <div
    name="Portfolio"
    className='by-gradient-to-b from-black to-gray-800-w-full text-white md:h-screen'
    >
       <div className='mx-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-black'>Portfolio</p>
          <p className='py-6 text-black'>Check out some of my work right here</p>
      </div> 

       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={myYoutube} alt='' className='roundeded-md duration-200 hover:scale-105'/>
            <div>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 text-black'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 text-black'>Code</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Portfolio;

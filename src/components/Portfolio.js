import React from 'react'
import myYoutube from "../assets/myyoutube.png";
import mySweggy from "../assets/mysweggy.png";
import myTravel from "../assets/mytravel.png";
import myAnimation from "../assets/myanimation.png";
import myShoppingList from "../assets/shoppingList.png"
import myClock from "../assets/clock.png"

const Portfolio = () => {
    const profile = [
        {
            id: 1,
            src: myClock
            
        },
        {
            id: 2,
            src: mySweggy
        },
        {
            id: 3,
            src: myTravel
        },
        {
            id: 4,
            src: myAnimation
        },
        {
            id: 5,
            src: myShoppingList
        },
        {
            id: 6,
            src: myYoutube
        },

    ]
  return (
   <div 
   name='Portfolio'
   className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
            <p className='py-6'>Check out some my work right here</p>
             </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
              profile.map(({id,src}) => (
              <div key={id} className='shadow-sm shadow-amber-900 rounded-lg'>
                <img 
                src={src} 
                alt=''
                className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
              ))  
            }
           
        </div>

    
    </div>

   </div>
  )
}

export default Portfolio;

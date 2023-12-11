import React from 'react'
import html from "../assets/Experience/html.png"
import css from "../assets/Experience/css.png"
import javascript from "../assets/Experience/javascript.png"
import react from "../assets/Experience/react.png"
import tailwinad from "../assets/Experience/tailwind.png"
import git from "../assets/Experience/git.png"
import github from "../assets/Experience/github.png"
import netlify from "../assets/Experience/netlify.png"
import vercel from "../assets/Experience/vercel.png"
import python from "../assets/Experience/python.png"

const Experience = () => {
  const Experience = [
    {
      id: 1,
      src: html,
      title:'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title:'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title:'Javascript',
      style: 'shadow-red-500'
    },
    {
      id: 4,
      src: react,
      title:'React',
      style: 'shadow-orange-500'
    },
    {
      id: 5,
      src: tailwinad,
      title:'Tailwind',
      style: 'shadow-orange-500'
    },
    {
      id: 6,
      src: github,
      title:'Github',
      style: 'shadow-orange-500'
    },
    {
      id: 7,
      src: git,
      title:'Git',
      style: 'shadow-orange-500'
    },
    {
      id: 8,
      src: python,
      title:'Python',
      style: 'shadow-orange-500'
    },
    {
      id: 9,
      src: vercel,
      title:'Vercel',
      style: 'shadow-orange-500'
    },
    {
      id: 1,
      src: netlify,
      title:'Netlify',
      style: 'shadow-orange-500'
    },

  ]
  return (
    <div name = 'Experience' 
    className='bg-gradient-to-b from-gray-800 to-black w-full md:h-full'>
     
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
         <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
               {
                Experience.map(({id,src,title,style}) => (
                  <div 
                  key={id} 
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img className='w-20 mx-auto' src={src} alt=''/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
               }
                
            </div>
        </div>
    </div>
  )
}

export default Experience

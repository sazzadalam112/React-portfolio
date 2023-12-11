import React from 'react'
import MyImage from "../assets/myimage.png";
import{ MdOutlineKeyboardArrowRight } from "react-icons/md"
// import {BsFillPersonLinesFill} from "react-icons/bs";


const Home = () => {

  return (
    <div 
      name= "Home"
      className='h-auto w-full bg-gradient-to-b from-black to-gray-800 text-white pt-10'>

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:h-screen px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full '>
        <h2 className='text-4xl md:text-7xl mt-20 font-bold text-red-400 px-5'>I'm a Frontend-Developer</h2>
        <p className='text-gray-500 py-6 max-w-md px-5'>
       
         I am Md Sazzad Alam I hold a Bechelor of Science in Computere Science from Nalanda College of Engineering . I am proficient in programming languages such as JavaScript,React,Tailwind, Python and HTML/CSS. I have also worked with various developer tools such as VS Code
        </p>
        <div className='flex '>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-900 to-blue-900 '>
                Portfolio
                <span className='group-hover:rotate-90 duration-500'>
                    <MdOutlineKeyboardArrowRight size={25} />
                </span>
            </button>
            <li className='group text-white w-fit px-6  my-2 flex items-center rounded-md bg-gradient-to-r from-red-900 to-blue-900 mx-6 '>
               <a 
               href='/resume.png' 
              download={true}
              className='flex p-5'
               >
                 <>
                 Download CV  <MdOutlineKeyboardArrowRight className="group-hover:rotate-90 duration-500"size={25} />
                
                </>
                
               </a>
            </li>

        </div>
       </div>

          <div>
            <img 
            src={MyImage} 
            alt='my pic'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
            />
          </div>
     </div>
    </div>
  )
}

export default Home
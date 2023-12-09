import { list } from 'postcss';
import React from 'react';
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {

    const links =[
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'Project'
        },
        {
            id: 4,
            link: 'Contact'
        },
        ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black'>
        <div>
            <h1 className='text-5xl font-light ml-2'>Sazzad</h1>
        </div>

        <ul className='flex'>
            {
                links.map(({link, id}) => (
                      <li
                      key={id} className='p-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
                
                ))
            }
          
        </ul>
     
    </div>
  )
}

export default Navbar

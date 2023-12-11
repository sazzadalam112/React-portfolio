import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram,FaTwitter} from "react-icons/fa";
// import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";


const SocialLinks = () => {
 const links = [
    {
        id: 1, 
        child: (
            <>
            <FaLinkedin  size={30}LinkedIn />
            </>
        ),
        href: "https://www.linkedin.com/in/md-sazzad-alam/",
        style: 'rounded-tr-md'
    },
    {
        id: 2, 
        child: (
            <>
             <FaGithub  size={30}GitHub/>
            </>
        ),
        href: "https://github.com/sazzadalam112",
        style: 'rounded-tr-md'
    },
    {
        id: 3, 
        child: (
            <>
            <FaInstagram  size={30} Instagram/>
            </>
        ),
        href: "https://www.instagram.com/geekysazzad/",
        style: 'rounded-tr-md'
    },
    {
        id: 4, 
        child: (
            <>
            <FaTwitter  size={30} Mail/>
            </>
        ),
        href: "https://twitter.com/mdsazza41750849",
        style: 'rounded-tr-md'
        
    },
    {
        id: 5, 
        child: (
            <>
           <BsFillPersonLinesFill  size={30} Resume />
            </>
        ),
        href: "/resume.png",
        style: 'rounded-tr-md',
        download: true,
    },
 ]
  return (
    <div className=' sm:hidden lg:flex flex-col top-[42%] right-0 fixed'>
      <ul>

        {links.map(({id,child,href,style,download}) => (
             <li key={id} className={'flex justify-between items-center w-40 h-12  px-4 mr-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}>
            <a 
            href={href}
            className='flex justify-between items-center w-full text-white 
            
            target="_blank"'
            download={download}
            >
                
               
               {child}

            </a>
        </li>
        ))}
       
      </ul>
    </div>
  )
}

export default SocialLinks

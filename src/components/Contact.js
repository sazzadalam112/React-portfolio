import React from 'react'

const Contact = () => {
  return (
    <div name = 'constact' 
    className='w-full h-full  bg-gradient-to-b from-black to bg-gray-800 p-4 text-white'>
     <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form to Hit me up</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/7fb9a6bd-f467-4c1e-bafc-a4c1364f78cb' 
            method="POST"
            className='flex flex-col w-full md:w-1/2 '>
                <input 
                 type='text' 
                 name='name'
                 placeholder='Enter your name'
                 className='p-2 border-gray-200 border-2 rounded-md text-white focus:outline-none bg-slate-800'
                />
                <input 
                 type='text' 
                 name='email'
                 placeholder='Enter your email'
                 className='p-2 border-gray-200 border-2 rounded-md my-10 text-white focus:outline-none bg-gray-800'
                />
                <textarea 
                name='message'
                placeholder='Enter your message
                '
                rows='10'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                </textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-red-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Contact

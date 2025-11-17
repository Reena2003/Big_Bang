import React from 'react'
import logo from '../assets/logo.jpg'


const Navbar = () => {
    return (
        <div className='flex  bg-white   text-black justify-around items-center py-2'>
            <div className='flex gap-2 items-center'>
                <img  className='size-12 rounded-full overflow-hidden' src={logo} alt="Logo" />
                <div className='flex flex-col'>
                    <h1 className='text-green-800 font-bold text-3xl'>BIG BANG</h1>
                    <div className=' flex text-center' >
                        <span className=' leading-0.5 m-1  -tracking-tighter'>Tution</span>
                        <span className=' leading-0.5 m-1 -tracking-tighter'>Classes</span>
                    </div>
                </div>
            </div>

            <div className='nav'>
                <ul   className='flex gap-5'>
                    <li className='px-4 py-3 '><a href=''>HOME</a> </li>
                    <li  className='px-4 py-3 '><a href=''>ABOUT</a> </li>
                    <li  className='px-4 py-3 '><a href=''>CLASSES</a> </li>
                    <li  className='px-4 py-3 '><a href=''>TEACHER</a> </li>
                    <li className='bg-amber-400 rounded px-4 py-3'><a href=''>CONTACT</a> </li>

                </ul>

            </div>
        </div>
    )
}

export default Navbar

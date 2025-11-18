import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <div className='flex bg-white text-black justify-around items-center py-2 px-2 md:px-4 flex-wrap gap-4'>
            <div className='flex gap-2 items-center shrink-0'>
                <img className='size-8 sm:size-10 md:size-12 rounded-full overflow-hidden' src={logo} alt="Logo" />
                <div className='flex flex-col'>
                    <h1 className='text-green-800 font-bold text-lg sm:text-2xl md:text-3xl'>BIG BANG</h1>
                    <div className='flex text-center gap-1'>
                        <span className='text-xs sm:text-sm leading-tight'>Tution</span>
                        <span className='text-xs sm:text-sm leading-tight'>Classes</span>
                    </div>
                </div>
            </div>

            <div className='nav'>
                <ul className='flex gap-1 sm:gap-3 md:gap-5 flex-wrap justify-center'>
                    <li className='px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base'><a href='#Home'>HOME</a></li>
                    <li className='px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base'><a href='#About'>ABOUT</a></li>
                    <li className='px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base'><a href='#Classes'>CLASSES</a></li>
                    <li className='px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base'><a href='#Mentor'>MENTOR</a></li>
                    <li className='bg-amber-400 rounded px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base'><a href='#Contact'>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

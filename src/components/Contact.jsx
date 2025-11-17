import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[400px] bg-[#28373d] flex justify-center items-center'>
        <form className='flex flex-col gap-5 ' >
            <input className='bg-[#3f4c52] w-[600px] outline-0 px-5 py-2 text-xl rounded text-white' type="text" placeholder=' Enter your name' />
            <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your phone' />
            <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your City' />
            <textarea  className='bg-[#3f4c52]  outline-0 px-5 py-3 text-xl rounded text-white' placeholder='Message'></textarea>

            <div className='flex justify-center'>
            <button className='bg-amber-400 text-black cursor-pointer text-[16px] items-center rounded w-[100px] px-4 py-3' type='submit'>Submit</button>
            </div>



        </form>
    
    </div>
  )
}

export default Contact

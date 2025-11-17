import React from 'react'
import teacher1 from '../assets/photo.jpg'

const Director = () => {
    return (
        <div className=' dir h-[510px] w-full  mb-10 overflow-hidden '>
            <h1 className='text-3xl text-center font-bold pt-3'>Meet Our Director</h1>

            <div className='flex px-5 items-center gap-30 '>

                <div className='h-[450px] w-[500px] ml-20 overflow-hidden  rounded shadow-2xl'>
                    <img className='object-cover h-[370px] w-full' src={teacher1} alt="Teacher" />

                    <div className='py-3 text-center'>
                        <h1>P.RAKESH RAO</h1>
                        <h3 className=''>Director & CEO </h3>
                    </div>
                </div>

            <div className='flex flex-col gap-5'>
                <div>

                <h1 className='text-2xl font-bold'>Mr. P. Rakesh Rao</h1>


                <h1 className='text-[16px] font-medium pb-10'>Director & Mathematics Expert</h1>
                </div>
                <h1 className='text-[16px] tracking-wider leading-relaxed'> 15+ years of teaching experience in CBSE & State Board.<br />
Hundreds of students have scored 90%+ under his guidance.
Known for easy explanations & <br /> strong conceptual teaching.
Focuses on personalised learning and doubt-clearing <br />for every student.
Helps students build strong basics so they can perform <bt />confidently in exams
Trusted by parents for consistent results and friendly teaching approach.
</h1>

                </div>











            </div>











        </div>
    )
}

export default Director

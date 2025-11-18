import React from 'react'
import teacher1 from '../assets/photo.jpg'

const Director = () => {
    return (
        <section id="Mentor" className='dir w-full mb-10 h-auto md:h-[530px]'>
            <h1 className='text-3xl text-center font-bold p-4'>Meet Our Director</h1>

            <div className='flex flex-wrap px-5 items-center gap-[30px]'>

                <div className='h-[450px] w-full md:w-[550px] md:ml-20 overflow-hidden rounded shadow-2xl'>
                    <img className='object-cover h-[370px] w-full' src={teacher1} alt="Teacher" />

                    <div className='py-3 text-center'>
                        <h2 className='text-xl font-semibold'>P.RAKESH RAO</h2>
                        <h3 className='text-sm'>Director & CEO</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div>

                        <h1 className='text-2xl font-bold'>Mr. P. Rakesh Rao</h1>


                        <h1 className='text-[16px] font-medium pb-10'>Director & Mathematics Expert</h1>
                    </div>
                    <div>
                        <p className='text-[16px] tracking-wider leading-relaxed'>
                            10+ years of teaching experience in CBSE & State Board.<br />
                            Hundreds of students have scored 90%+ under his guidance.<br />
                            Known for easy explanations and strong conceptual teaching.<br />
                            Focuses on personalised learning and doubt-clearing for every student.<br />
                            Helps students build strong basics so they can perform confidently in exams.<br />
                            Trusted by parents for consistent results and a friendly teaching approach.
                        </p>

                    </div>











                </div>
                </div>











        </section>
    )
}

export default Director

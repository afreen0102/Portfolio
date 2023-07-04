import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                  About
                </p>
              </div>
              <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Afreen Syed, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>As a beginner frontend developer, I'm passionate about creating engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript, I strive to build intuitive and user-friendly websites. I'm open to collaboration and constantly learning to improve my skills. Let's create something amazing together!</p>  
                </div>
            </div>
          </div>
        </div>
      );
    };
    


export default About

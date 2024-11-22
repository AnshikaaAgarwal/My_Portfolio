import React from 'react';
import myimg from "../../assets/img.jpeg";
import { Link } from 'react-scroll';
import TextChange from '../../TextChange';

const Home = () => {
  return (
    <div id="About" className='text-white flex w-full justify-between items-center p-10 md:p-20'>
      {/* Text and button section */}
      <div className='md:w-2/4 w-full flex flex-col justify-center'>
        <h1 className='text-lg md:text-4xl font-bold leading-normal tracking-tighter'>
           <TextChange/>
        </h1>

        <p className='text-sm md:text-xl tracking-tight pt-7'>
          


I am a pre-final year student at IGDTUW, Delhi, pursuing a B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence. I have a solid grasp of Data Structures and Algorithms (DSA), I am actively learning full-stack development to build dynamic web applications.I'm passionate about AI & ML, constantly exploring innovative approaches to develop solutions in these fields.
        </p>

        <Link 
          to="Contact" 
          smooth={true} 
          duration={500} 
          className='mt-5 text-white py-2 px-3 text-sm md:text-xl text-center
          md:py-2 md:px-4 hover:opacity-50 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer'
        >
          Contact Me
        </Link>
      </div>

      {/* Image Section */}
      <div className='md:w-2/4 w-full flex justify-end pt-5 md:pt-0 pr-4'>
        <img className='w-1/2 md:w-3/5 h-auto' src={myimg} alt='Anshika' />
      </div>
    </div>
  );
};

export default Home;



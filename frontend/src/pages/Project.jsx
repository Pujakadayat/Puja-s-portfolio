import React from 'react';
import Project6 from '../assets/Project6.png';
import Project5 from '../assets/Project5.png'
import Project4 from "../assets/Project4.avif"
import Project3 from "../assets/Project3.png"
function Project(){
    return (
        <>
        <div className=" bg-[#efaad9] m-20 max-w-full">
    <div className='grid justify-items-center m-10'>
        <h1 className='text-5xl text-black mt-10'> Project</h1>
    </div>
<div>
 <div className='grid grid-cols-2 gap-4 p-5' >
        <div className='max-w-md mx-auto bg-[#83a5d5] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-purple-600 transition duration-300'>


<div className='md:flex'>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
           Winkle 
        </div>
        <a href='#'> Multi-Vendor E-Commerce System</a>
        <p className='mt-2 text-black-500'>
        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, 
        a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 
        </p>
    </div>
    <div className='md:shrink-0 p-5'>
        <img src = {Project6}  alt = "Project6"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>
    
           
    </div>

</div>
        </div>
        <div className='max-w-md mx-auto bg-[#d9c7b0] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-purple-600 transition duration-300'>
<div className='md:flex'>
      <div className='md:shrink-0 p-5'>
        <img src = {Project5}  alt = "Project5"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>       
    </div>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
           Kakshya 
        </div>
        <a href='#'> E-Learning Platform</a>
        <p className='mt-2 text-black-500'>
        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, 
        a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 

        </p>
    </div>
  

</div>
        </div>
</div>
 <div className='grid grid-cols-2 gap-4 p-5' >
        <div className='max-w-md mx-auto bg-[#d9c7b0] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-purple-600 transition duration-300'>
<div className='md:flex'>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
           Yatra
        </div>
        <a href='#'> A Travel Booking App</a>
        <p className='mt-2 text-black-500'>
        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, 
        a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 
        added, and removed to make it nonsensical and improper Latin.
        </p>
    </div>
    <div className='md:shrink-0 p-5'>
        <img src = {Project4}  alt = "Project4"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>
    
           
    </div>

</div>
        </div>
        <div className='max-w-md mx-auto bg-[#83a5d5] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-purple-600 transition duration-300'>
<div className='md:flex'>
      <div className='md:shrink-0 p-5'>
        <img src = {Project3}  alt = "Project3"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>       
    </div>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
          DataQuest 
        </div>
        <a href='#'> Online Surveying platform</a>
        <p className='mt-2 text-black-500'>
        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, 
        a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 
        added, and removed to make it nonsensical and improper Latin.
        </p>
    </div>
  

</div>
        </div>
</div>
   
        <hr />
        <div className='grid grid-cols-2 gap-4 p-5'>

        </div>
    </div>
</div>
        </>


    );
}

export default Project
import React from 'react';
import Project6 from '../assets/Project6.png';
import Project5 from '../assets/Project5.png'
import Project4 from "../assets/Project4.avif"
import Project3 from "../assets/Project3.png"
import kishan from "../assets/kishan.jpg"
import flashcard from "../assets/flashcard.png"
function Project(){
    return (
        <>
        <section id = "project" >
 <div className=" bg-[#f7f7f9] m-20 max-w-full">
    <div className='grid justify-items-center m-10'>
        <h1 className='text-5xl text-black mt-10'> Project</h1>
    </div>
<div>
 <div className='grid grid-cols-2 gap-4 p-5' >
        <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>


<div className='md:flex'>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
           Winkle 
        </div>
        <a href='https://github.com/Pujakadayat/Winkel'> Multi-Vendor E-Commerce System</a>
        <p className='mt-2 text-black-500'>
     Developed a multi-vendor e-commerce system using flutter and firebase.
     {/* following agile developement methodology 
     to create platform that connects local vendors with customers, featuring distinct user roles(admin,vendor,buyer). 
     A structured vendor verification system and comprehensive functionality including product management, order processing, and payment intergration. */}
        </p>
    </div>
    <div className='md:shrink-0 p-5'>
        <img src = {Project6}  alt = "Project6"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>
    
           
    </div>

</div>
        </div>
        <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>
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
      
      Kakshya is a student management  web application built using MERN stack.It streamline academic workflows by offerinf role-based access for students,teachers, and HODs(Gead of Department).
        </p>
    </div>
  

</div>
        </div>
</div>
 <div className='grid grid-cols-2 gap-4 p-5' >
        <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>
<div className='md:flex'>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
           Yatra
        </div>
        <a href='https://github.com/Pujakadayat/yatra'> A Travel Booking App</a>
        <p className='mt-2 text-black-500'>
       "Yatra" a travel booking app developed using flutter for frontend and firebase for backend.
        </p>
    </div>
    <div className='md:shrink-0 p-5'>
        <img src = {Project4}  alt = "Project4"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>
    
           
    </div>

</div>
        </div>
        <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>
<div className='md:flex'>
      <div className='md:shrink-0 p-5'>
        <img src = {Project3}  alt = "Project3"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>       
    </div>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
          DataQuest 
        </div>
        <a href='https://github.com/Pujakadayat/dataQuest-1'> Online Surveying platform</a>
        <p className='mt-2 text-black-500'>
        DataQuest a public Surveying website developed using React.js and Node.js,
        where users can create and share surveys, and view results in real-time.
        </p>
    </div>
  

</div>
        </div>
        <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>
<div className='md:flex'>
      <div className='md:shrink-0 p-5'>
        <img src = {kishan}  alt = "kishan"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>       
    </div>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
          Kishan
        </div>
        <a href='https://github.com/Pujakadayat/Kishan'> Smart Agriculture  platform</a>
        <p className='mt-2 text-black-500'>
Kishan App is an online agricultural marketplace that connects farmers to consumers directly, eliminating the middleman and preserving trust and transparency.
        </p>
    </div>
  

</div>
        </div>
            <div className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse border-2 border-gray-800 hover:bg-[#d4bcc9] transition duration-300'>
<div className='md:flex'>
      <div className='md:shrink-0 p-5'>
        <img src = {flashcard}  alt = "flashcard"  className= 'border-6 border-[#dfdfe1]' width = {150} height = {150}/>       
    </div>
    <div className='p-8'>
        <div className='uppercase tracking-wide text-xl to-indigo-500 font-semibold '>
          Kishan
        </div>
        <a href='https://github.com/Pujakadayat/Nepalse-culture-based-english-word-flashcard'> Nepalse-culture-based-english-word-flashcard</a>
        <p className='mt-2 text-black-500'>
Hackathon Project (Third Place)
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
        </section>
       
        </>


    );
}

export default Project
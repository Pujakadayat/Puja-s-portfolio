import React from 'react'
import {BsFacebook, BsGithub,BsTwitter, BsLinkedin} from "react-icons/bs";


function About(){
    return (
<section id = "about" className='py-16 px-6 bg-[#f8f3f2] text-black'>
    <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
        <p className='text-lg text-slate-600 mb-6'>
            Let's build quality in programming with our services
        </p>
        <button className='bg-[#d9807a] text-white px-10 py-3 my-3 hover:bg-red-800 rounded-full transition duration-300'>
            Show More...
            </button>
        <div className='flex justify-center mt-8 space-x-6'>
            <BsFacebook
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            />
            <BsGithub
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            />
            <BsTwitter
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"         
            />
            <BsLinkedin
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            /> 
            </div> 
    </div>
</section> 
    );
}
export default About
       
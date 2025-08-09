import React from 'react'
import {BsFacebook, BsGithub,BsTwitter, BsLinkedin} from "react-icons/bs";


function About(){
    return (
<section id = "about" className='py-16 px-6 bg-[#f8f8f8] text-black'>
    <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
        <p className='text-lg text-slate-600 mb-6'>
            I'm a Full Stack Developer, passionate about creating scalable, high performace  applications that deliver seamless user experiences.
        </p>
        <button className='bg-black text-white px-10 py-3 my-3 hover:bg-red-800 rounded-full transition duration-300'>
            Show More...
            </button>
        <div className='flex justify-center mt-8 space-x-6'>
            < a href='https://www.facebook.com'
            target='_blank'
            rel= "noopener norefferrer"
            >
     <BsFacebook
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            />
            </a>
        < a href='https://github.com/Pujakadayat'
            target='_blank'
            rel= "noopener norefferrer"
            >
                 <BsGithub
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            />
            </a>
              < a href='https://www.linkedin.com/in/puja-kadayat-a77b64260/'
            target='_blank'
            rel= "noopener norefferrer"
            > 
            <BsLinkedin
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"
            /></a>
            < a href='https://github.com/Pujakadayat'
            target='_blank'
            rel= "noopener norefferrer"
            >
                 <BsTwitter
                size={40}
                className="border-4 p-2 rounded-full hover:bg-[#d9807a] transition"         
            />
            </a>
           
           
            
            </div> 
    </div>
</section> 
    );
}
export default About
       
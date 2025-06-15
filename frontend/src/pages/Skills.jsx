import React from 'react';
import {BsFacebook, BsGithub,BsTwitter, BsLinkedin} from "react-icons/bs";
import django from '../assets/django.png';
import react from '../assets/react.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import python from '../assets/python.jpeg';


const skillsdata = [
    {
        id: 1,
        name: "Django",
        image: django,
description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    },
    {
        id: 2,
        name: "React",
        image: react,
description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    },
    {
        id: 3,
        name: "HTML",
        image: html,
        description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    },
    {
        id: 4,
        name: "CSS",
        image: css,
              description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    },
    {
        id: 5,
        name: "Python",
        image: python,
        description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    }
];
const SkillBox =({image,name,description}) => {
 return (
      <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
        <img src = {image} alt= {name} className='w-16 h-16 sm:w-20 sm:h-20 object-contain' />
    </figure>
    <header>
        <h3 className='text-lg sm:text-xl font-semibold  mb-2 text-white'>{name}</h3>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    </header>
    </article>
 );
};

function Skills(){
    return (
        <section className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-[#9cc5ed]'>
            <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'>
            </div>
            <div data-aos="fade-up"  data-aos-delay = '300' className='relative text-center space-y-6 sm:space-y-10 z-10'>
                <header>
                    <h1 className='text-3xl sm:text-4xl font-bold'>
                        My Expertise <br /> and <span className='text-purple-600'> Skills</span>
                    </h1>
                    <p className='text-gray-700 mt-2 sm:mt-4 text-sm sm:text-base'>
                        I am proficient in a range of technologies, including Django, React, HTML, CSS, and Python. 
                        My expertise allows me to build robust and scalable web applications.
                         </p>
                </header>
                <section data-aos = "fade-up" data-aos-delay = '500'
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
                {skillsdata.map((skill) =>{
                  return (
<SkillBox 
                        key={skill.id}
                        image={skill.image}
                        name={skill.name}
                        description={skill.description}
                    />
                  )  
                })}
                </section>
                </div>
        </section>
    );
}

export default Skills
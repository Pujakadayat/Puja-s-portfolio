import React from 'react';
import {BsFacebook, BsGithub,BsTwitter, BsLinkedin} from "react-icons/bs";
import django from '../assets/django.png';
import react from '../assets/react.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import python from '../assets/python.jpeg';
import Tilt from 'react-parallax-tilt';
import C  from "../assets/c++.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import sql from "../assets/sql.png"
import firebase from "../assets/firebase.png"
import fastapi from "../assets/fastapi.png"

const skillsdata = [
    {
        id: 1,
        name: "C++",
        image: C,
    },
    {
        id: 2,
        name: "Django",
        image: django,
    },
    {
        id: 3,
         name: "Python",
        image: python,
      

    },
    {
        id: 4,
        name: "HTML",
        image: html,
        // description:"  Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, "
    },
    {
        id: 5,
        name: "CSS",
        image: css,
        
    },
    {
        id: 6,
         name: "React",
        image: react,
    },
    {
        id: 7,
         name: "Mysql",
        image: mysql,
    },
      {
        id: 8,
         name: "SQL",
        image: sql,
    },
      {
        id: 9,
         name: "Firebase",
        image: firebase,
    },
      {
        id: 10,
         name: "MongoDB",
        image: mongodb,
    },
    {
        id:11,
        name:"FastApi",
        image: fastapi
    }
];
const SkillBox =({image,name}) => {
 return (
    <Tilt 
    glareEnable = {true}
    glareMaxOpacity={0.45}
    scale={1.5}
    transitionSpeed={1500}
    className='min-w-[160px] sm:min-w-[150px] h-[150px] sm:h-[150px] bg-gradient-to-br from-gray-600 via-gray-700 to-purple-800 rounded-2xl  shadow-lg  hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 flex flex-col items-center justify-center mx-4'>
    <img src = {image} alt= {name} className='w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2' />
     <h3 className='text-lg sm:text-xl font-semibold  mb-2 text-white'>{name}</h3>
        </Tilt>

 );
};

function Skills(){
    return (
        <section id = "skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-[#f7f7f9]'>
            <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2' />

            <div  className='z-10 relative text-center space-y-6 sm:space-y-10 '>
                <header>
                    <h1 className='text-3xl sm:text-4xl font-bold'>
                        My Expertise <br /> and <span className='text-purple-600'> Skills</span>
                    </h1>
                   
                </header>
                <div 
                className="z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
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
                </div >
                </div>
        </section>
    );
}

export default Skills
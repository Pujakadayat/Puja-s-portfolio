import React, { useEffect, useState } from 'react';
import Project6 from '../assets/Project6.png';
import Project5 from '../assets/Project5.png'
import Project4 from "../assets/Project4.avif"
import Project3 from "../assets/Project3.png"
import kishan from "../assets/kishan.jpg"
import netflix from "../assets/netflix.jpg"
import flashcard from "../assets/flashcard.png"
import cusbehave from "../assets/cus_behave.png"
import google from "../assets/google.png"
import resume from "../assets/resume.png"
import bank from "../assets/bank.png"
import winkadmin from "../assets/winkadmin.png"
import dm from "../assets/dm.png"

const projectData = [
  {
    name: "Winkle",
    img: Project6,
    link: "https://github.com/Pujakadayat/Winkel",
    desc: "Multi-vendor e-commerce mobile app built with Flutter and Firebase for seamless online shopping.",
    category: "Mobile App"
  },
  {
    name: "Kakshya",
    img: Project5,
    link: "https://github.com/Pujakadayat/Winkel",
    desc: "Student management system using MERN providing role-based access for students, teachers and HODs.",
    category: "Web Development"
  },
  {
    name: "Yatra",
    img: Project4,
    link: "https://github.com/Pujakadayat/yatra",
    desc: "Travel booking application developed with Flutter and Firebase for trip discovery and reservations.",
    category: "Mobile App"
  },
  {
    name: "DataQuest",
    img: Project3,
    link: "https://github.com/Pujakadayat/dataQuest-1",
    desc: "Survey creation web platform using React and Node enabling users to design surveys and view results.",
    category: "Web Development"
  },
  {
    name: "Kishan",
    img: kishan,
    link: "https://github.com/Pujakadayat/Kishan",
    desc: "Agricultural marketplace app connecting farmers and consumers directly with transparent trading.",
    category: "Mobile App"
  },
  {
    name: "Nepalese Culture Based English Word Flashcard(Third Place)",
    img: flashcard,
    link: "https://github.com/Pujakadayat/Nepalse-culture-based-english-word-flashcard",
    desc: "Gamified flashcard app teaching English words through Nepalese cultural examples and illustrations.",
    category: "Hackathon"
  },
  {
    name: "Customer Trend Data Analysis",
    link: "https://github.com/Pujakadayat/Customer_trend_data_analysis",
    img: cusbehave,
    desc: "Analyzed customer purchase trends using Python and SQL with cohort and retention analysis.",
    category: "Python"
  },
  {
    name: "Banking Customer Data Analysis",
    link: "https://github.com/Pujakadayat/Banking_Customer_data_Analysis",
    img: bank,
    desc: "Studied banking customer demographics to identify churn drivers, credit behavior and loan patterns.",
    category: "Python"
  },
  {
    name: "Google Data Analysis",
    link: "https://github.com/Pujakadayat/Google-Data-Analysis",
    img: google,
    desc: "Performed EDA and business case analytics using Python + SQL based on Google Data Analytics workflow.",
    category: "Python"
  },
  {
    name: "Netflix Movie Data Analysis",
    link: "https://github.com/Pujakadayat/Netflix-movie-data-analysis",
    img: netflix,
    desc: "Analyzed Netflix movie dataset to identify viewer preferences, time trends and most popular genres.",
    category: "Python"
  },
  {
    name: "Data Analysis With SQL",
    link: "https://github.com/Pujakadayat/Data-Analysis-With-Sql",
    img: "https://raw.githubusercontent.com/Pujakadayat/Data-Analysis-With-Sql/main/sample.png",
    desc: "Explored sales data using SQL including JOINs, CTEs, window functions and aggregate analytics.",
    category: "Python"
  },
  {
    name: "AI Resume Analyzer",
    img: resume,
    link: "https://ai-resume-analyzer-ochre-theta.vercel.app/auth?next=/",
    desc: "Built an AI-powered resume screening tool that parses candidate resumes and scores them based on role fit.",
    category: "Web Development"
},
{
    name: "MyBlog",
    img: "https://raw.githubusercontent.com/Pujakadayat/MyBlog/main/sample.png",
    link: "https://github.com/Pujakadayat/MyBlog",
    desc: "Personal blogging platform built with React and Node.js to publish, edit and manage blog posts.",
    category: "Web Development"
},
{
    name: "Dashboard DataMining",
    img: dm,
    link: "https://github.com/Pujakadayat/Dashboard_datamining",
    desc: "Interactive dashboard developed for visualizing and exploring data-mining algorithm results using Python and Dash.",
    category: "Python"
},
{
    name: "Winkler-Admin",
    img:winkadmin,
    link: "https://github.com/Pujakadayat/Winkler-admin",
    desc: "Admin panel for the Winkle e-commerce platform to manage vendors, products and orders built with React and Firebase.",
    category: "Web Development"
}

];



const categories = ["All","Web Development","Mobile App","Hackathon","Python"];

function Project(){

    const [selectedCategory, SetselectedCategory] = useState("All");

   const FilteredProjects = 
   selectedCategory === "All"
   ? projectData
   : selectedCategory === "Python Projects"
   ? githubProjects.map((repo) => ({
    name:repo.name,
    link:repo.html_url,
    desc:repo.description,
    img:"https://pujakadayat.com.np/#",
   }))
   : projectData.filter((p) => p.category === selectedCategory);

     return (
        <section id = "project"  className='py-20 bg-[#f7f7f9'>
 {/* <div className=" bg-[#f7f7f9] m-20 max-w-full"> */}
  
        <h1 className='text-5xl text-black text-center mb-10'> Project</h1>
          <div className='flex justify-center gap-4 fex-wrap mb-10'> 
{categories.map((cat) =>(
    <button
    key = {cat}
    onClick={() => SetselectedCategory(cat)}
    className={`px-5 py-2 rounded-full font-semibold border transition
        ${selectedCategory === cat ? "bg-black text-white" : "bg-white text-black hover:bg-gray-300"}`}
        >
            {cat}
        </button>
))}
</div>
{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
    {FilteredProjects.map((p, index) =>(
        <div
        key = {index}
        className='max-w-md mx-auto bg-[#e7ebef] rounded-xl shadow-md hover:bg-[#d4bcc9] transition border-2 border-gray-800'
        >
            <div className="md:flex ">
                <div className="p-8">
                    <h2 className="text-xl font-semibold">{p.name} </h2>
                    <a href={p.link} className="text-blue-500 underline" target = "_blank"> View Project</a>
                    <p className="mt-2 text-black">{p.desc}</p>
                </div>
                <div className="p-5">
                    <img src={p.img}  alt={p.name}  className="w-[350px] h-[100px] object-cover border-2 border-[#dfdfe1]"  />
                </div>
            </div>
            </div>
    ))}
</div> */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 place-items-center">
    {FilteredProjects.map((p, index) => (
        <div
            key={index}
            className="w-full max-w-md bg-[#e7ebef] rounded-xl shadow-md hover:bg-[#d4bcc9] transition border-2 border-gray-800 flex flex-col"
        >
            <div className="flex flex-col md:flex-row h-full justify-between">
                <div className="p-6 flex-1">
                    <h2 className="text-xl font-semibold">{p.name}</h2>
                    <a href={p.link} className="text-bluegrey-500 underline" target="_blank">
                        View Project
                    </a>
                    <p className="mt-2 text-black">{p.desc}</p>
                </div>

                <div className="p-5 flex justify-center items-center">
                    <img
                        src={p.img}
                        alt={p.name}
                        className="w-[160px] h-[120px] object-cover border-2 border-[#dfdfe1] rounded-md"
                    />
                </div>
            </div>
        </div>
    ))}
</div>

        </section>
       


    );
}

export default Project
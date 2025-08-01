import { useState,useEffect } from "react";
import   HeroPic from "../assets/pujaapp.png"
import Puja from "../assets/puja.pdf";
function Hero(){
    return (
<section className="flex justify-around items-center p-5 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 bg-[linear-gradient(180deg,_#f7f7f9,_#ffffff)] text-black">
    <div className="w-1/2 items-center ssm:w-fit">
        <img src = {HeroPic} alt = '' 
        className="w-80 h-80 object-cover border-6 border-white shadow-lg rounded-full "/>
        </div>

          <div className="lg:w-1/3 ssm:w-fit ">
  <p className="text-4xl mb-5 text-slate-500 font-libertinus text-black"> Hello! I am</p>
  <h1 className="text-4xl" >Puja Kadayat</h1>
  <hr />
  <p className="mt-10 text-xl text-slate-500 font-libertinus text-black">
    Website Developer,Tech Enthusiast</p> 
       <a href = {Puja} download = "PujaKadayat.pdf">
        <button className="bg-black text-white px-10 py-2 my-3  hover:bg-red-800 hover:text-white rounded-full">
            
            Download CV
        </button>
        </a>
    </div>

</section>
    );
}

export default Hero
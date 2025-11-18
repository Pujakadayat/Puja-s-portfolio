import React from "react";
import { CgNametag } from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import {HiMenuAlt1} from "react-icons/hi";
import Project from "../pages/Project"
import Skills from "../pages/Skills";
import pp from "../assets/pp.png"
import Contact from "../pages/Contact";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
  function Nav() {

  const [toggle,setToggle] = useState(false);

  function openMenu(){
    setToggle(true);
  }
  function closeMenu(){
    setToggle(false);
  }
  
  return (
<>

<div className="flex items-center justify-between px-10 py-6 bg-[#222222] text-white">
<div>
  <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
    <img
      src={pp}
      alt="profile"
      className="w-[70px] h-[70px] object-cover border-none border-[#dfdfe1] rounded-full"
    />
  </a>
</div>

   <div className="space-x-4"> 
<div className="sm:hidden lg:block space-x-2">
      <a href="#about" className="text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-xl"> About</a>
  
      <a href="#skills" className="text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-xl"> Skills</a>
      <a href="#project" className="text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-xl"> Project</a>
        <a href="#contact" className="text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-xl"> Contact</a>
</div>
<div className="sm:block lg:hidden">
  {toggle ? (
 <AiOutlineClose  onClick = {closeMenu} size = {30} className="text-black cursor-pointer"/>
  ):( <HiMenuAlt1  onClick = {openMenu} size = {30} className="text-black"/>)}
 
</div>
   </div>

    </div>
    <div className="sm:block lg:hidden">
      {toggle ?(
  <div className="flex justify-between ml-10">
        <ul>
        <li className="text-black text-xl mb-2 cursor-pointer">Skills</li>
         <li className="text-black text-xl mb-2 cursor-pointer"> Project</li>
          <li className="text-black text-xl mb-2 "> Contact</li>
        </ul>
      </div>
      ):(
        <div> </div>
      )}
    
    </div>
    </>
    
  );
}

export default Nav;

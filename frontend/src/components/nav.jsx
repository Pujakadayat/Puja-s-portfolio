import React from "react";
import { CgNametag } from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import {HiMenuAlt1} from "react-icons/hi";
import Project from "../pages/Project"
// import Contact from "../pages/Contact";
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
<div className="flex items-center justify-between px-10 py-6 bg-[#9cc5ed] text-white">
   <div>
    <a href="#" className="text-black font-mono text-3xl tracking-wider flex items-center"><CgNametag/>Portfolio</a>
 </div> 
   <div className="space-x-4"> 
<div className="sm:hidden lg:block space-x-2">
      <a href="#" className="text-black hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"> About</a>
      <a href="#" className="text-black hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"> Skills</a>
      <a href="#" className="text-black hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"> Project</a>
        <a href="#" className="text-black hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"> Contact</a>
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

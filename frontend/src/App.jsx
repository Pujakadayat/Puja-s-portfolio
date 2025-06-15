import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"

import Main from './components/main'
import Nav from "./components/nav"


// function App() {
  
//   return (
//   //  <BrowserRouter>
//   //  <Routes>
//   //   <Route 
//   //   path = "/"
//   //   element= {
//   //     <ProtectedRoute>
//   //       <LoadingScreen/>
//   //     </ProtectedRoute>
//   //   }
//   //   />
//   //   <Route path = "/about" element ={<About />} />
//   //       <Route path = "/projects" element ={<Project />} />
//   //           <Route path = "/skills" element ={<Skills />} />
//   //               <Route path = "/contact" element ={<Contact />} />
//   //                  <Route path = "*" element = {<Notfound/>} />
//   //  </Routes>
//   //  </BrowserRouter>

// <Home/>
//   )
// }


function App(){
  return(
    <>
 
    {/* <Home /> */}
    <Main />
    </>
  );
}
export default App

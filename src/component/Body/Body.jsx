import React from 'react'
import './Body.css'

function Body() {
  return (
    <div> <div> <main>
    <div className="primary"></div>
       <div className="right-circle"></div>
       
       <div className="content">
           <h1>Kusum
            <br/> Lamichhane</h1>
               <p>I have knowledge on Asp .Net web development <br/>Developer based in Kathmandu, Nepal</p>
           <button>Download CV</button>
            </div>
            <div id="icon">
          <a href="https://www.instagram.com/kushum__/" rel="noreferrer" target="_blank"> <div className="Icon1"></div></a>
          <a href="https://www.facebook.com/kusum.lamichhane.9"rel="noreferrer" target="_blank"> <div className="Icon2"><i className="fab fa-facebook-f"></i></div></a>
          <a href="https://www.linkedin.com/in/kusum-lamichhane/ "rel="noreferrer"target="_blank" ><div className="Icon3"><i className="fab fa-linkedin-in"></i></div></a>

       </div>
     
   </main>
   </div></div>
  )
}

export default Body

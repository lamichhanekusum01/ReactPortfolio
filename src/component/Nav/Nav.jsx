import React from 'react'
import './Nav.css'
import Contact from '../Contact/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



const Nav = () => {
  return (
  <div> 
        <header className="home">
       
           <nav>
              <h1>Kusum</h1>
              
            <div>
                <Link to="/">Service</Link>
                <Link to="/Portfolio">My Project</Link>
                <Link to="/Contact">Contact</Link>
                                 
            </div>
              
             </nav>

        </header>
        

</div>

  )
}

export default Nav
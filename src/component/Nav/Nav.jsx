import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div> 
        <header className="home">
       
           <nav>
              <a href='kusum'><h1>Kusum</h1></a> 
                <div>
                  <a href="service">Service</a>
                  <a href="#project"> My Project</a>
                  <a href="contact">Contact</a> 
                  
                </div>
              
           </nav>

        </header>

</div>
  )
}

export default Nav
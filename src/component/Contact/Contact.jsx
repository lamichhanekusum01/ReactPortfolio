import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div><section id="contact">
  
    <h1 class="section-header">Contact</h1>
    
    <div class="contact-wrapper">
    
    {/* <!-- Left contact page -->  */}
      
      <form id="contact-form" class="form-horizontal" >
         
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
          </div>
        </div>
  
        <div class="form-group">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
          </div>
        </div>
  
        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
        
        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
          <div class="alt-send-button">
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        
        </button>
        
      </form>
      
    {/* <!-- Left contact page -->  */}
      
        <div class="direct-contact-container">
  
          <ul class="contact-list">
            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Mulpani, Kathmandu</span></i></li>
            
            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+977-9843897091" title="Give me a call">+977-9843897091</a></span></i></li>
            
            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">Kusumlamichhane2015@gmail.com</a></span></i></li>
            
          </ul>
  
          <hr></hr>
          <ul class="social-media-list">
            <li><a href="contact" target="_blank" class="contact-icon">
            <i class="fab fa-github"></i></a>
            </li>
            <li><a href="contact" target="_blank" class="contact-icon">
            <i class="fab fa-facebook-f"></i></a>
            </li>
            <li><a href="contact" target="_blank" class="contact-icon">
            <i class="fab fa-linkedin-in"></i></a>
            </li>
            <li><a href="contact" target="_blank" class="contact-icon">
            <i class="fab fa-instagram"></i></a>
            </li>       
          </ul>
          <hr/>
  
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
  
        </div>
      
    </div>
    
  </section>  
    
    </div>
  )
}

export default Contact
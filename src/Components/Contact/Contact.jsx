import React, { useState, useEffect } from "react";
import './Contact.css'


function Contact() {

    const initialValues = { name: "", email: "", textarea: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      console.log(formValues);
      
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }
    return errors;
  };
    
  return (
    <div><section id="contact">
  
    <h1 class="section-header">Contact</h1>
    
    <div class="contact-wrapper">
    
    {/* <!-- Left contact page -->  */}
      
      <form id="contact-form" class="form-horizontal"  onSubmit={handleSubmit}>
         
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control"  placeholder="NAME" name="name" onChange={handleChange}value={formValues.name} />
          </div>
          <p>{formErrors.fullName}</p>
        </div>
  
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control"onChange={handleChange} placeholder="EMAIL" name="email" value={formValues.email} />
          </div>
          <p>{formErrors.email}</p>
        </div>
  
        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" ></textarea>
        <p>{formErrors.textarea}</p>
        
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
            <li><a href="https://github.com/lamichhanekusum01" target="_blank" class="contact-icon">
            <i class="fab fa-github"></i> </a>
            </li>
            <li><a href="https://www.facebook.com/kusum.lamichhane.9/" target="_blank" class="contact-icon">
            <i class="fab fa-facebook-f"></i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/kusum-lamichhane/" target="_blank" class="contact-icon">
            <i class="fab fa-linkedin-in"></i></a>
            </li>
            <li><a href="https://www.instagram.com/kushum__/" target="_blank" class="contact-icon">
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
import React, {useState,useEffect} from 'react'
import './Portfolio.css'
import img1 from '../../Image/Clinic.png'
import img2 from '../../Image/Employee.png'
import img3 from '../../Image/Todo.png'
import axios from 'axios'



const Portfolio = () => {
  const[project, setProject]=useState([])
  useEffect(()=>{
    axios.get("https://api.github.com/users/lamichhanekusum01/repos?per_page=3")
    .then(res=>setProject(res.data))
  },[])
  return (
    <div> <section id="project">
    <div className="Section-head">
        <h1>My Projects</h1>
    </div>

    <div className='topwrap'>
      {
        project.map(myproject=>{
          return(
           
                <div className="card" >
                <img className="card-img-top" src={img2} alt="Clinic"/>
                <div className="card-body">
                  <h5 className="card-title">{myproject.name}</h5>
                  <p className="card-text">{myproject.pushed_at}</p>
                  <a href={myproject.html_url} className="btn btn-primary btn-card">View Project</a>
                </div>
                
                
           </div>
          )
        })
      }
      </div>
     {/* <div className="row">
         
         <div className="card" style={{width: "18rem"}}>
             <img className="card-img-top" src={img1} alt="Clinic" style={{borderRadius:'15px 50px'}}/>
             <div className="card-body">
               <h5 className="card-title">Clinic Management</h5>
               <p className="card-text">The clinic appointment management helps to make appointment online . This project is built using Asp .Net MVC  </p>
               <a href="https://github.com/utshaav/Clinic" className="btn btn-primary btn-card">View Project</a>
             </div>
           </div>
           <div className="card"style={{width: "18rem"}}>
             
             <img className="card-img-top" src={img2} alt="Employee" style={{borderRadius:'15px 50px'}}/>
             <div className="card-body">
               <h5 className="card-title">Employee  Management</h5>
               <p className="card-text">The employee management is a web based application . This project is built using Asp .Net MVC</p>
               <a href="https://github.com/lamichhanekusum01/EmployeeManagementIntern" className="btn btn-primary btn-card">View Project</a>
             </div>
           </div>
           <div className="card" style={{width: "18rem"}}>
             <img className="card-img-top" src={img3} alt="Todo" style={{borderRadius:'15px 50px'}}/>
             <div className="card-body">
               <h5 className="card-title">To-do App</h5>
               <p className="card-text">Simple Todo  web based application which allows adding and deleting todo list It is build on React Js  </p>
               <a href="https://github.com/lamichhanekusum01/first-react" className="btn btn-primary btn-card">View Project</a>
             </div>
           </div>
         
    </div> */}
    </section>
    </div>
  )
}

export default Portfolio
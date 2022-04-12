import React,{useState,useEffect} from 'react'
import Axios from 'axios'


function Hook() {
    const [data, setData] = useState([])
    useEffect(()=>{
        Axios.get('https://api.github.com/users/lamichhanekusum01/repos?per_page=3').then((response)=>{
            // console.log(response)
            setData(response.data);
        })
    })
  return (
    <div>THis is hook
        {data.map((data)=>{
            return(
                <div>
                    <li>Name:{data.name}</li>
                    <li>ID:{data.id}</li>

                </div>
                
                
            )
        })}
    </div>
  )
}

export default Hook
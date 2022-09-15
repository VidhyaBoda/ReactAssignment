import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './style.css';
function Faculties(){

    const[faculties,setfaculties]=useState([]);

useEffect(()=>{
    fetch("https://630eea523792563418836480.mockapi.io/Bus/")
    
    .then((res)=>{
        return res.json();
    })
    
    .then((res)=>{
        setfaculties(res);
    })
},[])

const formatedfaculty=faculties.map((fac)=>{
    return(
        <>
        
            <Link to={"../faculty/" + fac.id}> 
      <div class="row">
         <div class="column">
                    <div class="card">
                    <img src={fac.BusImage} alt="" />
                    <div class="details">
                    <h2>{fac.BusName}</h2>
                    <p>{fac.BusNoOfKM}</p>
                  
                  </div>
                  </div>
         </div>
        </div>  
            </Link>
            
        </>
    )
})
    return formatedfaculty;
}

export default Faculties;
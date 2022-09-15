import './FacultyDet.css'
import { useState } from "react";
import {useParams,useNavigate} from "react-router-dom";
import {useEffect} from "react";
function Facultydetails(){

    let param=useParams();
    const navigate=useNavigate();

    const [faculty,setFaculty]=useState({});

    useEffect(()=>{
        fetch("https://630eea523792563418836480.mockapi.io/Bus/"+param.id,{
            method:"GET"
        })
            .then((res)=>{return res.json()})
                .then((res)=>{setFaculty(res)})
    },[])
    return(<>
                  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"  border="1px solid red">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">BusName:-{faculty.BusName}
        <br class="hidden lg:inline-block"/>BusRTONumber:-{faculty.BusRTONumber}
      </h1>
      <p class="mb-8 leading-relaxed">
        
            BusNumber:{faculty.BusNumber}&nbsp;
            BusNoOfKM:{faculty.BusNoOfKM}</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{
            navigate("/Faculty/edit/"+param.id); 
        }}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={()=>{
            fetch("https://630eea523792563418836480.mockapi.io/Bus/"+param.id,{
            method:"DELETE"
        })
            .then((res)=>{
                navigate("/Faculties")
            })
        }}>Delete</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={faculty.BusImage}/>
    </div>
  </div>
</section>
         </>
    )
}

export default Facultydetails;
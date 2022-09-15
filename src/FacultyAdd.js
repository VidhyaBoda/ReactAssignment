import './Form.css';
import {useParams,useNavigate} from "react-router-dom";
import { useState } from "react";


export default function FacultyAdd(){
    const navigate=useNavigate();
    const [data,setData]=useState({});
    return(
        <>
         <div className="form-container">
            <h1 class="mb-3 head">Add Bus Details</h1>
       
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                    setData({...data,BusName:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusName:</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Image" onChange={(e)=>{
                    setData({...data,BusImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusImage Link:</label>
        </div>
       
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                    setData({...data,BusRTONumber:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusRTONumber:</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Email" onChange={(e)=>{
                    setData({...data,BusNoOfKM:e.target.value})}}></input>
                <label for="floatingPassword">Enter BusNoOfKM:</label>
        </div>

            <input type="button" className="btn" value="AddBus" onClick={()=>{
                        fetch("https://630eea523792563418836480.mockapi.io/Bus/",{
                            method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        }).then(()=>{
                              navigate("/Faculties")
                        })

            }}></input>
         </div>
       


        </>
    )
}
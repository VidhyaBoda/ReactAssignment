import './Form.css';
import {useParams,useNavigate} from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react";

export default function FacultyEdit(){
    const param=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch("https://630eea523792563418836480.mockapi.io/Bus/"+param.id,{
            method:"GET"
        })
            .then((res)=>{return res.json()})
                .then((res)=>{setData(res)})
    },[])
    return(
        <>
        <div className="form-container">
            <h1 class="mb-3 head">Edit Faculty Details</h1>
       
        <div class="form-floating">
            <input  value={data.BusName} type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                    setData({...data,BusName:e.target.value})}}/>
                <label for="floatingPassword"> Bus Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input value={data.BusImage} type="text" class="form-control" id="floatingPassword" placeholder="Image" onChange={(e)=>{
                    setData({...data,BusImage:e.target.value})}} />
                <label for="floatingPassword"> Image Link..</label>
        </div>
       
        <div class="form-floating mt-3">
            <input  value={data.BusRTONumber} type="text" class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                    setData({...data,BusRTONumber:e.target.value})}} />
                <label for="floatingPassword"> BusRTONumber..</label>
        </div>
        <div class="form-floating mt-3">
            <input value={data.BusNoOfKM} type="text" class="form-control" id="floatingPassword" placeholder="Email" onChange={(e)=>{
                    setData({...data,BusNoOfKM:e.target.value})}} />
                <label for="floatingPassword"> BusNoOfKM..</label>
        </div>

            <button class="btn" border="1px solid red" onClick={()=>{
                       fetch("https://630eea523792563418836480.mockapi.io/Bus/"+param.id,{
                            method:"PUT",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        }).then(()=>{
                              navigate("/Faculties")
                        })
                    }}>Edit Bus</button>
         </div>
       

        {/* <table>
            <tr>
                <td>Enter Faculty Name</td>
                <td>:</td>
                <td><input
                value={data.FacultyName}
                onChange={(e)=>{
                    setData({...data,FacultyName:e.target.value})
                }}type="text"/></td>
            </tr>
            <tr>
                <td>Enter Faculty Image</td>
                <td>:</td>
                <td><input 
                value={data.FacultyImage}
                onChange={(e)=>{
                    setData({...data,FacultyImage:e.target.value})
                }}type="text"/></td>
            </tr>
            <tr>
                <td>Enter Faculty Email</td>
                <td>:</td>
                <td><input 
                value={data.FacultyEmail}
                onChange={(e)=>{
                    setData({...data,FacultyEmail:e.target.value})
                }}type="text"/></td>
            </tr>
            <tr>
                <td>Enter Faculty Number</td>
                <td>:</td>
                <td><input 
                value={data.FacultyNumber}
                onChange={(e)=>{
                    setData({...data,FacultyNumber:e.target.value})
                }}type="text"/></td>
            </tr>
            <tr>
                <td colSpan="3">
                    <button border="1px solid red" onClick={()=>{
                       fetch("https://63147740fc9dc45cb4edef01.mockapi.io/faculties/"+param.id,{
                            method:"PUT",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        }).then(()=>{
                              navigate("/Faculties")
                        })
                    }}>Edit Faculty</button>
                </td>
            </tr>
        </table>
    */}
        </>
    )
}
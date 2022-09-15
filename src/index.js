import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Faculties from './Faculties';
import Facultydetails from './Facultydetails';
import FacultyAdd from './FacultyAdd';
import FacultyEdit from './FacultyEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}></Route>
        <Route path='/Faculties' element={<Faculties/>}></Route>
        <Route path='/Faculty/:id' element={<Facultydetails/>}></Route>
         <Route path='/Faculty/add' element={<FacultyAdd/>}></Route>
         <Route path='/Faculty/edit/:id' element={<FacultyEdit/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
);



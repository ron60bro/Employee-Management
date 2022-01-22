import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Sidenavbar from "./sidenavbar";
import Navbar from "./navbar";
import Home from "./home";
import Client from "./client";
import Remainder from "./remainder";
import Dashboard from "./dashboard";
import Emp from "./emp.js";
import Project from "./project.js";
import Signup from "./signup.js";
import Login from "./login.js";
import Admin from './admin.js';


import Verify from './verify.js';
import Reset from './reset.js';
import Success from './success.js';
import Successed from './successed.js';





function Router() {
  return (
    <HashRouter>
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/emp" element={<Emp/>} />
        <Route exact path="/client" element={<Client/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/login" element={<Login/>} />

        <Route  exact path='/login/password'  element={<Admin/>}></Route>
        <Route  exact path="/login/password/verify/reset/success"  element={<Success/>}></Route>
          <Route  exact path='/login/signup'  element={<Signup/>}></Route>
          <Route exact path='/login/signup/successed' element={<Successed/>}></Route>
          <Route  exact path='/login/password/verify'  element={<Verify/>}></Route>
          <Route exact path='/login/password/verify/reset'  element={<Reset/>}></Route>
          <Route path='/login/password/verify/reset/success'  element={<Reset/>}></Route>

        <Route exact path="/remainder" element={<Remainder/>} />
    
        <Route exact path="/dashboard" element={<Dashboard/>} />
       

        

      </Routes>
       
    </HashRouter>
   
  );
}

export default Router;
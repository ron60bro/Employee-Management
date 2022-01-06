import React, { useState } from "react";
import Sidenavbar from "./sidenavbar";
import { Link } from "react-router-dom";
import Employee from "./employee.js";

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="fixx">

<div className="sidebar close">
        <div className="logo_detail design"></div>
        <ul className="nav_links">
          <li>
            <div className="icon_link">
              <Link to="/dashboard">
                <i class="bx bxs-grid-alt"></i>
                <span className="link_name"> Dashboard</span>
              </Link>
            </div>
            <div className="icon_link">
              <Link to="/remainder">
                <span className="link_name">
                  <i class="bx bxs-bell-ring"></i> Reminder
                </span>
              </Link>
            </div>
  
            <div className="icon_link">
              <Link to="/client">
                <span className="link_name">
                  <i class="bx bxs-user"></i> Client
                </span>
              </Link>
            </div>
  
            <div className="icon_link">
              <Link to="/project">
                <span className="link_name">
                  <i class="bx bxs-book"></i> Project
                </span>
              </Link>
            </div>
  
            <div className="icon_link">
              <Link to="/emp">
                <span className="link_name">
                  <i class="bx bxs-user-account"></i>Employees
                </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>

        
      <div className="navcolor loho">
        <div>
     <div className="Guru">   <Employee/></div>
        
        </div>
  

 
 
 
        <button onMouseOver={() => toggleModal()} className="login">
          <i className="bx bxs-user-circle" color="blue"> </i>
        </button>
      </div>
  
      {modal ? (
        <Link to="/">
          <button className="loginbox">
            <i class="bx bxs-user-circle"></i>
            <span>
              <Link to="/login" id="logout">
              <box-icon color="red" size="15px"name='lock-alt'></box-icon>LOGOUT
              </Link>
            </span>
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Home;

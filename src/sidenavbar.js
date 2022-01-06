import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenavbar = () => {
  return (
        <div className="sidebar close">
        <div className="logo_detail"></div>
        <ul className="nav_links">
          <li>
            <div className="icon_link">
              <a to="dashboard">
                <i class="bx bxs-grid-alt"></i>
                <span className="link_name"> Dashboard</span>
              </a>
            </div>
            <div className="icon_link">
              <a to="remainder">
                <span className="link_name">
                  <i class="bx bxs-bell-ring"></i> Reminder
                </span>
              </a>
            </div>
  
            <div className="icon_link">
              <a to="client">
                <span className="link_name">
                  <i class="bx bxs-user"></i> Client
                </span>
              </a>
            </div>
  
            <div className="icon_link">
              <a to="project">
                <span className="link_name">
                  <i class="bx bxs-book"></i> Project
                </span>
              </a>
            </div>
  
            <div className="icon_link">
              <a to="employees">
                <span className="link_name">
                  <i class="bx bxs-user-account"></i>Employees
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
  );
};

export default Sidenavbar;

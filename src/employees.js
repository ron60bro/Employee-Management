import React, { useEffect, useState } from "react";
import Sidenavbar from "./sidenavbar";
import axios from "axios";

function Employees() {
  const [employee, saveEmployees] = useState([]);
  const getEmployee = () =>{
axios.get("http://localhost:1234/Employee")
.then(response => saveEmployees(response.data) )
      }

      useEffect(()=>{
        getEmployee();
        },[true]);

 
        return (
    <div>
      <Sidenavbar />
      <div className="user_btton">
        <button className="btn btn-success">
          <i class="bx bxs-user-plus"></i>Add Employee
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-head text-center">
                <i class="bx bxs-user-plus"></i>New Employees
              </div>
              <div className="card-body">
                <div>
                  Employee ID
                  <input
                    type="Number"
                    placeholder="Employee ID"
                    className="form-control"
                    
                                     />
                </div>

                <div>
                  Employee Name
                  <input
                    type="text"
                    placeholder=" Enter your Name"
                    className=" form-control"
                   
                  />
                </div>
                <div>
                  Designation
                  <input
                    type="text"
                    placeholder="Enter Designation"
                    className="form-control"
                  
                  />
                </div>
               
                <div>
                  Date of Joining
                  <input
                    type="date"
                    placeholder="DD/MM/YYYY"
                    className="form-control"
                 
                  />
                </div>
                <div>
                  Mobile No
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="form-control"
                   
                  />
                </div>
                <div>
                  Mail Id
                  <input
                    type="email"
                    placeholder="Enter mial Id"
                    className="form-control"
                  
                  />
                </div>
              </div>
              <div className="card-footer" class="close_btn">
                <button className="btn btn-success">
                  <i class="bx bx-user-plus"></i> Save
                </button>
                <button className="btn btn-danger" >
                  <i class="bx bx-x"></i>Close
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th scope="SL">Emp. ID</th>
              <th scope="SL"> Name</th>
              <th scope="SL"> Designation</th>
              <th scope="SL"> Date of Joining</th>
              <th scope="SL">Mobile Number</th>
              <th scope="SL">Mail Id</th>
              <th scope="SL">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            employee.map((employeeinfo, index)=>{
              return(
                <tr key={index}>
                  <td>{employeeinfo.no}</td>
                  <td>{employeeinfo.name}</td>
                  <td>{employeeinfo.designation}</td>
                  <td>{employeeinfo.doj}</td>
                  <td>{employeeinfo.mobile}</td>
                  <td>{employeeinfo.mail}</td>
                  <td><button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger">Edit</button></td>


                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;

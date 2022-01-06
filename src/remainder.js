import React ,{useEffect,useState}from "react";
import Sidenavbar from "./sidenavbar";

import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import axios from 'axios';
import Home from './home.js';

const Remainder = () => {

    const[reminders,setReminders]=useState([]);
    
    

    const getReminder=async()=>{
      const response = await axios.get("http://localhost:1234/project").catch((err)=> console.log("Error ...",err));
      if(response&& response.data){
        setReminders(response.data)
        console.log(response)
      }
    }
    useEffect(()=>{
        getReminder();
    },[])

  return (
<>
    <Home/>

    <div className="ronal">
      <div className="rema">
      <h1 className="text-center mt-5"> Remainder Content</h1>
      </div>
       
      
        <div className="content">
        
             
               {
                                  reminders.map((reminders,idx)=>{
                                    return(
                                      <div className="card nhu " >

                                        <div class="card-body motu "  > <div className="alignn">
                                        <div className="alignn" ><box-icon name='pin' type='solid' size="30px" color="blue"></box-icon> Demo project will expire   :
                                        
                                          
                                              {reminders.end}</div>
                                              </div>
                                           <>
                                           <br/>
                                           <div className="aligns">
                                            Company Name:
                                              {reminders.cname}</div></>
                                              
                                      </div>
                                   </div>
                                    )
                                  })
                                } 
               
            
             {/* <table class="table table-bordered table-striped">
                <thead>
                                    <tr >
                                    <th scope="col-sm" >This process will expire on: </th>
                                    <th scope="col-sm">Project Date</th>
                                    <th scope="col-sm">Project Name</th>
                                    
                                    
                                    </tr>
                                </thead>
                                <tbody>

                                {
                                  reminders.map((reminders,idx)=>{
                                    return(
                                    <tr kye={idx}>
                                    <td>Your Porject Validity {idx}</td>
                                    
                                    <tr>{reminders.end}</tr>
                                    </tr>

                                    )
                                  })
                                }
                                </tbody>
                                
</table> */}
            
           
        
        </div>
       
          
      
         
        


    </div>
    </>
  );
};

export default Remainder;
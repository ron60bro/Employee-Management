import React ,{useEffect,useState}from "react";
import Sidenavbar from "./sidenavbar";

import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import axios from 'axios';
import Home from './home.js';
import moment from 'moment';

//Redux Libraries and part calling
import { useSelector,useDisptach,connect } from "react-redux";
import { useParams } from "react-router-dom";
import store from "./component/store";
import handleChange from "./component/reducer/handleCart";
import { FetchUser, userSuccess } from "./component/action";


const Remainder = (props) => {

    const[reminders,setReminders]=useState([]);
    
    const value=moment();

    // const getReminder=async()=>{
    //   const response = await axios.get("http://localhost:1234/project").catch((err)=> console.log("Error ...",err));
    //   if(response&& response.data){
    //     setReminders(response.data)
    //     console.log(response)
    //   }
    // }
    useEffect(()=>{
        props.data2();  
        setReminders(props.data1)  ;
        
    },[])
    
  
    console.log("qq",props.data1);
     const twitter=(reminders)=>{
   if((moment(reminders.end).format()<moment().format())){
     return false;
   }else return true;
     
     }

  return (
<>
    <Home/>

    <div className="ronal">
      <div className="rema">
      <h1 className="text-center mt-5"> Remainder Content</h1>
      </div>
       
      
        <div className="content">
        
             
               {
                                  reminders.filter(twitter).map((reminders,idx)=>{
                                         
                                      
                                    return(
                                      
                                      
                                      <div className="card nhu " >
                                        <div class="card-body motu "  > <div className="alignn">
                                        <div className="alignn" ><box-icon name='pin' type='solid' size="30px" color="blue"></box-icon> Demo project will expire   :
                                                { 
                                                  
                                                (moment(reminders.end).format('MMMM Do YYYY, h:mm:ss a'))
                                                
                                                }
                                                </div>
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
        </div>
    </div>
    </>
  );
};

const mapStateToProps = (state)=>{
  console.log("asd",state.init.data)
  return{
     data1:state.init.data

  }
}
const mapDispatchToProps= dispatch=>{
  return{
    data2: ()=>dispatch(FetchUser())
  }
}
export default connect(
  mapStateToProps,mapDispatchToProps)(Remainder)
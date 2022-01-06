import Home from "./home";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Doughnut, bar} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const Dashboard = () => {
 
  const [cweek,setCweek] =  useState([]);
  const getCweek = () =>{
    axios.get("http://localhost:1234/client")
    .then(response =>setCweek(response.data))
  }
  useEffect(() =>{
    getCweek();
  },[true])

  const [cmonth,setCmonth] =  useState([]);
  const getCmonth = () =>{
    axios.get("http://localhost:1234/project")
    .then(response => setCmonth(response.data))
  }
  useEffect(() =>{
    getCmonth();
  },[true])

  const [cyear,setCyear] =  useState([]);
  const getCyear = () =>{
    axios.get("http://localhost:1234/users")
    .then(response => setCyear(response.data))
  }
  useEffect(() =>{
    getCyear();
  },[true])

  return (
    
      <div>
        <Home/>
      
<div className="dash_box  vv">
</div>
  
        <div className='container'>
          <div className='row'>

           <div className="col-lg-2"></div>
           
           <div className='col-lg-3'>
              <div className="card">
                <div className="card-head text-center"> Client
                  <div className="card-body">
                 
      <Doughnut
      
      data={{
        labels:['week','month','year'],
        datasets:[{
          label: '# of Tomatoes',
          data:[cweek.length, cmonth.length, cyear.length],
          backgroundColor:['blue','green','orange'],
          borderWidth:[1, 1, 1, 1]
        }]
      }
      }>

      </Doughnut>

                  </div>
                </div>
              </div>
          
            </div>
            <div className='col-lg-3'>
              <div className="card">
                <div className="card-head text-center"> Projects
                  <div className="card-body">
                 

                  <Doughnut
      data={{
        labels:['week', 'month', 'year'],
        datasets:[
        {
          data:[cweek.length, cyear.length, cmonth.length],
          backgroundColor:['rgb(6, 98, 160)','cyan','blue'],
        }]
      }
      }
      >

      </Doughnut>
                  </div>
                </div>
              </div>
          
            </div> <div className='col-lg-3'>
              <div className="card">
                <div className="card-head bg text-center"> Employees
                  <div className="card-body">
                  
      <Doughnut
      data={{
        label:['week', 'month', 'year'],
        datasets:[
        {
          data:[cmonth.length,cweek.length,cyear.length],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        }]
      }
      }
      >

      </Doughnut>

                  </div>
                </div>
              </div>
          
            </div>
            </div>
        </div>
        <div>
        
        </div>
        
      </div>
    );
  }

export default Dashboard;

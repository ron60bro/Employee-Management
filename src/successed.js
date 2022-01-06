import React from 'react';
import {Link} from 'react-router-dom';

function Successed(){
    return(
        <>
        <div className="ok">
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pos">
                    <div className="card mt-5">
                        <div className="card-header text-center">

                            
    
                            <small>Registered successfullly</small>
    

                            </div>
                            <div className="card-body text-center">

                    
                           
                            
                            
                            <div>
                                <Link to="/login">  <button style={{borderRadius:'10px'}}className="bg-success btn btn-lg text-center text-white form-control mb-4 "><i className="fa fa-arrow-right"></i>Login Now</button></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-lg-2"></div>
                   
            </div>
        </div>
        </div>
        </>
    );
    }
    export default Successed;
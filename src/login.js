import React from 'react';
import Work from './work.js';
import {Link} from'react-router-dom';



const Login=()=>{

    
        return(
            <div className="csss" >
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="card mt-5">
                                <div className="card-header text-center">
    
                                    <Work/>
                                    <h4>Employee Management</h4>
                                    <small>Login to admin account</small>
    
                                </div>
                                <div className="card-body text-center">
    
                                    <input type="text" placeholder="Email-id" className=" form-control" />
                                    <br/>
                                    <input type="password" placeholder="Password"  className=" form-control" />
                                    <br/>
                                    <div className="jjj">
                                    <div className="abc mb-3">
                                    <input type="checkbox"></input><small> Remember Me</small>
                                    </div>
                                    <div className="def mb-3">
                                    <Link className=" text-danger" style={{textDecoration:"none"}} to="/login/password">Forgot Password?</Link>
                                    </div>
                                    </div>
                                    <div>
                                    <Link to="/">  <button style={{borderRadius:'10px',marginTop:'20px'}}className="bg-success btn btn-lg text-center text-white form-control mb-4 "><i className="fa fa-arrow-right"></i> Login</button></Link>
                                    </div>
                                    <div>
                                    <Link className="text-center style" to="/login/signup">New User? SignUp Here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-2"></div>
    
    
    
    
    
                    </div>
                </div>
            </div>
        );
    }
export default Login;
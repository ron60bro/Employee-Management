import React from 'react';
import {Link} from 'react-router-dom';

function Admin(){
    return(
        <>
        <div className="reset">
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pos">
                    <div className="card mt-5">
                        <div className="card-header text-center">

                            
                            <h4>Reset Password </h4>
    

                            </div>
                            <div className="card-body text-center">
                            <input type="text" placeholder=" Enter your Registered E-mail" className=" form-control"/>   
                            <br/>
                    
                           
                            
                            
                            <div>
                                <Link to="/login/password/verify">  <button style={{borderRadius:'10px'}}className="bg-success btn btn-lg text-center text-white form-control mb-4 "><i className="fa fa-arrow-right"></i> Send verification code</button></Link>
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
export default Admin;
import React from 'react';
import {Link} from 'react-router-dom';

function Verify(){
    return(
        <>
        <div className="reset">
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pos">
                    <div className="card mt-5">
                        <div className="card-header text-center">

                            
                            <h4>Email-Verification</h4>
                            <small>Code has been generated and sent to your E-mail</small>
    

                            </div>
                            <div className="card-body text-center">
                            <input type="password" placeholder="Enter verification code" className=" form-control"/>   
                            <br/>
                    
                           
                            
                            
                            <div>
                                <Link to="/login/password/verify/reset">  <button style={{borderRadius:'10px'}}className="bg-success btn btn-lg text-center text-white form-control mb-4 "><i className="fa fa-unlock"></i> Verify</button></Link>
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
export default Verify;
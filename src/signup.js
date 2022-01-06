import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const[name , pickName] = useState("");
    const[mobile , pickMobile] = useState("");
    const[email , pickEmail] = useState("");
    const[password , pickPassword] = useState("");

    const register=()=>{
        var userinfo = {"name":name, "mobile":mobile, "email":email, "password":password};
        var url = "http://localhost:1234/user";
        axios.post(url , userinfo).then(responsive=>{
            pickName("");
            pickMobile("");
            pickEmail("");
            pickPassword("");
        }

        )
    }
    return(
        <>
        <div className="reset">
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pos">
                    <div className="card mt-5">
                        <div className="card-header text-center">

                            
                            <h4>Register </h4>
    

                            </div>
                            <div className="card-body text-center">
                            <input type="text" placeholder=" Enter your Name" className=" form-control" value={name} onChange={obj=>pickName(obj.target.value)}/>   
                            <br/>
                            <input type="number" placeholder=" Enter your Mobile number" className=" form-control" value={mobile} onChange={obj=>pickMobile(obj.target.value)}/>   
                            <br/>
                            
                            <input type="text" placeholder=" Enter your Email-id" className=" form-control" value={email} onChange={obj=>pickEmail(obj.target.value)}/>
                            <br/>
                            
                            <input type="password" placeholder="Add Password"  className=" form-control" value={password} onChange={obj=>pickPassword(obj.target.value)}/>
                            <br/>
                            
                           
                            
                            
                            <div>
                                <Link to="/login/signup/successed">  <button style={{borderRadius:'10px'}}className="bg-success btn btn-lg text-center text-white form-control mb-4 " onClick={register}><i className="fa fa-user-plus"></i> Register</button></Link>
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
export default Signup;
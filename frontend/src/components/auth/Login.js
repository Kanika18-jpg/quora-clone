import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import "./Login.css";
import logo from './ques.gif';
import {auth,Provider} from '../../firebase';
import background from './hi.jpg';


function login() {

    const handleSubmit= async () =>{
        signInWithPopup(auth, Provider).then((result)=>{
            console.log(result);
        }).catch((error) =>{
            console.log(error);
        });
        
    };
  return (
    <div className="login" background={background}>

    <div className="login-container">
      <div className="login-content">
        <img
          src={logo}
          alt=""
        />
        <button onClick={handleSubmit} className="btn-login">
            Login to continue
        </button>
        </div>
        </div>
    </div>
        
  )
}

export default login;
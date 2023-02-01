import React,{ useState, useEffect } from 'react';
import { toast }from 'react-toastify';
import {Link, useNavigate}  from "react-router-dom";
import { auth, signInWithGoogle } from "./../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";



const Signin = ( {loadUser} ) => {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [inputTyping, setInputTyping] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit =async()=> {
  //   if (!email || !password) {
  //       toast("Please enter all info!", {type: "error"});
  //       return;
  //       }
  
  //       const response = await logInWithEmailAndPassword(email, password);
  //       //if response is undefineed
  //       console.log(response)
  //       if (response) {
  //         console.log("error was caught");
  //         toast("Wrong Email/Password combo", {type: "error"});
  //       } 
        
  
  // }

  useEffect(()=>{
    if(loading) {
      // toast("Loading Data", {type: "sucess"});
      console.log("loading Data");
      return;
    }
    
    if (error) toast("something went wrong refresh page", {type: "error"});

  }, [user, loading, error])
  useEffect(()=> {
    if(inputTyping) {

    }
  })
  console.log(user)
  return (
    <div className="Login">
      <div>
        <img src="logo.png" style={{height: "350px", width: "350px"}} />
      </div>
      <div>
        <button className="googleLogin" onClick={signInWithGoogle}>
                Login with Google
            </button>
      </div>
    </div>
  );
};

export default Signin;
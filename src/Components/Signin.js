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
    {/* <div>
      <div>
        <p>Enter Email</p>
        <input style={{backgroundColor: "lightskyblue"}} type="email" name="email" value={email} onChange={(e)=>{setInputTyping(true)
                                                            setEmail(e.target.value)}} />
      </div>
      <div>
        <p>Enter Password</p>
        <input style={{backgroundColor: "lightskyblue"}} type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
        <button type="submit" className="googleLogin" onClick={handleSubmit}>Login</button>
      </div>*/}
      <img src="logo.png" style={{height: "350px", width: "350px"}} />
      <div>
        <button className="googleLogin" onClick={signInWithGoogle}>
                Login with Google
            </button>
      </div>
    {/* <div>
        <Link className="navLink" style={{color:"white"}} to="/register">Or Register.</Link>
      </div>*/}
    </div>
  );
};

export default Signin;
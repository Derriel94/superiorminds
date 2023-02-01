import React, {useEffect, useState} from 'react';
import {Link}  from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./../../firebaseConfig.js"


const Nav = (  ) => {
  const [mainPage, setMainPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [tempName, setTempName] = useState('');
  const [mainUser, setMainUser] = useState();

    useEffect(()=>{
    if (loading) return;
    if (user) {
      if(user.displayName) {
        setTempName(user.displayName)
      }
      //display name changes to uid once i get it
      if (user.displayName === "Derriel Collins") {
        setMainUser(true)
      }
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  }, [user, loading, isLoggedIn])


	return (      
		<div className="nav">  
          {/*<h1 id="edit"><Link to="/editor" style={{ textDecoration: 'none', color: 'blue' }}>EDITOR</Link></h1>*/}
          <div><h1><Link to="/blogs" style={{ textDecoration: 'none', color: 'papayawhip' }}>Blogs/Poems</Link></h1></div>
          <div><h1><Link to="/music" style={{ textDecoration: 'none', color: 'papayawhip' }}>Music</Link></h1></div>
          <div><h1><Link to="/voiceovers" style={{ textDecoration: 'none', color: 'papayawhip' }}>VoiceOver</Link></h1></div>
          <div><h1><Link to="/contact" style={{ textDecoration: 'none', color: 'papayawhip' }}>Contact Mac</Link></h1> </div>
      </div>
			
		);
}

export default Nav;
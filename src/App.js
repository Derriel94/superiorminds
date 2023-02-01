import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route, Link, useNavigate } from "react-router-dom"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, onSnapshot, orderBy, query, setDoc, doc, updateDoc, addDoc, arrayUnion } from "firebase/firestore";
import Home from "./Components/Home/Home.js"; 
import Signin from "./Components/Signin.js";  
import Blogs from "./Components/Blogs/Blogs.js";
import Nav from "./Components/Nav/Nav.js"; 
import Editor from "./Components/Editor.js";
import Music from "./Components/Music/Music.js";
import VoiceOver from "./Components/VoiceOver/VoiceOver.js";
import Contact from "./Components/Contact/Contact.js";
import {db, auth, logout} from "./firebaseConfig.js"
import { toast }from 'react-toastify';

const App = () => {
  const [mainPage, setMainPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [tempName, setTempName] = useState('');
  const [mainUser, setMainUser] = useState();
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const articleRef = collection(db, "blogs");
    const q = query(articleRef, orderBy("createdAt"));
    onSnapshot(q,(snapshot)=>{
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogs);
      console.log(blogs);
    });
  },[])

  useEffect(()=>{
    if (loading) return;
    if (user) {
      if(user.displayName) {
        setTempName(user.displayName)
      }
      if (user.displayName === "Derriel Collins") {
        setMainUser(true)
      }
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  }, [user, loading, isLoggedIn])

  return (
      <div className="App" style={{color: "papayawhip"}}>
        
        <div className="header-container">
           <div><Link to="/" style={{color: "papayawhip"}}><img src="./2.jpg" className="logo"/></Link></div>
           <div>Superior Minds Ink.</div>
            {user
            ?
              <div><p onClick={logout} id="signout" style={{fontSize: "1rem"}}>SignOut: {user.displayName}</p></div>
            :
              <div>
              <div><a href=" https://linktr.ee/MadMac21" target="_blank" rel="noreferrer" id="fiverLink"style={{fontSize: "1.3rem"}}> platforms </a></div>
              <div><Link to="/secretthothblogspot" style={{fontSize: "1.3rem", color: "papayawhip", textDecoration: "none"}}>Login</Link></div>
              </div>

            }
        </div>
          <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home Link={Link} blogs={blogs}/>} />
            <Route path="/blogs" element={<Blogs mainPage={mainPage} isLoggedIn={isLoggedIn} />} />
            <Route path="/editor" element={<Editor isLoggedIn={isLoggedIn} blogs={blogs} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/voiceovers" element={<VoiceOver />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/secretthothblogspot" element={<Signin />} />       
          </Routes> 
        <div className="footer">
          <Link to="/" style={{color: "papayawhip"}}><h1>Superior Minds</h1></Link>
          <Nav />
        </div>
        <div className="socialDiv">
            <h1>Social Media</h1>
            <div><a href=" https://linktr.ee/MadMac21" target="_blank" rel="noreferrer"> LinkTree </a></div>
            <div><a href="https://www.instagram.com/macstract/?hl=af" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'papayawhip' }}> Instagram: Mactract </a></div>
            <div><a href="https://www.linkedin.com/in/superior-minds-ink-869565207/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'papayawhip' }}> Linkdein: Christain Mcbride </a></div>
            <div><a href="https://www.youtube.com/channel/UCBHFh0ZVLkxTvwoYW3hLZ9Q/featured" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'papayawhip' }}> Youtube: Mad Mac </a></div>
        </div>      
         
    </div>
  );
};
  
export default App;
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";
import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,

} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Q7h56VcgyKXlDf2J_EoB38SoZvpjxx4",
  authDomain: "superiormindsblog.firebaseapp.com",
  databaseURL: "https://superiormindsblog-default-rtdb.firebaseio.com",
  projectId: "superiormindsblog",
  storageBucket: "superiormindsblog.appspot.com",
  messagingSenderId: "49247296783",
  appId: "1:49247296783:web:da7e4b8d146951ade9327a",
  measurementId: "G-Y536FDE0JP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

console.log(db);



 const googleProvider = new GoogleAuthProvider();

//signIn with google
 const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      console.log(user.displayName)
      return user.displayName;
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

export {
  storage,
  auth,
  db,
  signInWithGoogle,
  logout,
};

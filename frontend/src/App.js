import React from 'react';
import './App.css';
import Quora from './components/Quora';
import Login from "./components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser){
        dispatch(
          login({
            userName:authUser.displayName,
            photo:authUser.photoURL,
            email:authUser.email,
            uid:authUser.uid,
          })
        );
        console.log('User');
      }
    });
  },[dispatch]);
  return (
    <div className="App">
    {user ? <Quora/> : <Login/>}
      <Quora/>
    </div>
  );
}

export default App;

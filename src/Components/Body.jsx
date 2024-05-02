import React from 'react'
import Login from './Login'
import Header from './Header'
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import { useDispatch } from 'react-redux';
 import { addUser,removeUser } from '../Utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Browse from './Browse'
import auth from '../Utils/FirebaseAuth';
import { useEffect } from 'react';


const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    }); 

  

  },[])

   //- Routing using Objects 
   const appRouter = createBrowserRouter([
     {
       path: "/",
       element: <Login />,
     },
     {
        path:"/browse",
        element:<Browse/>
     }
   ]);
  
   //- Routing using JSX
   const appRouter2 = createBrowserRouter(
     createRoutesFromElements(
       <>
         <Route path="/" element={<Login />} />
         <Route path="/browse" element={<Browse />} />
       </>
     )
   );
  return (
    <div>
      <ToastContainer
      theme='dark'
      position='top-right'
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      />
      <RouterProvider router={appRouter2} />
    </div>
  );
}

export default Body
import React from 'react'
import Login from './Login'
import Header from './Header'
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Browse from './Browse'
import Position from './Position';
import MoviePage from './MoviePage';
import AppLayout from './AppLayout';



const Body = () => {
  
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
         {/* <Route path="/" element={<Login />} />
         <Route path="/browse" element={<Browse />}/ >
         <Route path="/browse/:movieID" element={<MoviePage />} />
         <Route path="/position" element={<Position />} /> */}
         <Route path="/" element={<AppLayout />} >
            <Route index element={<Login />}/>
            <Route path="/browse" element={<Browse />}/ >
            <Route path="/browse/:movieID" element={<MoviePage />} />
            <Route path="/position" element={<Position />} />
         </Route>
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
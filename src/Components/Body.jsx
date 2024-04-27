import React from 'react'
import Login from './Login'
import Header from './Header'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Browse from './Browse'

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
         <Route path="/" element={<Login />} />
         <Route path="/browse" element={<Browse />} />
       </>
     )
   );
  return (
    <div>
      <RouterProvider router={appRouter2} />
    </div>
  );
}

export default Body
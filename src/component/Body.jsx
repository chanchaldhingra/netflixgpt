import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login';
import Browser from './Browser';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/browser',
      element: <Browser />
    }
  ]);

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
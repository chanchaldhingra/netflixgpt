import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login';
import Browser from './Browser';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browser',
      element: <Browser />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName}));
      }
      else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
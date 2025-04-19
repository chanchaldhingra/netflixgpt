import React, {useEffect} from 'react'
import logoImage from '../assets/Netflix_Logo_PMS.png';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName}));
        navigate('/browser');
      }
      else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className='absolute px-8 py-2 z-10 flex justify-between items-center w-full bg-gradient-to-b from-black to-whiteabsolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img src={logoImage} alt="logo" className='w-44' />
      { user && 
        (<button className='text-lg text-white cursor-pointer' onClick={handleSignOut}>(Sign out)</button>)
      }
    </div>
  )
}

export default Header
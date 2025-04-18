import React from 'react'
import logoImage from '../assets/Netflix_Logo_PMS.png';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useSelector } from 'react-redux';

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

  return (
    <div className='absolute px-8 py-2 z-10 flex justify-between items-center w-full bg-black bg-opacity-50'>
      <img src={logoImage} alt="logo" className='w-44' />
      { user && 
        (<button className='text-lg text-white cursor-pointer' onClick={handleSignOut}>(Sign out)</button>)
      }
    </div>
  )
}

export default Header
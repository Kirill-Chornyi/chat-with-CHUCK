import React from 'react';
import './mainHeader.scss';
import {Avatar} from './../../components';
import {ContactName} from './../../components';
import { googleLogout } from '@react-oauth/google'

const MainHeader = ({contact}) => {
function logOut () {
  googleLogout(); 
  localStorage.removeItem('key');  
  window.location.reload();}
  return (
    <div className='main_header'>
      <div className='main_header_avatar'>
        <Avatar name={contact}/>
        <ContactName>{contact}</ContactName>
      </div>
    <button className='logout-button' onClick={() => logOut()} > LogOut </button>
    </div>
  )
}

export default MainHeader

import React, { useState } from 'react'
import './sentMes.scss'
import {Avatar} from './../../../components';
import {Sent} from './../../../components';
import {Time} from './../../../components';

const SentMes = ({children}) => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  return (
    <div className='sent_mes_container'>
        <Sent>{children}</Sent>
        
        <Time>{hours + ":" + minutes + " " + day + "/" + month + "/" + year}</Time>
    </div>
  )
}

export default SentMes
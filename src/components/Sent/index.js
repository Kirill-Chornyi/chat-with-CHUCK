import React from 'react'
import './sent.scss';

const Sent = ({children}) => {
  return (
    <div className='sent_box'>
       <p className='sent_text'> {children} </p>
    </div>
  )
}

export default Sent

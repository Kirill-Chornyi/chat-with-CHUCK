import React from 'react'
import './received.scss';

const Received = ({children}) => {
  return (
    <div className='rec_box'>
       <p className='rec_text'> {children} </p>
    </div>
  )
}

export default Received

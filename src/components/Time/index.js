import React from 'react'
import './time.scss';

const Time = ({children}) => {
  return (
    <div className='time_cont'>
        <p className='time_text'> {children} </p>
    </div>
  )
}

export default Time

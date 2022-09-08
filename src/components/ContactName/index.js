import React from 'react'
import './name.scss';

const ContactName = ({children}) => {
  return (
    <div className='contact_name_container'>
      <h3 className='contact_name'> {children}</h3>
    </div>
  )
}

export default ContactName

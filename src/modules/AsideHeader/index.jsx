import './asideHeader.scss';
import React, { useState, useEffect } from 'react';
import {Avatar} from './../../components';
import {SearchContact} from './../index';
import {ReactComponent as Search} from './../../search.svg'


const AsideHeader = (props) => {
  const [contacts, setContacts] = useState(["Judy Hobs", "Alice Freeman","Velazques","Barrera"])
  const [input, setInput] = useState("")
  const filtredContacts = contacts.filter(contact => {
    return contact.toLowerCase().includes(input.toLowerCase())
  })

  function handleChange (event) {
    setInput(event.target.value);
    console.log({input})
  }
  useEffect(() => {
    
      });
  
  return (
    <div className='AsideHeader'>
       <Avatar/> 
       <form className='search_form'>
        <Search className='svg_search'/>
        <input type="text" placeholder="Search in cotacts" className='search_input' 
        onChange={(event)=> setInput(event.target.value)}/>
        <div className='search_contact_block'>
          {filtredContacts.map((contact) => {return <SearchContact name={contact} onClick={() => {props.selectContact(contact)}}/>})}

        </div>
       </form>
    </div>
  )
}

export default AsideHeader

import React, { Component } from 'react'
import './searchContact.scss'
import {Avatar} from './../../../components';

export class SearchContact extends Component {




  render() {
    return (
      <div data-date={this.props.date} className='search_contact_container' onClick={() => {this.props.onClick(this.props.name)}}>
        
      <Avatar name={this.props.name}/>
      <div className='contact_name'>
        <h5 value=""> {this.props.name} </h5>
      </div>
  </div>
    )
  }
}

import React, { Component } from 'react'
import './chatContact.scss'
import {Avatar} from './../../../components';
import {Received} from './../../../components';
import {Time} from './../../../components';

export class ChatContact extends Component {




  render() {
    return (
      <div data-date={this.props.date} className='last_mes_container' onClick={() => {this.props.onClick(this.props.name)}}>
        
      <Avatar name={this.props.name}/>
      <div className='last_mes_cont'>
        <h5 value=""> {this.props.name} </h5>
        <div className="last_mes">
        <Received className="last_mes_text">{this.props.lastMes}</Received>
      
        <Time>{this.props.time}</Time>
      </div>
      </div>
  </div>
    )
  }
}

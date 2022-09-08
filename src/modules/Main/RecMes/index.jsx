import './recMes.scss'
import {Avatar} from './../../../components';
import {Received} from './../../../components';
import {Time} from './../../../components';
import React, { Component } from 'react'

export class RecMes extends Component {
  constructor(props) {
    super(props)
    this.state = {
       avSrc: ''
    }
  }
  
  render() {
      this.state.avSrc=this.props.name
    return (
      <div className='rec_mes_container'>
          
        <Avatar name={this.state.avSrc}/>
        <div className="rec_mes_flex">
          <Received>{this.props.msg}</Received>
          <Time>{this.props.time}</Time>
        </div>
  </div>
    )
  }
}

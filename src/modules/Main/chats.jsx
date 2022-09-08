import React, { Component } from 'react'
import {RecMes} from './../index'
import {SentMes} from './../index'

export class Chats extends Component {
    constructor (props) {
        super(props);
        this.state = {
          isSended: this.props.isSended,
          msgText: this.props.msgText,
          msgTime: this.props.msgTime,
          avSrc: ''
        };
      }


  render() {
    this.state.isSended = this.props.isSended
    this.state.msgText = this.props.msgText
    this.state.msgTime = this.props.msgTime
    this.state.avSrc=this.props.contact
    if (this.state.isSended==true)
    return ( 
        <SentMes time={this.state.msgTime}> {this.state.msgText} </SentMes>
    )
    else if (this.state.isSended==false) return (
        <RecMes name={this.state.avSrc} time={this.state.msgTime} msg={this.state.msgText}>  </RecMes>
    )
  }
}

import React, { Component } from 'react'
import './mainFooter.scss';
import {ReactComponent as SendB} from './../../SendB.svg'
import data from "./../../data.json"

let id = 1;

export class MainFooter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      textarea:'',
      submit:'',
      chuckNorris:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res =>res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
        this.state.chuckNorris = result.value.toString();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      }

  handleChange(event) {
    this.setState({textarea: event.target.value});
  }

  handleSubmit(event){
    let sender = JSON.parse(localStorage.getItem('key').toString());
    event.preventDefault()
    this.setState({
      submit: this.state.textarea
    });
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const updatedData = {
        "sender": sender.clientId,
        "recipient":this.props.contact,
        "msgText":this.state.textarea,
        "msgTime":hours + ":" + minutes + " " + day + "/" + month + "/" + year,
        "date": Date.parse(new Date())
    }
    const resData = {
      "sender": this.props.contact,
      "recipient":sender.clientId,
      "msgText":this.state.chuckNorris,
      "msgTime":hours + ":" + minutes + " " + day + "/" + month + "/" + year,
      "date": Date.parse(new Date())
    }
    fetch("https://peaceful-island-50722.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify(updatedData),
    }).then(r => r.json())
    .then(
        (r) => {
          this.props.msgUpdate(r.chats);
}) .then(r => {setTimeout(
      () => {
        fetch("https://peaceful-island-50722.herokuapp.com/", {
          method: 'POST',
          body: JSON.stringify(resData),
        }).then(r=> r.json())
            .then(
                (r) => {
                  this.props.msgUpdate(r.chats);
      }
      );
      },
      7 * 1000
    );
         });
    this.state.textarea="";
    
  }

  handleKeyDown(event) {
    if (event.code === 'Enter') {this.handleSubmit(event)}
  else {}}


  render() {
    return (
      <div className='main_footer'>
        <textarea type='text' onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.state.textarea} className='msg_text' 
        placeholder='type your message...'/>
        <button type="button" onClick={this.handleSubmit}><SendB className="send"/></button>
    </div>
    )
  }
}

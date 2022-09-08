import React, { Component } from 'react'
import './asideContacts.scss';
import {ChatContact} from './../index';


let array = []


export class AsideContacts extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      olastJudyMsg: "",
      olastAliceMsg: "",
      olastVelazquesMsg: "",
      olastBarreraMsg: "",
      lastJudyMsg: "We are losing money! Quick!",
      lastAliceMsg: "You are the worst!",
      lastVelazquesMsg: "don't come here. Judy will kill you",
      lastBarreraMsg: "How about coffee? 😉",

    };
    this.lastMesageFilter = this.lastMesageFilter.bind(this)
    this.sortFunction = this.sortFunction.bind(this)
  }

  componentDidMount() {
    fetch("https://peaceful-island-50722.herokuapp.com/",)
        .then(result => result.json())

        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.chats,
                });
                setTimeout(
                  () => {
                    this.lastMesageFilter()
                this.sortFunction(
                  this.state.olastJudyMsg,
                  this.state.olastAliceMsg,
                  this.state.olastVelazquesMsg,
                  this.state.olastBarreraMsg);
                  },
                  1 * 50
                );
                
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )


       
}

componentDidUpdate(prevProps, prevState, snapshot) {
  if (this.props.lastMes !== prevProps.lastMes) {
    let lastMes = this.props.lastMes
    array.push(lastMes);
    this.lastMesageFilter()
    this.sortFunction(
      this.state.olastJudyMsg,
      this.state.olastAliceMsg,
      this.state.olastVelazquesMsg,
      this.state.olastBarreraMsg)
    if (lastMes.sender === "Judy Hobs" || lastMes.recipient === "Judy Hobs")
    {this.setState({
      lastJudyMsg: lastMes.msgText,
      olastJudyMsg:lastMes,
    })}  
    if (lastMes.sender === "Alice Freeman" || lastMes.recipient === "Alice Freeman")
    {this.setState({lastAliceMsg: lastMes.msgText,
      olastAliceMsg:lastMes,})}  
    if (lastMes.sender === "Velazques" || lastMes.recipient === "Velazques")
    {this.setState({lastVelazquesMsg: lastMes.msgText,
      olastVelazquesMsg:lastMes,})}  
    if (lastMes.sender === "Barrera" || lastMes.recipient === "Barrera")
    {this.setState({lastBarreraMsg: lastMes.msgText,
      olastBarreraMsg:lastMes,})}  
}
}

lastMesageFilter() {
  let sender = JSON.parse(localStorage.getItem('key').toString());
  let chats = this.state.items
  let chatsJudy = chats.filter(function (chat) {
    return ((chat.recipient === "Judy Hobs") && (chat.sender === "all" || sender)) || ((chat.sender === "Judy Hobs") && (chat.recipient === "all" || sender));})
  let chatsAlice = chats.filter(function (chat) {
    return ((chat.recipient === "Alice Freeman") && (chat.sender === "all" || sender)) || ((chat.sender === "Alice Freeman") && (chat.recipient === "all" || sender));})
  let chatsVelazques = chats.filter(function (chat) {
    return ((chat.recipient === "Velazques") && (chat.sender === "all" || sender)) || ((chat.sender === "Velazques") && (chat.recipient === "all" || sender));})
  let chatsBarrera = chats.filter(function (chat) {
    return ((chat.recipient === "Barrera") && (chat.sender === "all" || sender)) || ((chat.sender === "Barrera") && (chat.recipient === "all" || sender));})
  this.state.lastJudyMsg = chatsJudy[chatsJudy.length-1].msgText
  this.state.lastAliceMsg = chatsAlice[chatsAlice.length-1].msgText
  this.state.lastVelazquesMsg = chatsVelazques[chatsVelazques.length-1].msgText 
  this.state.lastBarreraMsg = chatsBarrera[chatsBarrera.length-1].msgText

  this.state.olastJudyMsg = chatsJudy[chatsJudy.length-1]
  this.state.olastAliceMsg = chatsAlice[chatsAlice.length-1]
  this.state.olastVelazquesMsg = chatsVelazques[chatsVelazques.length-1]
  this.state.olastBarreraMsg = chatsBarrera[chatsBarrera.length-1]
}

sortFunction(q, w, e, r) {
  if (array.length===0) {array.push(q, w, e, r)}

  let chats_wrapper = document.querySelector('.chats_wrapper');

  [...chats_wrapper.children]
      .sort((a,b)=>a.dataset.date < b.dataset.date ? 1 : -1 )
      .forEach(node=>chats_wrapper.appendChild(node));
  console.log(array)
}


  render() {
    let sender = JSON.parse(localStorage.getItem('key').toString());
    let {error, isLoaded, items} = this.state || {};
    if (error) {
        return (<p> Error {error.message} </p>)
    } else if (!isLoaded) {
        return (<p> Loading... </p>)
    } 
     else {
      this.lastMesageFilter() 
      let lastMes = this.props.lastMes
      if (lastMes.sender === "Judy Hobs" || lastMes.recipient === "Judy Hobs")
      {this.state.lastJudyMsg = lastMes.msgText
        this.state.olastJudyMsg = lastMes}  
      if (lastMes.sender === "Alice Freeman" || lastMes.recipient === "Alice Freeman")
      {this.state.lastAliceMsg = lastMes.msgText
        this.state.olastAliceMsg = lastMes}  
      if (lastMes.sender === "Velazques" || lastMes.recipient === "Velazques")
      {this.state.lastVelazquesMsg = lastMes.msgText
        this.state.olastVelazquesMsg = lastMes}
      if (lastMes.sender === "Barrera" || lastMes.recipient === "Barrera")
      {this.state.lastBarreraMsg = lastMes.msgText
        this.state.olastBarreraMsg = lastMes}  }

      let judy = this.state.olastJudyMsg;
      let alise = this.state.olastAliceMsg;
      let velaz = this.state.olastVelazquesMsg;
      let barera = this.state.olastBarreraMsg;
      
    return (
      <form>
      <h2 className='chat_title'>Chats</h2>
      <div className="chats_wrapper">
      <ChatContact className="JudyHobs" name="Judy Hobs" onClick={() => {this.props.selectContact("Judy Hobs")}} 
      lastMes={this.state.lastJudyMsg} date={judy.date}  time={judy.msgTime}/>
      <ChatContact className="AliceFreeman" name="Alice Freeman" onClick={() => {this.props.selectContact("Alice Freeman")}} 
      lastMes={this.state.lastAliceMsg} date={alise.date}  time={alise.msgTime}/>
      <ChatContact className="Velazques" name="Velazques" onClick={() => {this.props.selectContact("Velazques")}} 
      lastMes={this.state.lastVelazquesMsg} date={velaz.date}  time={velaz.msgTime}/>
      <ChatContact className="Barrera" name="Barrera" onClick={() => {this.props.selectContact("Barrera")}} 
      lastMes={this.state.lastBarreraMsg} date={barera.date}  time={barera.msgTime}/>
      </div>
    </form>
    )
  }
}

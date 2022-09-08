import React, {Component} from 'react'
import './main.scss';
import {Chats} from './../index'
import {useEffect} from 'react';




export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSended: true,
            msgText: '',
            msgTime: '',
            contact: this.props.contact,
        };
        this.isSended = this.isSended.bind(this);
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
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

            setTimeout(
                () => {
                    let element = document.querySelector('.flex_container');
                    console.log(element)
                    element.scroll({
                        top: element.scrollHeight,
                        left: 0,
                        behavior: 'smooth'
                      });;
                },
                1 * 50
              );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.msgUpdate !== prevProps.msgUpdate) {
            this.setState({items: this.props.msgUpdate})
            setTimeout(
                () => {
                    let element = document.querySelector('.flex_container');
                    console.log(element)
                    element.scroll({
                        top: element.scrollHeight,
                        left: 0,
                        behavior: 'smooth'
                      });;
                },
                1 * 50
              );
        }
    }

    isSended(sender) {
        if (sender === this.props.contact) return false
        else return true;
    }


    render() {
        let sender = JSON.parse(localStorage.getItem('key').toString());
        let {error, isLoaded, items} = this.state || {};
        if (error) {
            return (<p> Error {error.message} </p>)
        } else if (!isLoaded) {
            return (<p> Loading... </p>)
        } else {
            
            let contact = this.props.contact;
            let recDef = items.filter(function (chat) {
                return ((chat.recipient === contact) && (chat.sender === "all" || sender)) || ((chat.sender === contact) && (chat.recipient === "all" || sender));
            })

            return (
                <div className='flex_container'>
                    {recDef.map(chat => (
                        this.state.msgText = chat.msgText,
                            this.state.msgTime = chat.msgTime,
                            this.state.isSended = this.isSended(chat.sender),
                            this.state.contact = this.props.contact,
                            <Chats
                                isSended={this.state.isSended}
                                msgText={this.state.msgText}
                                msgTime={this.state.msgTime}
                                contact={this.state.contact}>
                                {this.state.msgText}
                            </Chats>))}
                </div>
            )
        }
    }
}


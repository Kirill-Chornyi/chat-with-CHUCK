import React, {Component} from 'react'
import './Home.scss'
import {AsideHeader} from './../../modules'
import {AsideContacts} from './../../modules'
import {Main} from './../../modules'
import {MainHeader} from './../../modules'
import {MainFooter} from './../../modules'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            name: "",
            lastMes: "",
        };

        this.selectContact = this.selectContact.bind(this);
    }


    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.message !== prevState.msg) {

        }
    }

    selectContact = (value) => {
        this.setState({name: value});
    }

    msgUpdate = (chat) => {
        this.setState({
            message: chat,
            lastMes: chat[chat.length-1]});
    }


    render() {
        return (
            <div className="main_flex">
                <div className="a_side">
                    <AsideHeader selectContact={this.selectContact}/>
                    <AsideContacts selectContact={this.selectContact} msgUpdate={this.state.message} 
                    lastMes={this.state.lastMes}/>
                </div>
                <div className="main_side">
                    <MainHeader contact={this.state.name}/>
                    <Main contact={this.state.name} msgUpdate={this.state.message} />
                    <MainFooter contact={this.state.name} msgUpdate={this.msgUpdate} />
                </div>
            </div>
        )
    }
}
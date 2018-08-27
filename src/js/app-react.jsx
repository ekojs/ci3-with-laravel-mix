// let React = require('react');
// let ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

function Greetings(props){
    return (
        props.isLoggedIn ? (<h1>Welcome Back {props.name}</h1>) : (<h1>Please Login</h1>)
    );
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            name: null,
            btn_text: "Login"
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleLogin() {
        this.setState({
            isLoggedIn:true,
            name: "Eko Junaidi Salam",
            btn_text: "Logout"
        });
    }

    handleLogout() {
        this.setState({
            isLoggedIn:false,
            name: null,
            btn_text: "Login"
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let btn;
        if(isLoggedIn){
            btn = <button onClick={this.handleLogout}>{this.state.btn_text}</button>;
        }else{
            btn = <button onClick={this.handleLogin}>{this.state.btn_text}</button>;
        }
        return (
            <div>
                <Greetings isLoggedIn={this.state.isLoggedIn} name={this.state.name} />
                {btn}
            </div>
        );
    }
}

class ListItem extends React.Component {
    render() {
        const listItems = this.props.listItems.map(
            number => <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

const numbers = [1,2,3,4,5,6];
const el = <ListItem listItems={numbers} />;

ReactDOM.render(el,document.getElementById('root'));
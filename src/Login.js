import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import './App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "Example",
            username: "Example",
            password: "Example"
        }
        this.update = () => {
            this.setState({
                username: this.refs.username.value,
                password: this.refs.password.value,
            });
        }
    }
    render() {
        return (
            <div className="loginBars">
                <input ref="username" type="text" placeholder="Username"></input> <br />
                <input ref="password" type="text" placeholder="Password"></input> <br />
                <div className="signIn">
                    <button>Sign in</button>
                    <button id='signUp' onClick={this.addItem}>Sign up</button>
                    <button id='update' onClick={this.updateItem}>Update Current</button>
                    <button id='delete' onClick={this.deleteEntry}>Delete Current</button>
                </div>
            </div>
        );
    }

}

export default Login;


class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="innerContainer">
                <div className="box">
                    <div className="inputGroup">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="loginInput" placeholder="Username"/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="loginInput" placeholder="Password"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginBox;

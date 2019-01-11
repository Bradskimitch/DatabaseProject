import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div className="loginBars">
                <input placeholder="Username"></input> <br />
                <input placeholder="Password"></input> <br />
                <div className="signIn">
                    <button>Sign in</button>
                </div>
            </div>
        );
    }
}

export default Login;
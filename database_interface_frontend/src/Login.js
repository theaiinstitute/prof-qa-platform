import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import { url_django } from './urlBackend';

class Login extends Component {

    redirect = () => {
        this.props.history.push("/qa");
    }

    handleLogin = (e) => {

        let data = {
            username : document.getElementById("username-input").value,
            password : document.getElementById("password-input").value
        }

        axios.post(url_django + 'token-obtain/', data).then(
            response => {
                if (response.data) {
                    this.props.authenticate(response.data,this.redirect.bind(this))
                }
            }).catch(
                error => {
                    alert("No active account found with the given credentials")
                }
            )

    }


    render() {
        return (
            <div className='app-container-login'>

                <div className='title-login'>
                    <img src="logo.png" alt="logo"></img>
                    Q and A interface
                </div>

                <div className='inputs-container' >
                    <form style={{ textAlign: "center" }}>
                        <p style={{ textAlign: "center" }}>Login</p>
                        <br></br>
                        <label htmlFor="username-input" >Username</label>
                        <input type="text" id="username-input" className="form-control-auth"/>
                        <br></br>
                        <label htmlFor="password-input" >Password</label>
                        <input type="password" id="password-input" className="form-control-auth"/>
                    </form>
                </div>

                <div style={{ textAlign: 'right', padding: '20px' }}>
                    <button type="submit" className='login-button' onClick={this.handleLogin}>login</button>
                </div>

            </div>





            
        );
    }
}

export default Login;



import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Interface from './Interface';
import Login from './Login';
import { ProtectedRoute } from './ProtectedRoute'
import { url_django } from './urlBackend';
import axios from 'axios';


class App extends Component {

    loadFromStorage = (key) => {
        let localData = localStorage.getItem(key);
        if (localData) {
            return JSON.parse(localData)
        }
        else {
            return null
        }
    }

    saveInStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    initState = () => {
        let savedState = this.loadFromStorage("state");

        if (savedState) {
            return savedState;
        }
        else {
            return {
                isAuthenticated: false,
                access_token: null,
                refresh_token: null
            }
        }
    }

    state = this.initState()

    authenticate = (data, callback) => {
        this.setState({
            isAuthenticated: true,
            access_token: data["access"],
            refresh_token: data["refresh"],
        },
            () => {
                callback();
                this.saveInStorage("state", this.state);
            }
        );
    }

    logout = () => {
        localStorage.clear();
        this.setState({
            isAuthenticated: false,
            access_token: null,
            refresh_token: null,
        })
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    refreshToken = async () => {
        let data = {
            refresh: this.state.refresh_token
        };

        let response = await axios.post(url_django + 'token-refresh/', data);
        await this.setStateAsync({ access_token: response.data.access });
        this.saveInStorage("state", this.state);              
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" render={(props) => <Login {...props} authenticate={this.authenticate.bind(this)}></Login>}></Route>
                    <ProtectedRoute exact path="/qa" component={Interface} credentials={this.state} refreshToken={this.refreshToken.bind(this)} logout={this.logout.bind(this)}></ProtectedRoute>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;



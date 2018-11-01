import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from "./components/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to 1412329's React JS Chat App
          </h1>
        </header>
        <UserInfo />
      </div>
    );
  }
}

export default App;

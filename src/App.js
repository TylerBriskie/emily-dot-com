import React, { Component } from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default App;

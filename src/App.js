import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import YogaPage from './components/YogaPage/YogaPage';
import PolePage from './components/PolePage/PolePage';
import DancePage from './components/DancePage/DancePage';
import TrainingPage from './components/TrainingPage/TrainingPage';

import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.setActive = this.setActive.bind(this);
      this.state = {
          activePage: "home",
      };
  }

  setActive(page){
      console.log("setting active page: ", page);
      this.setState({activePage: page})
  }


  render() {
    return (
        <Router>
          <div className="App">
            <div>
                <Header activePage = {this.state.activePage} setActive={this.setActive} />
                <Switch>
                    <Route path='/' exact component = {HomePage} />
                    <Route path='/training/' exact component = {TrainingPage} />
                    <Route path='/dance/' exact component = {DancePage} />
                    <Route path='/yoga/' exact component = {YogaPage} />
                    <Route path='/pole/' exact component = {PolePage} />

                </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;

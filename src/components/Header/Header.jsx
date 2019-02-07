import React, { Component } from 'react';
import logo from '../../assets/ballet.svg';
import './Header.scss';

class Header extends Component {
    render() {
        return (
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h1>Emily Lutts</h1>
                    <div className="jobs">
                        <p>Personal Trainer</p>
                        <p>Dance Instructor</p>
                        <p>Nutritionist</p>
                    </div>
                </header>

        );
    }
}

export default Header;
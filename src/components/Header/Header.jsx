import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
        }

    }

    handleClick(page){
        this.state.activePage = page;
        console.log('setting state: ', this.state);
    }

    render() {
        const currentPage = this.state.activePage;
        return (
                <header className="app-header">
                    <h1>Emily Lutts</h1>
                    <div className="nav-button-container">
                        <Link className={`nav-button${currentPage === 'training' ? ' active' : ''}`} to="/training/" onClick={() => this.handleClick('training')}>Personal Trainer</Link>
                        <Link className={`nav-button${currentPage === 'dance' ? ' active' : ''}`} to="/dance/" onClick={() => this.handleClick('dance')}>Dance Instructor</Link>
                        <Link className={`nav-button${currentPage === 'pole' ? ' active' : ''}`} to="/pole/" onClick={() => this.handleClick('pole')}>Pole Fitness</Link>
                        <Link className={`nav-button${currentPage === 'yoga' ? ' active' : ''}`} to="/yoga/" onClick={() => this.handleClick('yoga')}>Yoga</Link>
                    </div>
                </header>

        );
    }
}

export default Header;
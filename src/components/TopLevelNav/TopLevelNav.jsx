import React, { Component } from 'react';
import './TopLevelNav.scss';

class TopLevelNav extends Component {
    render() {
        return (
            <div className="site-nav-container">
                <ul>
                    <li>Personal Training</li>
                    <li>Dance Instruction</li>
                    <li>Pole Fitness</li>
                    <li>Yoga</li>
                </ul>
            </div>
        );
    }
}

export default TopLevelNav;
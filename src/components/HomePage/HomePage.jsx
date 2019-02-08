import React, { Component} from 'react';
import './HomePage.scss';

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("HomePage mounted, props: ", this.props);
    }

    render(){
        return (
            <div id="home-page-container">
            <h1>HomePage, coming soon</h1>

    </div>
        );
    }

};

export default HomePage;

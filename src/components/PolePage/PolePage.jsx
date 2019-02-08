import React, { Component} from 'react';
import './PolePage.scss';

class PolePage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("PolePage mounted, props: ", this.props);
    }

    render(){
        return (
            <div id="pole-page-container">
                <h1>PolePage, coming soon</h1>
            </div>
        );
    }

};

export default PolePage;

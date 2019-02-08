import React, { Component} from 'react';
import './DancePage.scss';

class DancePage extends Component {
    constructor(props){
        super(props)
        console.log('DancePage props: ', this.props);
    }
    componentDidMount(){
        console.log("DancePage mounted, props: ", this.props);
    }

    render(){
        return (
            <h1>DancePage, coming soon</h1>
        );
    }

};

export default DancePage;

import React, { Component} from 'react';
import './YogaPage.scss';

class YogaPage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("YogaPage mounted, props: ", this.props);
    }

    render(){
        return (
            <div id="yoga-page-container">
                <h1>Yoga, coming soon</h1>

            </div>                );
    }

};

export default YogaPage;

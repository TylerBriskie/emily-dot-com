import React, { Component} from 'react';
import './TrainingPage.scss';

class TrainingPage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("TrainingPage mounted, props: ", this.props);
    }

    render(){
        return (
            <div id="training-page-container">
                <h1>Training, coming soon</h1>

            </div>
        );
    }

};

export default TrainingPage;

import React, { Component } from 'react';
import "../style/Home.css"
import MainContent from './MainContent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{"background-color": "#e7e7e7"}}>
                <br/>
                <div align = 'center'>
                    <MainContent />
                </div>
            </div>
         );
    }
}
 
export default Home;

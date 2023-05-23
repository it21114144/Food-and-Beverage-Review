import React, { Component } from 'react';
import Suggestion from './Suggestion';
import Profile from './Profile';

class LeftContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }

    render() { 
        return ( 
            <div>
                <div className="left__container">   
                    <Profile/>    
                </div>
                <br/>
                <div className="left__container">  
                    <Suggestion/>
                </div>
            </div>
        );
    }
}
 
export default LeftContent;
import React, { Component } from 'react';
import "../style/MainPage.css";
import Post from './Post';
import ContentPost from './ContentPost';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[],
            progressBar: "",
         }
    }

    
    render() { 
        return ( 
            <div>
                <div className="mainpage__container">   
                    <ContentPost/>    
                </div>

                <div className="mainpage__container">  
                    <Post/>
                </div>
            </div>
         );
    }
}
 
export default MainPage;
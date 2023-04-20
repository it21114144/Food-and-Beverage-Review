import React, { Component } from 'react';
import "./MainContent.css";
import Post from '../Post/Post';
import ContentPost from '../ContentPost/ContentPost';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <ContentPost/>
                <Post/>
            </div>
         );
    }
}
 
export default MainContent;
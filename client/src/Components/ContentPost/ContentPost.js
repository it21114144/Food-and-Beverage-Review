import React, {Component} from "react";
import './ContentPost.css';
import logo from '../images/logo.jpg';

class ContentPost extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
        }
    }

    render(){
        return(
            <div> 
                <div className='ContentUploadContainer'>
                    <div style={{display:"flex", alignItems:"center", padding:10}}> 
                        <img src = {logo} className = "profile" alt = " "/>
                        <input type = "text" className="contentWritingpart" placeholder="What's on your mind..." />
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:10}} className="icons">
                            <a href="aaa" className="icons" id="photo"> <i class="fa fa-image" aria-hidden="true"></i> </a>
                            <a href="sss" className="icons" id="video"> <i class="fa fa-film" aria-hidden="true"></i> </a>
                            <a href="aaa" className="icons" id="emoji"> <i class="fa fa-smile-o" aria-hidden="true"></i> </a>

                            <button type="button" class="btn btn-success" style={{marginLeft:"300px", width:"70px"}}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPost;
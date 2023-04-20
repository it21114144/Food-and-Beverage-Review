import React, { Component } from 'react';
import './Post.css';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
         }
    }

    render() { 
        return ( 
        <div className="post__container">
            {/* Header */}
            <div className="post__header">
                
            </div>

            {/* Image */}
            <div>
                
            </div>

            {/* Analytics */}
            <div>
                    <div style={{"marginLeft":"10px"}}>
                    
                    </div>
                    <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                       
                    </div>
            </div>

          {/* Comment Section */}
          <div>
              {
                  this.state.commentList.map((item,index)=>(
                      index < 4 ?
                        <div className="post_comment">{item.userName}: {item.comment}</div> :<span></span>
                  ))
              }
              <input text="text" onKeyPress={this.submitComments} className="post__commentbox" placeholder="Add a comment..." />
          </div>
          
        </div> 
        );
    }
}
 
export default Post;
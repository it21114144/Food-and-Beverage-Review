import React, { useState, useEffect } from 'react';
import '../style/Post.css';
import burger from '../images/burger.jpg';
import profile from '../images/profile.jpg';
import MobileMenu from './MobileMenu';
import api from '../api';
import config from '../config';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Post = (props) => {
    const [posts, setPosts] = useState([]);

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const [isLiked, setIslLiked] = useState(false)
    
    
    useEffect(() => {
            axios.get(`${config.baseUrl}/comments`).then((value) => {
                setComments(value.data)
            }).catch(err => {
                console.log("get comments failed " + err)
            })
        }, [comments,isLiked]);

    
    const getPosts = async() => {
        try {
            const response = await api.get("/api/posts/");            
            setPosts(response.data);
            
        } catch (error) {
           console.log(error);
        }
        
    }

    useEffect(() =>{
        getPosts();
    },[])


    return ( 
        <div>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
            <div className="post__container">
            
            <div className="post__header">
                <img src = {profile} className ='profile' alt=''/>
                <h6 className = 'username'> {post.username} </h6>                           
            </div>
            <div className='post'>     
            <Carousel showThumbs={false} className="custom-carousel">
                {post.imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt="" style={{"width" : "75%"}} />
            ))}     
            </Carousel>                                   
            </div>
            <div className='caption'>                
                <p>{post.caption}</p>
            </div>

           
            <div>
            <div className="post_comment"> </div>
                      <div>
                              <div style={{ "float":"left" }} class="ibtn">
                              {
                                  isLiked ?
                                      <HeartFilled
                                          style={{color:"red"}}
                                          onClick={(e) => {
                                              e.preventDefault()
                                              setIslLiked(false)
                                          }}
          
                                      />
                                      :
          
                                      <HeartOutlined
                                          onClick={(e) => {
                                              e.preventDefault()
                                              setIslLiked(true)
                                          }}
                                      />}
                              
                          </div>
                          <button class="ibtn"><i class="fa fa-commenting-o"></i></button>
                          <button class="ibtn"><i class="fa fa-share"></i></button>                          

                          <div style={{ "fontWeight": "bold" , "marginLeft":"20px"}}>
                              {props.likes} &nbsp; likes 
                      </div>   
                     
                      </div> 
                      <br/> 
            </div>
          
          <div>   
               
          {comments.map((item, index) => (
                    <div className="post_comment">{item.userId}: {item.text}</div>
                ))}
                <input
                              value={comment}
                              text="text"
                              className="post__commentbox" placeholder="Write your thoughts..." 
                              onChange={(e) => {
                                  setComment(e.target.value)
                              }}
                          />
                <button type="button" class="btn btn-success" id='commentbtn' 
                              onClick={async (e) => {
                                e.preventDefault()
                                const data = {
                                    "commentId": "1",
                                    "postId": props.id,
                                    "userId": "currUserId",
                                    "text": comment
                                }
                                
                                await axios.post(`${config.baseUrl}/comments`, data).catch(err => {
                                    console.log("add comment failed " + err)
                                })
                                setComment("")
                            }}
                              >Add</button>
                              
                </div>
          
        </div> 
        </li>
          ))}
          </ul>

          <div>
            {
            /*
            <div className="post__container">
                      
          
                      <div className="post__header">
                          <img src = {profile} className ='profile' alt=''/>
                          <h6 className = 'username'> sandali00 </h6> 
                      
                          <MobileMenu />
                          
                      </div>
                      
                      <div className='post'>
                          <img src = {burger}  alt = " " /> 
                          
                      </div>
          
                      <div className='caption'> 
                        
                          <p> My Little Bacon Cheeseburger was simpler than going "All The Way". 
                          I ordered it with lettuce, tomato, and onion, along with barbecue sauce. 
                          It may not have had as many exciting ingredients, but the flavors of the Little Bacon 
                          Cheeseburger really shined and made me feel like I was eating a truly great fast-food burger. </p>
                          
                          
                      </div>                      
                      <div className="post_comment"> </div>
                      <div>
                              <div style={{ "float":"left" }} class="ibtn">
                              {
                                  isLiked ?
                                      <HeartFilled
                                          style={{color:"red"}}
                                          onClick={(e) => {
                                              e.preventDefault()
                                              setIslLiked(false)
                                          }}
          
                                      />
                                      :
          
                                      <HeartOutlined
                                          onClick={(e) => {
                                              e.preventDefault()
                                              setIslLiked(true)
                                          }}
                                      />}
                              
                          </div>
                          <button class="ibtn"><i class="fa fa-commenting-o"></i></button>
                          <button class="ibtn"><i class="fa fa-share"></i></button>                          

                          <div style={{ "fontWeight": "bold" , "marginLeft":"20px"}}>
                              {props.likes} 0 &nbsp; likes 
                      </div>   
                          
                      </div>   
                                                
                    
                    <div>          
                    {comments.map((item, index) => (
                              <div className="post_comment">{item.userId}: {item.text}</div>
                          ))}
                          <input
                              value={comment}
                              text="text"
                              className="post__commentbox" placeholder="Write your thoughts..." 
                              onChange={(e) => {
                                  setComment(e.target.value)
                              }}
                          />
                    
                              <button type="button" class="btn btn-success" id='commentbtn' 
                              onClick={async (e) => {
                                e.preventDefault()
                                const data = {
                                    "commentId": "1",
                                    "postId": props.id,
                                    "userId": "currUserId",
                                    "text": comment
                                }
                                await axios.post(`${config.baseUrl}/comments`, data).catch(err => {
                                    console.log("add comment failed " + err)
                                })
                                setComment("")
                            }}
                              >Add</button>
                          </div>
                          <br/>
                    
                  </div> 
            
            */
          }

          </div>
          
          </div>
                              

        );
    
}

export default Post;
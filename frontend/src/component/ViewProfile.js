import React, {useState , useEffect} from "react";
import '../style/ViewProfile.css';
import Grid from '@mui/material/Grid'
import userImage from '../images/profile.jpg';
import Post from './Post';
import api from '../api';
import profile from '../images/profile.jpg';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const ViewProfile = (props) =>{
    const [followers, setFollowers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [users, setUser] = useState([]);
    const [isLiked, setIslLiked] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const userId = useParams();
    const [isFollwed, setFollowed] = useState(false);
    const [followId, setFollowId] = useState("")
 
    const getUser = async () => {
        try {
          const response = await api.get(`/api/users/${id}`);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      const getPosts = async () => {
        try {
          const response = await api.get(`/api/posts/`);
          setPosts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
       
      useEffect(() => {
        getUser();
        
      }, []);

      useEffect(() => {
        getPosts();
      }, [userId, id]);
      
    


      const getFollowers = async () => {
        try {
          const response = await api.get('/api/follow');
          setFollowers(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {       
          getFollowers();
        
      }, []);

    const handleDelete = async(id) => {
        try {
            await api.delete(`/api/posts/${id}`);   
            alert("Post Deleted");         
            getPosts();
            
        } catch (error) {
          alert(error);
        }
        
      }
    
    
    const handleEdit = () => {
        navigate(`/edit/${id}`);
    };

    const handleUnfollow = async () => {
      await api.delete(`/follow/${followId}`).then((value) => {
          console.log('Unfollowed')
      }).catch(err => {
          console.log("handle unfollow failed " + err)
      })
  }
    
    
    return(
        <div style={{ "backgroundColor" : "#e2e2e2"}}>
            <div className="info"> 
            <img src ={userImage} className = 'viewimage' alt=" " />
            {users && (
            <>
            <h5 className="viewname"> {users.username} </h5>
            <h4 className="viewname">  {users.name} </h4>
            </>
            )}
            </div>
            <Grid container spacing={2}>
                <Grid xs={8}> 
                <div className="postList">
                <br/>  
                <h5> Your Posts </h5>
                <br/>
                <center>
                
                <ul>
                
                  { posts.filter((post) => { return post.userId === id }).map(post => (
                   <li key = {post.id}>
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
                      <div>   
        {/*       
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
                              */}
                              <br/>
                        </div>
                        
                        <Link class="btn btn-primary" to = {`/edit/${users.id}/${post.id}`} style={{ margin: '10px', marginLeft :'270px'}}> 
                            <i className="fa fa-pencil"></i>&nbsp; Edit
                        </Link> 
                        
                        <button class="btn btn-danger" onClick={() => handleDelete(post.id)} style={{ float: 'right', margin: '10px' }}>
                            <i className="fa fa-trash"></i>&nbsp; Delete
                        </button>
                        <br/>
                        </div>
                   </li>
                   
                   ))}
                    
                </ul>
                
                </center>
                </div>

                </Grid>
                <Grid xs={4}> 
                <div className="followerList">
                    <br/>
                    <h5> Friends </h5>

                    <ul>
                    
                        {followers.filter((follower) => { return follower.followedBy === users.username }).map((follower) => (
                        <li key={follower.id}> 
                            <div className="user-unfollow">
                                <img src ={userImage} className = 'profile' alt=" " />
                                
                                <input type="button" className="btn btn-danger" id="follow" onClick={(e) => {
                                            handleUnfollow()}} value="Unfollow" />
                                <p className="name"> {follower.followedTo} </p> 
                                
                                <a href={`/suggestprofile/${users.id}`} className="viewbtn">View Profile</a> 
                                                    
                            </div>
                        </li> 
                        ))}
                    </ul>
                </div>
                </Grid>
            </Grid>
            
        </div>
    )

}

export default ViewProfile;
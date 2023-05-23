import React, { useState,useEffect } from 'react';
import '../style/ContentPost.css';
import logo from '../images/profile.jpg';
import api from '../api';
import {  useParams } from 'react-router-dom';


const ContentPost = () => {
    const [caption, setCaption] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [users, setUsers] = useState('');
    const [userId, setUserId] = useState('');
    const { id } = useParams();
    const [username, setUsername] = useState();

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleUsername = (event) => {
      setUsername(event.target.value);
  };

    const handleImageChange = (event) => {
        setImageUrls(event.target.files)
    };
    
   const getUser = async () => {
    try {
      const response = await api.get(`/api/users/${id}`);
      setUsers(response.data);
      setUsername(response.data.username);
      setUserId(response.data.userId);
    } catch (error) {
      console.log(error);
    }
  }
  
      useEffect(() => {
        getUser();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const postData = {caption, imageUrls, username:users.username, userId:users.id};
            await api.post("/api/posts/", postData);
            setCaption(' ');
            setImageUrls([]);
            setUsername('');
            setUserId('');
            alert("Post Created!");
        }
        catch(error){
            alert("An error occured while creating the post...!\n" + error);
            
        }
 
      };

      const handleRemoveImage = (imageUrl) => {
        const updatedImageUrls = imageUrls.filter((url) => url !== imageUrl);
        setImageUrls(updatedImageUrls);
      };

      const canAddImage = imageUrls.length < 4;

    
        return(
            <div> 
                <div className='ContentUploadContainer'>
                <form onSubmit={handleSubmit}>
                <div>
                    <div className="post__header"> 
                        <img src = {logo} className = "profile" alt = " "/>
                        {users && (
                        <>
                          <h6 className = 'username' value = {username} onChange={handleUsername}>{users.username}</h6>
                        </> )}
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:10}} className="images">
                    <input type = "text" value={caption} onChange={handleCaptionChange} class="form-control" 
                    style = {{"width" : "34pc", height : "auto"}}
                    placeholder="Share your thoughts..." />
                   
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:10}} className="images">
                    
                    {/*<input id="image" type="file" accept="image/*" name='image' onChange={handleImageChange} style={{ fontSize:"14px" }} multiple/>*/}

                      <input
                        type="text"
                        value={selectedImage}
                        onChange={(e) => setSelectedImage(e.target.value)}
                        class="form-control"
                        id="exampleInputPassword1" style = {{"width" : "34pc"}}
                        placeholder="Add your images..."
                      />
                    </div>
                    <button
                      type='button'
                      class="btn btn-primary"   style = {{"float" : "left", "marginLeft" : "10px"}}
                      onClick={() => {
                        if (canAddImage) {
                          setImageUrls([...imageUrls, selectedImage]);
                          setSelectedImage('');
                        } else {
                          alert('You can only add up to 4 images.');
                        }
                      }}
                      disabled={!canAddImage}
                    >
                      Add Image
                    </button>
                    <br/>
                    <div>
                    <br/> 
                    
                      {imageUrls.map((imageUrl, index) => (
                        <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                          <img src={imageUrl} alt="" />
                          <div>
                          <button
                            type='button'
                            class="btn btn-danger" style={{"marginBottom" : "15px", "float" : "left", "marginLeft" : "10px"}}
                            onClick={() => handleRemoveImage(imageUrl)}
                          >
                            Remove
                          </button>
                          </div>
                          
                        </div>
                      ))} 
                    </div> 
                    <button type="submit" class="btn btn-success" style={{marginLeft:"450px", width:"70px", "marginBottom" : "30px"}}>Post</button>
                </div>  
                </form>
                </div>
            </div>
        )
    
}

export default ContentPost;
import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../api';
import '../style/Login.css';


function EditPost() {
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [caption, setCaption] = useState('');
  const [users, setUser] = useState('');
  const [usersname, setUsername] = useState('');
  const [usersId, setUserId] = useState('');
  
  const userId = '64602806a38df1287fb41dc1';
  const username = 'sandali00';

  const navigate = useNavigate();
  const { id } = useParams();


  const handleCancel = () => {
    navigate(`/profile/${userId}`);
  };

  const getUser = async () => {
    try {
      const response = await api.get(`/api/users/${id}`);
      setUser(response.data);
      setUsername(username);
      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  }
  
      useEffect(() => {
        getUser();
      }, []);

      const getPosts = async () => {
        try {
          const response = await api.get(`/api/posts/${id}`);          
          setCaption(response.data.caption);
          setImageUrls(response.data.imageUrls);
          setUsername(response.data.username);
          setUserId(response.data.usersId);
        } catch (error) {
          console.log(error);
        }
      };

  useEffect(() => {
    getPosts();
    
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedPost = { caption, imageUrls: [...imageUrls], username:'sandali00', userId: '64602806a38df1287fb41dc1'};
      await api.put(`/api/posts/${id}`, updatedPost);
      alert("Post Updated!");
      navigate(`/profile/${userId}`);
    } catch (error) {
      alert("An error occurred while updating the post...!\n" + error);
    }
  };
  

  const handleRemoveImage =  (imageUrl) => {
    const updatedImageUrls = imageUrls.filter((url) => url !== imageUrl);
    setImageUrls(updatedImageUrls);
  };
  

  const handleAddImage = () => {
    if (canAddImage && selectedImage.trim() !== '') {
      setImageUrls([...imageUrls, selectedImage]);
      setSelectedImage('');
    } else {
      alert('Please enter a valid image URL.');
    }
  };

  const canAddImage = imageUrls.length < 4;

  return (
    <div>
      <Grid container>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <div style={{ "align": "center", "width": "615px", marginTop: "20px" }} className='editpost'>
            <div className="loginpage_rightcomponent">
              <div className="loginPage__signin">
                <div className='login'>
                  <form>
                    <h5> Edit Post </h5>
                    <div className="mb-3" style={{ "marginRight": "10px" }}>
                      <label>User Id</label>
                      <input
                        type="text"
                        value={userId}                       
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      readOnly/>
                    </div>
                    <div className="mb-3" style={{ "marginRight": "10px" }}>
                      <label>Username</label>
                      <input
                        type="text"
                        value={username}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      readOnly/>
                    </div>
                    
                    <div className="mb-3" style={{ "marginRight": "10px" }}>
                      <label>Caption</label>
                      <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3" style={{ "marginRight": "10px" }}>
                      <label>Image</label>
                      <input
                        type="text"
                        value={selectedImage}
                        onChange={(e) => setSelectedImage(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button
                      type='button'
                      className="btn btn-primary"
                      onClick={handleAddImage}
                      disabled={!canAddImage}
                    >
                      Add Image
                    </button>
                    <br />
                    <div>
                      <br />
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
                    
                    <div>
                    <button
                      type='submit'
                      class="btn btn-success"
                      onClick={handleFormSubmit}>Save</button>
                    <button
                      
                      class="btn btn-danger"
                      onClick={handleCancel}
                      style={{ "float": "right", "marginRight": "10px" }}
                    >
                      Cancel
                    </button>
                    </div>
                    
                    </form>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default EditPost;
                      

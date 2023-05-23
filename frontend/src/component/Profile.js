import React, { useState, useEffect } from "react";
import '../style/Profile.css';
import profile from '../images/profile.jpg';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../api';

function Profile() {
  const [users, setUser] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get(`/api/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleProfile = () => {
    navigate(`/profile${id}`)
  }

  return (
    <div className="profileview">
      <br />
      <h6>Profile</h6>
      <img src={profile} className='profileimage' alt=" " />
      {users && (
        <>
          <h6 className="profilename">{users.username}</h6>
          <span className="likes">&nbsp;likes</span>
          <span className="followers">&nbsp;followers</span>
          <br /><br />
          <Link class="btn btn-success" to ={`/profile/${id}`} style={{ "marginBottom": "20px" }}> View Profile
          </Link>
          <br />
        </>
      )}
    </div>
  )
}

export default Profile;
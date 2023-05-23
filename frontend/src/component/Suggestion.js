import React, { useState, useEffect } from "react";
import '../style/Suggestion.css';
import userImage from '../images/profile.jpg';
import { useParams } from 'react-router-dom';
import api from '../api';

function Suggestion() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [isFollwed, setFollowed] = useState(false);
  const [followedBy, setFollowedBy] = useState();
  const [followedTo, setFollowedTo] = useState();

  const handleFollowButtonClick = async () => {
    const data = {followedBy, followedTo}
    await api.post(`api/follow`, data).then((value) => {
        console.log("Following");
        setFollowed(true);
        setFollowedBy('');
        setFollowedTo('');
        
    }).catch(err => {
        console.log("follow failed " + err)
    })
};

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get(`/api/users/`);
        const filteredUsers = response.data.filter(user => user.id !== id);
        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();

  }, [id]);

  return (
    <div className="suggest">
      <br />
      <h6>Suggest for You</h6>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user">
              <img src={userImage} className='profile' alt=" " />
              <input type="button" className="btn btn-success" value = {isFollwed} onClick={handleFollowButtonClick} id="follow" value="Follow" />
              <p className="name">{user.username}</p>
              <a href={`/suggestprofile/${user.id}`} className="viewbtn">View Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Suggestion;

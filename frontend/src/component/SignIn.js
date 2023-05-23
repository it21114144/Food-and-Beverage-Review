import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const id = useParams();

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleSubmit= async (e) => {
    e.preventDefault()
    const user = {
      email: email,
      username: username
    }

    await axios.get("http://localhost:8081/api/users/", user)
      .then((res) => {
        navigate(`/home/${id}`)
      })
      .catch((error) => {
        console.log(error.message)
      })

        
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4> <br/>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => handleUsernameChange(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

import api from '../api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = { username, name, email };
            await api.post('/api/users/', userData);
            setEmail('');
            setUsername('');
            setName('');
            alert('Successfull');
            navigate("/signin");
        } catch (error) {
            console.log(error);
        }
        
    };
      

    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <h4> Sign Up </h4> <br/>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" value={username}
                            onChange={(event) =>
                            {
                                setUsername(event.target.value);      
                            }} 
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={email}
                            onChange={(event) =>
                            {
                                setEmail(event.target.value);      
                            }} 
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" value={name}
                        onChange={(event) =>
                        {
                            setName(event.target.value);      
                        }}
                        class="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <button type = 'submit' class="btn btn-primary">Submit</button>
                </form>
                
        </div>
    )
    
}

export default SignUp;
import React, { useState } from 'react';
import '../style/MobileMenu.css';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState('');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const handleDelete = async() => {
    try {
        const response = await api.delete(`/api/posts/${id}`);            
        setPostId(response.data);
        
    } catch (error) {
      console.log(error);
    }
    
  }


  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <button className="dialog" onClick={() => handleEdit()} style={{ float: 'left', margin: '10px' }}> 
                <i className="fa fa-pencil"></i>&nbsp; Edit
              </button> 
            </li>
            <li>
              <button className="dialog" onClick={() => handleDelete()}>
                <i className="fa fa-trash"></i>&nbsp; Delete
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileMenu;
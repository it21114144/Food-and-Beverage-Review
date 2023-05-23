import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081'
});

/*
//create post
export const createPost = async (postData) => {
    try {
      const response = await api.post('/', postData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

//retrieve post
export const fetchPosts = async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

//update post
export const updatePost = async (postId, updatedData) => {
    try {
      const response = await api.put(`/${postId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

//delete post
export const deletePost = async (id) => {
    try {
      await api.delete(`/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
};
*/

export default api;
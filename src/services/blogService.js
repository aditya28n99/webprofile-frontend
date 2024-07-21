// src/services/blogService.js
import axios from 'axios';


const API_URL = process.env.REACT_APP_TEMPLATE_BLOG_URL;

// Fetch All the blogs from the server
export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    throw error;
  }
};

// Fetch saperate blog post from the server by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching the blog post with id ${id}:`, error);
    throw error;
  }
};

// Fetch comments for the blog post
export const getBlogComments = async (id)=>{
  try{
    const response = await axios.get(`${API_URL}/blogs/${id}/comments`);
    return response.data;
  }catch(error){
    throw error;
  }
};
// Delete BlogLikes
export const deletBlogLikes = async (id)=>{
  try{
    const response = await axios.get(`${API_URL}/blogs/${id}/likes`);
    return response.data;
  }catch(error){
    throw error;
  }
};


export const addCommentToBlog = async (id, commentData) => {
  try {
    const response = await axios.post(`${API_URL}/blogs/${id}/comments`, commentData);
    return response.data;
  } catch (error) {
    console.error(`Error adding comment to the blog post with id ${id}:`, error);
    throw error;
  }
};


export const updateCommentOnBlog = async (postId, commentId, commentData) => {
  try {
    await axios.put(`${API_URL}/blogs/${postId}/comments/${commentId}`, commentData);
  } catch (error) {
    console.error(`Error updating comment on the blog post with id ${postId} and comment id ${commentId}:`, error);
    throw error;
  }
};
// frontend/src/pages/blogs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/blogsComponents/BlogCard.jsx';
import styled from 'styled-components';
import Loader from '../components/profileComponents/Loader.jsx';
import ErrorAlert from '../components/profileComponents/ErrorAlert.jsx';

  /* Css for Blogs cards */
  const BlogsPage = styled.div`
  padding: 30px;` 
  
  const BlogsList = styled.div`
  display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Blogs:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <BlogsPage className="Blogs-page">
  <h1>My Blogs</h1>
  {loading ? (
    <Loader/>
  ) : error ? (
    <ErrorAlert error={error}/>
  ) : (
    <BlogsList className="Blogs-list">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </BlogsList>
  )}
</BlogsPage>

  );  
};

export default Blogs;

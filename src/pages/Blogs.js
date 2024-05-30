// frontend/src/pages/blogs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/blogsComponents/BlogCard.jsx';
import styled from 'styled-components';

  /* Css for projects cards */
  const ProjectsPage = styled.div`
  padding: 30px;` 
  
  const ProjectsList = styled.div`
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
        console.error('Error fetching projects:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <ProjectsPage className="projects-page">
  <h1>My Blogs</h1>
  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error fetching project details: {error.message}</p>
  ) : (
    <ProjectsList className="projects-list">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </ProjectsList>
  )}
</ProjectsPage>

  );  
};

export default Blogs;

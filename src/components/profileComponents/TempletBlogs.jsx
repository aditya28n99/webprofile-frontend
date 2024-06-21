import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlogCard from '../blogsComponents/BlogCard.jsx';

const BlogsList = styled.div`
  /* width: 80%; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: center;
`;

const BlogCardWrapper = styled.div`
  /* flex: 1 1 calc(33% - 20px); */
  margin: 10px 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export default function TempletBlogs() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs').then(
      res => {
        setBlogData(res.data);
      }
    ).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <BlogsList>
        {blogData.slice(0, 3).map(blog => (
          <BlogCardWrapper key={blog.id}>
            <BlogCard blog={blog} />
          </BlogCardWrapper>
        ))}
      </BlogsList>
    </>
  );
}

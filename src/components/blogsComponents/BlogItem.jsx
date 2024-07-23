// src/components/BlogItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogItem = ({ blog }) => {
  return (
    <BlogItemLink to={`/blogs/${blog.id}`}>
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogSubTitle>{blog.subtitle}</BlogSubTitle>
      <small>Date Created: {new Date(blog.date).toLocaleDateString()}</small>
    </BlogItemLink>
  );
};

export default BlogItem;

const BlogItemLink = styled(Link)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #333;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #444;
  }
`;

const BlogTitle = styled.h2`
  font-family: "Anton SC", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.2);
`;

const BlogSubTitle = styled.h5`
  color: #ffeb99;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.2);
`;

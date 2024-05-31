// frontend/src/components/blogsComponents/BlogCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../imports/GlobalStyle';


const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 8px 0;
`;

const Date = styled.p`
  color: lightgray;
  font-size: 0.9em;
`;

const Description = styled.p`
  font-size: 1em;
  color: #333;
`;

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <Image src={blog.image_url} alt={blog.title} />
        <Title>{blog.title}</Title>
        <Date>Published on: {blog.date}</Date>
        <Description>{blog.content.substring(0, 100)}...</Description>
      </Card>
    </Link>
  );
};

export default BlogCard;

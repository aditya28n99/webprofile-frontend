// frontend/src/components/blogsComponents/BlogCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 350px;
  height: 400px;
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 8px 0;
  font-family: "Grenze Gotisch", serif;

`;

const PubDate = styled.p`
  color: lightgray;
  font-size: 0.7em;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 1em;
  color: whitesmoke;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
`;

const BlogCard = ({ blog }) => {
  const options = { month: 'short', year: 'numeric' };
const formattedDate = new Date(blog.date).toLocaleDateString('en-US', options);
console.log(formattedDate);
  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        {/* <Image src={blog.image_url} alt={blog.title} /> */}
        <Title>{blog.title}</Title>
        <PubDate>Published on: {formattedDate}</PubDate>
        
        <Description>{blog.content}</Description>
      </Card>
    </Link>
  );
};

export default BlogCard;

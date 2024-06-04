import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Define your styled-components with the provided CSS variables

const CardWrapper = styled.div`
  /* perspective: 1000px; */

`;

const Card = styled.div`
  color: inherit;
  cursor: pointer;
  width: 250px;
  height: 400px;
  border-radius: 8px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-sizing: border-box;
  border: 2px solid wheat;
  border-radius: 12px;
  margin-bottom: 15px;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 12px;
  background-image: linear-gradient(45deg, #ff8a00, #e33b79, #ff8a00);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transform: rotateY(180deg);
  background-image: linear-gradient(45deg, #ff8a00, #e33b79, #ff8a00);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 5px 0;
  font-family: "Grenze Gotisch", serif;
  color: #fff;
`;

const PubDate = styled.p`
  color: lightgray;
  font-size: 0.7em;
  margin: 2px 0;
`;

const Description = styled.p`
  font-size: 1em;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
`;

const BlogImage = styled.img`
  width: 100%;
`

const BlogCard = ({ blog }) => {
  const options = { month: 'short', year: 'numeric' };
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', options);

  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardWrapper>
        <Card>
          <Front>
            <Title>{blog.title}</Title>
            <PubDate>Published on: {formattedDate}</PubDate>
            <Description>{blog.content}</Description>
          </Front>
          <Back>
          <BlogImage src={blog.image_url} alt="Blog" />
            <Title>{blog.title}</Title>
            <PubDate>Published on: {formattedDate}</PubDate>
            <Description>{blog.content}</Description>
          </Back>
        </Card>
      </CardWrapper>
    </Link>
  );
};

export default BlogCard;

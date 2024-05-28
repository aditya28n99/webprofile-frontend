import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Example blog post data
const blogPosts = [
  { id: 1, title: 'Blog Post 1', content: 'Content of Blog Post 1' },
  { id: 2, title: 'Blog Post 2', content: 'Content of Blog Post 2' },
  { id: 3, title: 'Blog Post 3', content: 'Content of Blog Post 3' },
  { id: 4, title: 'Blog Post 4', content: 'Content of Blog Post 4' },
  { id: 5, title: 'Blog Post 5', content: 'Content of Blog Post 5' }
];

const CarouselContainer = styled.div`
  padding: 50px;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
    display: flex;
  transition: transform 0.5s ease;
  margin: 0 -5px; /* Adjust margin to account for card spacing */

`;

// Function to generate a random gradient color
const generateRandomGradient = () => {
  const randomColor1 = Math.floor(Math.random() * 256);
  const randomColor2 = Math.floor(Math.random() * 256);
  const randomColor3 = Math.floor(Math.random() * 256);
  const randomColor4 = Math.floor(Math.random() * 256);

  return `linear-gradient(to right, rgb(${randomColor1},${randomColor2},${randomColor3}), rgb(${randomColor2},${randomColor3},${randomColor4}))`;
};

const Card = styled.div`
  position: relative;
  width: 250px; /* Fixed width for card */
  height: 150px;
  margin: 0 5px; /* Adjust margin to create spacing between cards */
  background: linear-gradient(to right, #ff6b6b, #ffc371);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(1) {
    transform: translate(100%, -30%) skew(-20deg);
    z-index: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.5 ease;
  }

  &:nth-child(2) {
    transform: translate(-50%, 30%) skew(-20deg);
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.5 ease;
  }
`;


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 2 ? 0 : prevIndex + 1
      );
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {[...blogPosts, ...blogPosts].slice(currentIndex, currentIndex + 2).map((post, index) => (
          <Card key={index} style={{ background: generateRandomGradient() }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Card>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;

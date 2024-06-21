import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CarouselContainer = styled.div`
  padding: 10px;
  overflow: scroll;
  scrollbar-width: none;
  height: 250px;
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
`;

const generateRandomGradient = () => {
  const randomColor1 = Math.floor(Math.random() * 256);
  const randomColor2 = Math.floor(Math.random() * 256);
  const randomColor3 = Math.floor(Math.random() * 256);
  const randomColor4 = Math.floor(Math.random() * 256);

  return `linear-gradient(to right, rgb(${randomColor1},${randomColor2},${randomColor3}), rgb(${randomColor2},${randomColor3},${randomColor4}))`;
};

const Card = styled.div`
  width: 250px;
  height: 150px;
  margin: 0 5px;
  background: linear-gradient(to right, #ff6b6b, #ffc371);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  background-size: cover;

  &:hover {
    transform: scale(1.05);
  }
  &:nth-child(1) {
    transform: translate(90%, 10%) skew(-20deg);
    z-index: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.5 ease;
  }
  &:nth-child(2) {
    transform: translate(-90%, 50%) skew(-20deg);
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.5 ease;
  }
  @media (max-width: 468px) {
    &:nth-child(1) {
      transform: translate(23%, 10%) skew(-20deg);
      min-width: 250px;
      overflow: visible;
  }

  &:nth-child(2) {
    transform: translate(-98%, 50%) skew(-20deg);
    min-width: 250px;
    overflow: visible;
  }
  }

`;

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects in carousel:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= projects.length - 2 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const visibleProjects = [];
  if (projects.length > 1) {
    visibleProjects.push(projects[currentIndex]);
    visibleProjects.push(projects[(currentIndex + 1) % projects.length]);
  } else {
    visibleProjects.push(...projects);
  }

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {visibleProjects.map((project) => (
          // backgroundImage: `url(${project.image_url})` or background: generateRandomGradient() style for adding bg images
          <Card key={visibleProjects.id} style={{ backgroundImage: `url(${project.image_url})`? `url(${project.image_url})`: generateRandomGradient() }}>
            {/* <h3>{project.title}</h3>
            <p>{project.description}</p> */}
          </Card>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default ProjectCarousel;

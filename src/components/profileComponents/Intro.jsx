import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from '../projectsComponents/ProjectCarousel';

const IntroSection = styled.section`
  padding: 40px 0;
  color: #fff; /* Set text color to white */
`;

const IntroContent = styled.div`
  max-width: 600px;
  padding: 10px;
`;
const IntroWrapper = styled.div`
  /* max-width: 600px; */
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  justify-content: space-around;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Designation = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8a00;
    border: 2.5px solid #e52e71;
  }
`;

export default function Intro() {
  return (
    <>
      <IntroSection>
        {/* <div className="container">
            <div className="row">
            <div className="col-md-6"> */}
            <IntroWrapper>
              <IntroContent>
                <Name>Hello, I'm Dev</Name>
                <Designation>Passionate MERN Stack Developer</Designation>
                <p>Welcome to my digital playground where I bring ideas to life!</p>
                <StyledButton to="/projects">View My Work</StyledButton>
              </IntroContent>
            <Carousel/>
            </IntroWrapper>
            {/* </div>
          </div>
        </div> */}
      </IntroSection>
    </>
  );
}
  
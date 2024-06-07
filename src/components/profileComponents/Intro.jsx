import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from '../projectsComponents/ProjectCarousel';

// https://codepen.io/noirsociety/pen/ZEwLGXB

const IntroWrapper = styled.div`
  /* max-width: 600px; */
  display: flex;
  flex-wrap: wrap;  
  margin: 10px;
  justify-content: space-around;
  /* border: 2px solid black; */
  `;

  const IntroContent = styled.div`
    max-width: 600px;
    padding: 40px;
    margin: 20px;
    /* border: 2px solid black; */
    border-radius: 10px;
    /* background: rgba(0, 0, 0, 0.1); */

  `;
const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Designation = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StyledButton = styled.div`
width: max-content;
  margin: 30px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8a00;
  }
`;

export default function Intro() {
  return (
    <>
      {/* <IntroSection> */}
        {/* <div className="container">
            <div className="row">
            <div className="col-md-6"> */}
            <IntroWrapper>
              <IntroContent>
                <Name>Hello, I'm Dev</Name>
                <Designation>Passionate MERN Stack Developer</Designation>
                <p>Welcome to my digital playground where I bring ideas to life!</p>
                <StyledButton>

                <StyledLink to="/projects">View My Work</StyledLink>
                </StyledButton>
              </IntroContent>
              <Carousel/>
            </IntroWrapper>
            {/* </div>
          </div>
        </div> */}
      {/* </IntroSection> */}
    </>
  );
}
  
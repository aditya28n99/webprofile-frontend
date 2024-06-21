import React from 'react';
import { styled, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from '../projectsComponents/ProjectCarousel';

const IntroWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  margin: 10px auto;
  /* border: 2px solid black; */
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 468px) {
    width: 100%;
  }
  @media (max-width: 1080px) {
    width: 100%;
    justify-content: center;
  }
`;

const IntroContent = styled.div`
  flex: 1 1 50%;
  max-width: 600px;
  padding: 40px;
  margin: 20px;
  /* border: 2px solid black; */
  border-radius: 10px;
  @media (max-width: 768px) {
    flex: 1 100%;
    margin: 20px 0;
  }
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

const carouselAnimation = keyframes`
0%, 20% { transform: translateZ(-35vw) rotateY(0); }
25%, 45% { transform: translateZ(-35vw) rotateY(-120deg); }
50%, 70% { transform: translateZ(-35vw) rotateY(-240deg); }
75%, 100% { transform: translateZ(-35vw) rotateY(-360deg); }
`;

const IconCards = styled.figure`
position: relative;
width: 100%;
max-width: 380px;
height: 250px;
margin: 70px auto;
color: white;
perspective: 1000px;
`;

const IconCardsContent = styled.div`
position: absolute;
width: 100%;
height: 100%;
transform-origin: center;
transform-style: preserve-3d;
transform: translateZ(-30vw) rotateY(0);
animation: ${carouselAnimation} 10s infinite cubic-bezier(0.5, 1, 0.15, 1) forwards;
`;

const IconCardsItem = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
max-width: 380px;
max-height: 250px;
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;
overflow: hidden;
transform-origin: center;
transition: transform 0.5s ease;

&:nth-child(1) {
  background: #4ffdf1;
  transform: rotateY(0) translateZ(35vw);
}

&:nth-child(2) {
  background: #ff4fdc;
  transform: rotateY(120deg) translateZ(35vw);
}

&:nth-child(3) {
  background: #4d4fff;
  transform: rotateY(240deg) translateZ(35vw);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;


export default function Intro() {
  return (
    <>
      <IntroWrapper>
        <IntroContent>
          <Name>Hello, I'm Aditya Wakale</Name>
          <Designation>Passionate MERN Stack Developer</Designation>
          <p>Welcome to my digital playground where I bring ideas to life!</p>
          <StyledButton>
            <StyledLink to="/projects">View My Work</StyledLink>
          </StyledButton>
        </IntroContent>
        <IconCards >
      <IconCardsContent >
        <IconCardsItem >
          <img src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya_Wakale_excellence_Web_Dev_Fundamentals_Certification_10171_Qr_code___.png" alt="Cert-1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </IconCardsItem>
        <IconCardsItem >
          <img src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya__Wakale_achivement_ReactJS_Certification_10505_Qr_code_.png" alt="Cert-2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </IconCardsItem>
        <IconCardsItem>
         <img src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya__Wakale_achivement_Job_Focussed_Professional_Communication_Certification_16679_Qr_code_.png" alt="Cert-3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </IconCardsItem>
      </IconCardsContent>
    </IconCards>
      </IntroWrapper>
    </>
  );
}

import React from 'react';
import { styled, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <>
      <IntroWrapper>
        <IntroContent>
          <Name>Hello, I'm Aditya Wakale</Name>
          <Designation>Passionate MERN Stack Developer</Designation>
          <IntroPara>Welcome to my digital playground where I bring ideas to life! <br />Turning visions into reality through code and creativity.</IntroPara>
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

const IntroWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
`;

const IntroContent = styled.div`
  flex: 1 1 50%;
  max-width: 600px;
  padding: 0 20px;
  margin: 0;
  margin-top: 20px;
  color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex: 1 100%;
    margin: 0;
    margin-top: 20px;
  }
`;

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.0rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.516);
`;

const Designation = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffeb99;
  text-shadow: 2px 2px 4px rgba(243, 195, 3, 0.3);
`;

const IntroPara = styled.p`
font-size: 1.1rem;
margin-bottom: 2rem;
color: #ffeb99;
font-family: "Shantell Sans", cursive;
`

const StyledButton = styled.div`
  width: max-content;
  margin: 30px 0;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  transition: background-color 0.3s ease;
  font-family: "Shantell Sans", cursive;
  font-size: 1rem;
  &:hover {
    background-color: goldenrod;
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
color: white;
perspective: 1000px;
margin: 50px auto 20px auto;


@media (max-width: 768px) {
  margin: 10px auto 20px auto;
  }
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
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
border-radius: 10px;
overflow: hidden;
transform-origin: center;
transition: transform 0.5s ease;

&:nth-child(1) {
  background: gray;
  transform: rotateY(0) translateZ(35vw);
}

&:nth-child(2) {
  background: gray;
  transform: rotateY(120deg) translateZ(35vw);
}

&:nth-child(3) {
  background: gray;
  transform: rotateY(240deg) translateZ(35vw);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

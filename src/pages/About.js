import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const Education = () => (
  <EducationList>
    <EducationItem delay={1.4}>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>SSC</strong> | Gurudev Samantbhadra Vidya Mandir, Ellora, Aurangabad<br />
        Science | 74.80%
      </EducationText>
    </EducationItem>
    <EducationItem delay={1.5}>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>HSC</strong> | Mahatma Phule Jr. College, Ahemadpur<br />
        Science | 60.15%
      </EducationText>
    </EducationItem>
    <EducationItem delay={1.6}>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>BE</strong> | Late Sau. K.B. Jain College of Engineering, Chandwad<br />
        Mechanical Engineering | 7.79 CGPA (Overall 78%)
      </EducationText>
    </EducationItem>
    <EducationItem delay={1.8}>
      <IconWrapper><FaLaptopCode /></IconWrapper>
      <EducationText>
        <strong>MERN Stack</strong> | Full Stack Web Development Course from EDYODA<br />
        Software Training Institute, Bengaluru
      </EducationText>
    </EducationItem>
    <EducationItem delay={2}>
      <IconWrapper><FaChalkboardTeacher /></IconWrapper>
      <EducationText>
        <strong>Basics of Web</strong> | Basics of Web Development 2.0 with Infosys Springboard<br />
        Infosys Springboard
      </EducationText>
    </EducationItem>
    <EducationItem delay={2.4}>
      <IconWrapper><FaChalkboardTeacher /></IconWrapper>
      <EducationText>
        <strong>Career</strong> | TCS iON Career Edge - Young Professionals<br />
        TCS iON
      </EducationText>
    </EducationItem>
  </EducationList>
);

const About = () => (
  <AboutSection id="about">
    <Title>About Me</Title>
    <Paragraph delay={0.6}>
      Hello there! <br />
      I graduated with Distinction in Mechanical Engineering from Savitribai Phule Pune University.
      Currently, I'm immersed in Full Stack Web Development at EDYODA Software Training Institute, Bengaluru.
      My journey into the tech world began during my engineering years, and now I'm focused on mastering the MERN stack.
    </Paragraph>
    <Paragraph delay={1}>
      I document my projects and technical experiences on my blog, hoping to inspire and assist others on similar paths.
    </Paragraph>
    <Paragraph delay={1.2}>
      On a personal note, I hail from a family of four. I enjoy sketching, playing chess, video games, and outdoor sports like volleyball and tennis.
    </Paragraph>
    <Education />
  </AboutSection>
);

export default About;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  padding: 2rem 0;
  margin: 0;
  border-radius: 8px;
  color: white;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out 0.25s;
  animation-fill-mode: both;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  padding: 0 15px;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.5s ease-out ${props => props.delay}s;
  animation-fill-mode: both;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-out ${props => props.delay}s;
  animation-fill-mode: both;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
`;

const EducationText = styled.div`
  display: flex;
  flex-direction: column;
`;
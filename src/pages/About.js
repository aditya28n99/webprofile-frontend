import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  padding: 2rem;
  margin: 0 auto;
  border-radius: 8px;
  color: white;
  /* background: linear-gradient(135deg, #f0f0f0, #ffffff); */
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: both;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 1s ease-out ${(props) => props.delay}s;
  animation-fill-mode: both;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: both;
`;

const EducationItem = styled.div`
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out ${(props) => props.delay}s;
  animation-fill-mode: both;
`;

const Education = () => (
  <>
    <SubTitle>Education</SubTitle>
    <EducationItem delay={3.1}>
      <strong>SSC</strong> | Gurudev Samantbhadra Vidya Mandir, Ellora, Aurangabad<br />
      Science<br />
      74.80%
    </EducationItem>
    <EducationItem delay={3.5}>
      <strong>HSC</strong> | Mahatma Phule Jr. College, Ahemadpur<br />
      Science<br />
      60.15%
    </EducationItem>
    <EducationItem delay={3.9}>
      <strong>BE</strong> | Late Sau. K.B. Jain College of Engineering, Chandwad<br />
      Mechanical Engineering<br />
      7.79 CGPA (Overall 78%)
    </EducationItem>
    <EducationItem delay={4.3}>
      <strong>MERN Stack</strong> | Full Stack Web Development Course from EDYODA.<br />
      Software Training Institute, Bengaluru
    </EducationItem>
    <EducationItem delay={4.7}>
      <strong>Basics of Web</strong> | Basics of Web Development 2.0 with Infosys Springboard.<br />
      Infosys Springboard
    </EducationItem>
    <EducationItem delay={5.1}>
      <strong>Career</strong> | TCS iON Career Edge - Young Professionals.<br />
      TCS iON
    </EducationItem>
  </>
);

const About = () => {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <Paragraph delay={0.7}>
        Hello there! <br />
        I graduated with Distinction in Mechanical Engineering from Savitribai Phule Pune University.
        My journey into the tech world began during my engineering years, where I discovered a knack for reasoning and innovative thinking. Currently, I'm immersed in Full Stack Web Development at EDYODA Software Training Institute, Bengaluru.
        I'm proficient in technologies like Git, React, Bootstrap, JavaScript, and Core Java. Additionally, I'm exploring Node.js, Express.js, and MongoDB, with plans to delve into Spring Boot, AWS, and Java Backend Development.
        I document my projects and technical experiences on my blog, hoping to inspire and assist others on similar paths.
      </Paragraph>
      <Paragraph delay={2.3}>
        On a personal note, I hail from a family of four. I enjoy sketching, playing chess, video games, and outdoor sports like volleyball and tennis.
      </Paragraph>
      <Paragraph delay={2.7}>
        My dedication and eagerness to learn constantly drive me to become an exceptional full-stack developer. Thank you for reading!
      </Paragraph>
      <Education />
    </AboutSection>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const Education = () => (
  <EducationList>
    <EducationItem>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>SSC</strong> | Gurudev Samantbhadra Vidya Mandir, Ellora, Aurangabad<br />
        Science | 74.80%
      </EducationText>
    </EducationItem>
    <EducationItem>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>HSC</strong> | Mahatma Phule Jr. College, Ahemadpur<br />
        Science | 60.15%
      </EducationText>
    </EducationItem>
    <EducationItem>
      <IconWrapper><FaGraduationCap /></IconWrapper>
      <EducationText>
        <strong>BE</strong> | Late Sau. K.B. Jain College of Engineering, Chandwad<br />
        Mechanical Engineering | 7.79 CGPA (Overall 78%)
      </EducationText>
    </EducationItem>
    <EducationItem>
      <IconWrapper><FaLaptopCode /></IconWrapper>
      <EducationText>
        <strong>MERN Stack</strong> | Full Stack Web Development Course from EDYODA<br />
        Software Training Institute, Bengaluru
      </EducationText>
    </EducationItem>
    <EducationItem>
      <IconWrapper><FaChalkboardTeacher /></IconWrapper>
      <EducationText>
        <strong>Basics of Web</strong> | Basics of Web Development 2.0 with Infosys Springboard<br />
        Infosys Springboard
      </EducationText>
    </EducationItem>
    <EducationItem>
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
    <Paragraph>
      Hello there! <br />
      I graduated with Distinction in Mechanical Engineering from Savitribai Phule Pune University. My journey into the tech world began during my engineering studies, and I’ve since transitioned into Full Stack Web Development. Currently, I’m refining my expertise in the MERN stack and other modern technologies through intensive training at EDYODA Software Training Institute in Bengaluru. Over the course of numerous projects, I’ve developed a strong proficiency in crafting dynamic, high-quality web applications.
    </Paragraph>
    <Paragraph>
      Alongside my technical training, I actively document my projects and technical experiences on my blog. I aim to share insights, tutorials, and practical advice to inspire and assist others in the tech community. My blog serves as a platform to showcase my work, provide value to fellow developers, and contribute to the ever-evolving field of web development.
    </Paragraph>
    <Paragraph>
      On a personal note, I come from a family of four and have a range of interests outside of technology. I enjoy sketching as a creative outlet, play chess to enhance my strategic thinking, and unwind with video games. Staying active is important to me, so I regularly participate in outdoor sports like volleyball and tennis, which help me maintain a balanced and energetic lifestyle.
    </Paragraph>

    <Education />
  </AboutSection>
);

export default About;

const AboutSection = styled.section`
  padding: 1.2rem 0;
  margin: 0;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Gideon Roman', serif;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  padding: 0 20px;
  line-height: 1.5;
  margin-bottom: 1.1rem;
  @media (max-width: 768px) {
    text-align: justify;
  }
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
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: gold;
`;

const EducationText = styled.div`
  display: flex;
  flex-direction: column;
`;
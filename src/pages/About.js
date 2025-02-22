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
      I graduated with Distinction in Mechanical Engineering from Savitribai Phule Pune University. My passion for technology led me to transition into Full Stack Web Development, where I have gained expertise in building scalable and high-performing applications. Over time, I have worked with <strong className='text-yellow'>React.js, Next.js, Node.js, TypeScript, JavaScript, Zod, ZuStand, Tailwind, MIUI, Electron.js, and Flutter</strong> to create dynamic and efficient web, mobile and desktop applications.
    </Paragraph>
    <Paragraph>
      Currently, I am working as a Jr. Software Developer at <strong className='text-blue'>Aventisia</strong>, where I focus on building robust software solutions. Previously, I completed a Software Developer Internship at <strong className='text-blue'>Engineer's Cradle</strong>, where I contributed to a reusable UI component library using <strong className='text-yellow'>Next.js, TypeScript, and Storybook</strong>. I also worked as a <strong className='text-blue'>Freelance Developer at 560mTEK</strong>, handling multiple client projects, including web platforms, mobile applications, and desktop software.
    </Paragraph>
    <Paragraph>
      My journey has been a blend of learning and practical implementation. I actively document my projects and technical experiences on my blog, sharing tutorials and insights to help fellow developers. My goal is to continue enhancing my skills and contribute to innovative tech solutions.
    </Paragraph>
    <Paragraph>
      Outside of coding, I have a keen interest in sketching, playing chess, and engaging in outdoor sports like volleyball and tennis. I believe in maintaining a balance between work and personal growth, always striving to learn and evolve.
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
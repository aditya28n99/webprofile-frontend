import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';

const SkillsContainer = styled.div`
  padding: 20px;
  background-color: #282c34;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

function SkillsAndTools() {
  return (
    <SkillsContainer>
      <SkillsTitle>Skills and Tools</SkillsTitle>
      <SkillsGrid>
        <SkillCard>
          <SkillIcon><FaReact /></SkillIcon>
          <SkillName>React</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><DiJavascript1 /></SkillIcon>
          <SkillName>JavaScript</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><FaNodeJs /></SkillIcon>
          <SkillName>Node.js</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><SiHtml5 /></SkillIcon>
          <SkillName>HTML5</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><SiCss3 /></SkillIcon>
          <SkillName>CSS3</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><SiBootstrap /></SkillIcon>
          <SkillName>Bootstrap</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><DiMongodb /></SkillIcon>
          <SkillName>MongoDB</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><FaDatabase /></SkillIcon>
          <SkillName>SQL</SkillName>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default SkillsAndTools;

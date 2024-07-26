// frontend/src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 20px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: 10px solid #ddd;
  border-radius: 8px;
`;

const ProjectDetails = styled.div`
  text-align: left;
  padding-top: 10px;
`;

// const ProjectTitle = styled.h3`
//   margin: 0 0 8px;
//   font-size: 1.5em;
// `;

const ProjectTech = styled.p`
  font-size: 0.9em;
  margin: 0;
`;

const ProjectLinksContainer = styled.div`
  margin: 0px 0;
`;

const ProjectLink = styled(Link)`
  margin-right: 25px;
  text-decoration: none;
  font-weight: 600;
  text-shadow: 0px 0px 5px black;
`;

const ProjectDate = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

// Function to format the date
const formatDate = (isoString) => {
  const date = new Date(isoString);

  // const day = String(date.getDate()).padStart(2, '0');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const year = String(date.getFullYear());
  // const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month} ${year}`;
};

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <ProjectImg src={project.image_url} alt={project.title} />
      <ProjectDetails>
        {/* <ProjectTitle>{project.title}</ProjectTitle> */}
        <ProjectDate><strong>Created at:</strong> {formatDate(project.created_at)}</ProjectDate>
        <ProjectTech><strong>Technologies:</strong> {project.technologies}</ProjectTech>
        <ProjectLinksContainer>
          {project.github_link && <ProjectLink to={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>}
          {project.live_link && <ProjectLink to={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLink>}
        </ProjectLinksContainer>
      </ProjectDetails>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

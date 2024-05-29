// frontend/src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectCardContainer = styled.div`
  border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    max-width: 400px;  
`
  
const ProjectImg = styled.img`
    width: 100%;
    max-height: 180px;
    border-radius: 8px; 
`
const ProjectDetails = styled.div`
padding: 16px;
`
const ProjectLinks = styled(Link)`
    margin-right: 8px;
    text-decoration: none;
    color: #007bff;
`
  

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer className="project">
      <ProjectImg src={project.image_url} alt={project.title} />
      <ProjectDetails className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies}</p>
        <p><strong>Createtd at:</strong> {project.created_at}</p>
        <div className="project-links">
          {project.github_link && <ProjectLinks to={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</ProjectLinks>}
          {project.live_link && <ProjectLinks to={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLinks>}
        </div>
        <button><Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>Read More</Link></button>
      </ProjectDetails>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

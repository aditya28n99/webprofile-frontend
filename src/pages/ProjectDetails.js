import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProjectDetailsPage = styled.div`
  padding: 30px;
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log(`Fetching project with id: ${id}`);
        const response = await axios.get(`http://localhost:5000/projects/${id}`);
        console.log('Fetched project data:', response.data);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching project details: {error.message}</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <ProjectDetailsPage>
      <h1>{project.title}</h1>
      <img src={project.image_url} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies}</p>
      <div className="project-links">
        {project.github_link && (
          <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.live_link && (
          <a href={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
      </div>
    </ProjectDetailsPage>
  );
};

export default ProjectDetails;

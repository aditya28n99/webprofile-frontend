import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../imports/fonts.css';
import styled from 'styled-components';
import { getProjectById } from '../services/projectServices';
import Loader from '../components/profileComponents/Loader';
import ErrorAlert from '../components/profileComponents/ErrorAlert';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // console.log(`Fetching project with id: ${id}`);
        const data = await getProjectById(id);
        // console.log('Fetched project data:', data);
        setProject(data);
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
    return <Loader></Loader>;
  }

  if (error) {
    return <ErrorAlert error={error}/>
  }

  if (!project) {
    return <p className='text-white'>Project not found! Please Try Again.</p>;
  }

  return (
    <>
    <ProjectDetailsPage>
      <ProjectImageContainer>
        <img src={project.image_url} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
        </ProjectImageContainer>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <p className='text-light'><strong>Technologies:</strong> {project.technologies}</p>
      <div className="list-group">
        {project.github_link && (
          <a className='link-warning text-decoration-none list-group-item-action active' href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.live_link && (
          <a className='link-warning text-decoration-none list-group-item-action active' href={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
      </div>
    </ProjectDetailsPage>
    </>
  );
};

export default ProjectDetails;

const ProjectDetailsPage = styled.div`
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;  
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  `;

const ProjectImageContainer = styled.div`
  width: 70%;
  border-radius: 10px 10px 0 0;
  margin: 10px auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const ProjectTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
  color: aliceblue;
`;

const ProjectSubTitle = styled.h4`
  margin-top: 20px;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
  color: aliceblue;
`;

const ProjectDescription = styled.p`
  margin: 20px;
  font-size: 1.2em;
  line-height: 1.6;
  font-family: "Sedan SC", serif;
  color: aliceblue;
`;
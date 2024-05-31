// frontend/src/pages/Projects.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Project from '../components/projectsComponents/ProjectCard.jsx';
// import styled from 'styled-components';

import styled from "styled-components";

//   /* Css for projects cards */
//   const ProjectsPage = styled.div`
//   padding: 30px;` 
  
//   const ProjectsList = styled.div`
//   display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//   `

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/projects')
//       .then(response => {
//         setProjects(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching projects:', error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <ProjectsPage className="projects-page">
//   <h1>My Projects</h1>
//   {loading ? (
//     <p>Loading...</p>
//   ) : error ? (
//     <p>Error fetching project details: {error.message}</p>
//   ) : (
//     <ProjectsList className="projects-list">
//       {projects.map(project => (
//         <Project key={project.id} project={project} />
//       ))}
//     </ProjectsList>
//   )}
// </ProjectsPage>

//   );  
const Hel = styled.div`
height: 900px;
border: 2px solid red;
`
const Projects = () => {
  return(
<>
<Hel>
  Hello
</Hel>
</>
  );
};

export default Projects;

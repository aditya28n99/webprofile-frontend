import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import ProjectCard from '../components/projectsComponents/ProjectCard';
import {PiArrowFatLinesRightLight, PiArrowFatLinesLeftLight} from '../imports/Icons'


const ProjectsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  margin: 0 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Background = styled.div`
  background-image: url(${props => props.image});
  filter: blur(8px);
  background-size: cover;
  position: absolute;
  top: 85px;
  width: 95%;
  height: 80vh;
  z-index: -1;
`;

const ProjectInfo = styled.div`
  width: 60%;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CarouselContainer = styled.div`
  width: 30%;
  max-width: 600px;
  margin: 20px auto;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CustomCarousel = styled(Carousel)`
  .control-arrow {
    display: none;
  }
`;

const CarouselArrows = styled.div`
  
  display: flex;
  justify-content: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    margin: 0 10px;
    color: white;
    &:hover{
      
    }
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
        setSelectedProject(response.data[0]); // Select the first project by default
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleProjectChange = (index) => {
    setSelectedProject(projects[index]);
    setCarouselIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (carouselIndex + 1) % projects.length;
    handleProjectChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (carouselIndex - 1 + projects.length) % projects.length;
    handleProjectChange(newIndex);
  };

  return (
    <>
      <ProjectsPage>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching project details: {error.message}</p>
        ) : (
          <>
            {selectedProject && (
              <>
                <Background image={selectedProject.image_url} />
                <ProjectInfo>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  {/* Add other fields as necessary */}
                </ProjectInfo>
              </>
            )}
            <CarouselContainer>
              <CustomCarousel
                selectedItem={carouselIndex}
                onChange={handleProjectChange}
                interval={3000}
                autoPlay
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
              >
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </CustomCarousel>
              <CarouselArrows>
                <button onClick={prevSlide}><PiArrowFatLinesLeftLight/></button>
                
                <button onClick={nextSlide}><PiArrowFatLinesRightLight/></button>
              </CarouselArrows>
            </CarouselContainer>
          </>
        )}
      </ProjectsPage>
    </>
  );
};

export default Projects;

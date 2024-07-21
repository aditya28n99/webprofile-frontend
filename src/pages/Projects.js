import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Loader from '../components/profileComponents/Loader.jsx';
import styled from 'styled-components';
import ProjectCard from '../components/projectsComponents/ProjectCard';
import {PiArrowFatLinesRightLight, PiArrowFatLinesLeftLight, FaSearch} from '../imports/Icons'
import { getProjects } from '../services/projectServices.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
    // console.log(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // console.log(event.target.value);
  };

  const filteredProjects = projects.filter(project => {
    return (
      (filterCategory === '' || project.categories === filterCategory) &&
      (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }).sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(b.date) - new Date(selectedProject.created_at).toLocaleDateString();
    } else if (sortOption === 'a-z') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
        setSelectedProject(data[0]); // Select the first project by default
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchProjects();
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
          <Loader></Loader>
        ) : error ? (
          <p className='text-secondary'>Error fetching project details: {error.message}</p>
        ) : (
          <>
            {selectedProject && (
              <>
                <Background image={selectedProject.image_url} />
                <ProjectInfo>
                  <h2>{selectedProject.title}</h2>
                  <h2>{selectedProject.subtitle}</h2>
                  <h6>{new Date(selectedProject.created_at).toLocaleDateString()}</h6>
                  <p>{selectedProject.description}</p>
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
        
        <ProjectsList>
        <FilterBar>
            <SearchInput>
              <FaSearch color="black" />
              <Input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
              />
            </SearchInput>
            <Select value={filterCategory} onChange={handleFilterChange}>
              <option value="">All Categories</option>
              <option value="basic">General Projects</option>
              <option value="react">React.js Projects</option>
              <option value="flutter">Flutter Applications</option>
              <option value="android">Android Applications</option>
              <option value="native">React Native Projects</option>
            </Select>
            <Select value={sortOption} onChange={handleSortChange}>
              <option value="">Sort By</option>
              <option value='date'>Date</option>
              <option value="a-z">A-Z</option>
            </Select>
          </FilterBar>
            {filteredProjects.map(project => (
              <ProjectItem key={project.id} to={`/projects/${project.id}`}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
                <p>{project.description.substring(0, 350)} <strong>Read More</strong></p>
                <p>{project.cadegories}</p>
                <small>Date Created: {new Date(project.created_at).toLocaleDateString()}</small>
              </ProjectItem>
            ))}
          </ProjectsList>
      </ProjectsPage>
    </>
  );
};

export default Projects;

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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 98%;
  margin-top: 40px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
  justify-self: left;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const ProjectItem = styled(Link)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #333;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #444;
  }
`;

const ProjectTitle = styled.h2`
  font-family: "Anton SC", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.2);
`;
const ProjectSubTitle = styled.h5`
  color: #ffeb99;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.2);
`;

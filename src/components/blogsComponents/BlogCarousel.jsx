import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../profileComponents/ErrorAlert';
import { getAllBlogs } from '../../services/blogService';

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogsData = async () =>{
      try{
        const APIData = await getAllBlogs();
        const blogsData = APIData.map((blog)=>({
          id: blog.id,
          title: blog.title,
          description: blog.content.substring(0, 4000)
        }))
        setBlogs(blogsData);
      }catch(error){
        console.log('error '+ error);
        setError('Error loading blog data');
      }
    }
    fetchBlogsData();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <BlogCarouselContainer>
      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <CustomCarousel activeIndex={index} onSelect={handleSelect} interval={3000} indicators={false} controls={false}>
          {blogs.map((blog) => (
            <Carousel.Item key={blog.id}>
              <BlogItem>
                <Title>{blog.title}</Title>
                <Para>{blog.description}</Para>
                <CarouselButton variant="outline-light" size="sm" onClick={() => handleReadMore(blog.id)}>
                  Read More
                </CarouselButton>
              </BlogItem>
            </Carousel.Item>
          ))}
        </CustomCarousel>
      )}
    </BlogCarouselContainer>
  );
};

export default BlogCarousel;

const BlogCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;

const BlogItem = styled.div`
  padding: 0 15px;
  min-height: 300px;
`;

const Title = styled.h1`
  font-family: "Anton SC", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.516);
  &:hover {

}
`;

const Para = styled.p`
  color: whitesmoke;
  font-family: "Gideon Roman", serif;
  font-size: 18px;
  font-weight: 500;
`;

const CarouselButton = styled(Button)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  transition: background-color 0.3s ease;
  font-family: "Shantell Sans", cursive;
  font-size: 1rem;
  &:hover {
    background-color: goldenrod;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CustomCarousel = styled(Carousel)`
  .carousel-inner {
    max-height: 400px;
    animation: ${fadeIn} 1s ease-in-out;
  }

  .carousel-indicators {
    bottom: 50px;
  }

  @media (max-width: 768px) {
    .carousel-indicators {
      display: none;
    }
  }
`;
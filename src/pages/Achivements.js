import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../components/profileComponents/ErrorAlert';

const BlogCarouselContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
`;

const BlogItem = styled.div`
  padding: 20px;
  text-align: center;
  color: #333;
  min-height: 300px;
  font-family: 'Arial', sans-serif;
`;

const CarouselButton = styled(Button)`
  margin-top: 10px;
  font-family: 'Arial', sans-serif;
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

  @media (max-width: 768px) {
    display: none;
  }
  }
`;



const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        const blogData = response.data.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.content.substring(0, 100) + '...', // Limit description to 100 characters
        }));
        setBlogs(blogData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('error to load blog data');
      });
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
        <ErrorAlert error={error}/>
      ) : (
        <CustomCarousel activeIndex={index} onSelect={handleSelect} interval={3000} indicators={true} controls={false}>
          {blogs.map((blog) => (
            <Carousel.Item key={blog.id}>
              <BlogItem>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <CarouselButton variant="outline-light"  size="sm" onClick={() => handleReadMore(blog.id)}>
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

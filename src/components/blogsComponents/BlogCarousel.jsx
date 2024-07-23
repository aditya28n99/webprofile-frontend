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
    const fetchBlogsData = async () => {
      try {
        const APIData = await getAllBlogs();
        const blogsData = APIData.map((blog) => ({
          id: blog.id,
          title: blog.title,
          subtitle: blog.subtitle,
          imageUrl: blog.image_url,
          content: blog.content.substring(0, 190),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.log('error ' + error);
        setError('Error loading blog data');
      }
    };
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
                <ImageContainer>
                  <BlogImage src={blog.imageUrl} alt={blog.title} />
                </ImageContainer>
                <ContentContainer>
                  <Title>{blog.title}</Title>
                  <Subtitle>{blog.subtitle}</Subtitle>
                  <Para dangerouslySetInnerHTML={{ __html: blog.content }}></Para>
                  <Date>{blog.date}</Date>
                  <CarouselButton variant="outline-light" size="sm" onClick={() => handleReadMore(blog.id)}>
                    Read More
                  </CarouselButton>
                </ContentContainer>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  min-height: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;

  @media (max-width: 868px) {
    display: none;
    border: 2px solid red;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 250px; /* Set a max height for better control */
  object-fit: cover; /* Ensures the image covers the container without distortion */
  display: block;
  border-radius: 10px;
  margin-bottom: 20px; /* Add some space below the image */
`;


const ContentContainer = styled.div`
  flex: 2;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: 'Anton SC', sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 4px rgba(243, 203, 3, 0.516);
`;

const Subtitle = styled.h2`
  font-family: 'Shantell Sans', cursive;
  color: goldenrod;
  font-size: 1.2rem;
`;

const Para = styled.p`
  color: whitesmoke;
  font-family: 'Gideon Roman', serif;
  font-size: 18px;
  font-weight: 500;
`;

const Date = styled.p`
  color: lightgray;
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
`;

const CarouselButton = styled(Button)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  transition: background-color 0.3s ease;
  font-family: 'Shantell Sans', cursive;
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

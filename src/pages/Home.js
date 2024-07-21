import React from 'react'
import { styled } from 'styled-components';
import Intro from '../components/profileComponents/Intro'
import BlogCarousel from '../components/blogsComponents/BlogCarousel'
import About from './About'
import Contact from '../components/profileComponents/contact';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  margin: auto;
  box-sizing: border-box;
  @media (max-width: 468px) {
    width: 100%;
  }
  @media (max-width: 1080px) {
    width: 100%;
    justify-content: center;
  }
`;
export default function Home() {
  return (
    <>
    <Wrapper>
    <Intro></Intro>
    <BlogCarousel></BlogCarousel>
    <About></About>
    <Contact></Contact>
    </Wrapper>
    </>
  )
}

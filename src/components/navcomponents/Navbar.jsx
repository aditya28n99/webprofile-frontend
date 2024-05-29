import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsFillMenuButtonFill, IoLogoLinkedin, FaEnvelopesBulk, FiCodepen, FaGithubAlt } from '../../imports/Icons'

import styled from "styled-components";

const Navwrapper = styled(Navbar)`
width: 80%;
margin: auto;
margin-top: 10px;
border-radius: 20px;
box-shadow: 0px 0px 50px 15px lightblue;
position: sticky;
top: 10px;
z-index: 3;
`
const CustomNavbarToggle = styled(Navbar.Toggle)`
border: none;
background-color: transparent;
justify-self: end;
&:focus {
    outline: none;
    box-shadow: none;
    color: black;
}
`;
const NavContainer = styled(Container)`
  /* border: 1px solid red; */
`
const NavlinkWrapper = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; 
  & > * {
    font-size: 20px;
    padding: 10px;
  }
  @media screen and (max-width: 992px) {
  position: absolute;
  left: 10;
  top: 0;
}
`
const NavLink = styled(Link)`
  &&{
    text-decoration: none;
    color: gray !important;
    padding: 10px;
  }
  &&:hover, &&:focus{
    color: black !important;
    text-shadow: 0.1px 0.1px 1px black;
  }
`
export default function Navbarcomp() {

  return (
    <Navwrapper expand="lg" className="bg-body-tertiary">
      <NavContainer>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <CustomNavbarToggle aria-controls="basic-navbar-nav"><BsFillMenuButtonFill />
        </CustomNavbarToggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/achivements">Achivements</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavlinkWrapper>
          <NavLink to="mailto:adityawakale208@gmail.com"><FaEnvelopesBulk /></NavLink>
          <NavLink to="https://www.linkedin.com/in/aditya-wakale-959368248" target="_blank"><IoLogoLinkedin /></NavLink>
          <NavLink to="https://codepen.io/Swamfire" target="_blank"><FiCodepen /></NavLink>
          <NavLink to="https://github.com/aditya28n99?tab=repositories" target="_blank"><FaGithubAlt /></NavLink>
        </NavlinkWrapper>
      </NavContainer>
    </Navwrapper>
  )
}


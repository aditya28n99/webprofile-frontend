import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsFillMenuButtonFill, IoLogoLinkedin, FaEnvelopesBulk, FiCodepen, FaGithubAlt } from '../../imports/Icons';

import '../../imports/fonts.css'
import styled from 'styled-components';

const NavWrapper = styled(Navbar)`
  width: 80%;
  margin: auto;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 50px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 10px;
  z-index: 3;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(10px);
`;

const CustomNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
    box-shadow: none;
    color: black;
  }
`;

const NavContainer = styled(Container)``;

const NavLinkWrapper = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; 
  & > * {
    font-size: 20px;
    padding: 10px;
  }
  @media screen and (max-width: 992px) {
    position: absolute;
    left: 10px;
    top: 0;
  }
`;

const CustomNavLink = styled(Link)`
  text-decoration: none;
  color: gray !important;
  padding: 10px;
  font-family: "Averia Serif Libre", serif;

 
  &.active {
    color: black !important;
    /* font-weight: bold; */
  }
`;

export default function NavbarComp() {
  const location = useLocation();

  return (
    <NavWrapper expand="lg">
      <NavContainer>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <CustomNavbarToggle aria-controls="basic-navbar-nav">
          <BsFillMenuButtonFill />
        </CustomNavbarToggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</CustomNavLink>
            <CustomNavLink to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</CustomNavLink>
            <CustomNavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</CustomNavLink>
            <CustomNavLink to="/achievements" className={location.pathname === '/achievements' ? 'active' : ''}>Achievements</CustomNavLink>
            <CustomNavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</CustomNavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLinkWrapper>
          <CustomNavLink to="mailto:adityawakale208@gmail.com">
            <FaEnvelopesBulk />
          </CustomNavLink>
          <CustomNavLink to="https://www.linkedin.com/in/aditya-wakale-959368248" target="_blank">
            <IoLogoLinkedin />
          </CustomNavLink>
          <CustomNavLink to="https://codepen.io/Swamfire" target="_blank">
            <FiCodepen />
          </CustomNavLink>
          <CustomNavLink to="https://github.com/aditya28n99?tab=repositories" target="_blank">
            <FaGithubAlt />
          </CustomNavLink>
        </NavLinkWrapper>
      </NavContainer>
    </NavWrapper>
  );
}

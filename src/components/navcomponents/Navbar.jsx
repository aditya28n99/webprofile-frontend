import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillMenuButtonFill, IoLogoLinkedin, FaEnvelopesBulk, FiCodepen, FaGithubAlt } from '../../imports/Icons';
import '../../imports/fonts.css'
import styled from 'styled-components';

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
            <CustomNavLink to='/' className={window.location.pathname === '#about' ? 'active' : ''} onClick={() => {
              window.location.href = '#about';
            }} >About</CustomNavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLinkWrapper>
          <CustomNavLink to="mailto:adityawakale208@gmail.com">
            <FaEnvelopesBulk className='icon' />
          </CustomNavLink>
          <CustomNavLink to="https://github.com/aditya28n99?tab=repositories" target="_blank">
            <FaGithubAlt className='icon' />
          </CustomNavLink>
          <CustomNavLink to="https://www.linkedin.com/in/aditya-wakale-959368248" target="_blank">
            <IoLogoLinkedin className='icon' />
          </CustomNavLink>
          <CustomNavLink to="https://codepen.io/Swamfire" target="_blank">
            <FiCodepen className='icon' />
          </CustomNavLink>
        </NavLinkWrapper>
      </NavContainer>
    </NavWrapper>
  );
}

const NavWrapper = styled(Navbar)`
  width: 90%;
  margin: auto;
  margin-top: 10px;
  border-radius: 20px;
  position: sticky;
  top: 10px;
  z-index: 3;
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
`;

const CustomNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
    box-shadow: none;
    color: white; /* Changed to white for better visibility */
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
  color: #f0f0f0 !important; /* Adjusted to a lighter shade for better contrast */
  padding: 10px;
  font-family: 'Poppins', sans-serif;

  &.active {
    color: #ffd700 !important; /* Gold color for active links to stand out */
  }

  &:hover {
    color: #ffd700 !important; /* Same gold color on hover for consistency */
  }
`;
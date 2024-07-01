import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin: 20px 0;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <FooterText>&copy; {new Date().getFullYear()} Aditya Wakale. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;

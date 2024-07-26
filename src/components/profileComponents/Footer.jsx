import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


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
        <SocialLink href="https://www.facebook.com/people/Aditya-Wakale/pfbid02VCevat2TMfYFuQvuTJxqpzqJquM23WxvNH9QHfagvzwqgC4DLsoHsoeD11LrLb3kl/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://x.com/itzzz_ad" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/swam_fire/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/aditya-wakale-959368248" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <FooterText>&copy; {new Date().getFullYear()} Aditya Wakale. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;

import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaDownload, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiStyledcomponents, SiFlutter, SiReact, SiTailwindcss } from 'react-icons/si';
import cv from '../../imports/Ad_Resume@overleaf.pdf';

const FormContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  /* background-color: #282c34; */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

const Section = styled.div`
  flex: 1 1 45%;
  padding: 20px;
`;

const ResumeSection = styled.div`
  margin-bottom: 20px;
`;

const SkillToolSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTool = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  color: #000000;
  padding: 10px;
  border-radius: 5px;
  flex: 1 1 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
background-color: goldenrod;
  border: none;
  &:hover {
    background-color: #ff7043;
  }
`;

function ContactForm() {
  const [formType, setFormType] = useState('Hiring');
  const formRef = useRef();

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const hiringTempID = process.env.REACT_APP_HIRING_TEMP_ID;
  const collabTempID = process.env.REACT_APP_COLLAB_TEMP_ID;
  const apiKey = process.env.REACT_APP_API_KEY;


  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = formType === 'Hiring' ? serviceID : serviceID;
    const templateId = formType === 'Hiring' ? hiringTempID : collabTempID;

    emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        alert("Thank you for your message.");
        clearData();
      }, (error) => {
        console.log(error.text);
        alert("Sorry, your email could not be sent. Please try again later.");
        clearData();
      });
  };

  const clearData = () => {
    Array.from(formRef.current.elements).forEach(element => {
      if (element.type === 'text' || element.type === 'email' || element.type === 'textarea') {
        element.value = '';
      }
    });
  };

  return (
    <FormContainer>
      <Section>
        <div className='contact-bg'>
          <h1>Let's Chat.</h1>
          <h1>Tell me about your projects.</h1>
          <p className='my-4'>Let's create something together. I enjoy working with dedicated creatives.</p>
  <h6>You can also contact on <Link to='mailto:adityawakale208@gmail.com' className='text-warning mx-2' >{' '}adityawakale208@gmail.com</Link></h6>
        </div>
        <div className='form-bg'>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Contacting for</Form.Label>
                <Form.Select id='selects' onChange={(e) => setFormType(e.target.value)} defaultValue="Hiring">
                  <option value="Hiring">Hiring</option>
                  <option value="Collaboration">Working with me..</option>
                </Form.Select>
              </Form.Group>
            </Row>

            {formType === 'Hiring' && (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Recruiter Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email" required />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridIndustry">
                    <Form.Label>Industry Name</Form.Label>
                    <Form.Control type='text' name='industry' required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridJobRoll">
                    <Form.Label>Job Roll & Responsibility</Form.Label>
                    <Form.Control type='text' name='jobroll' required />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridJobDescription">
                  <Form.Label>Job Description</Form.Label>
                  <textarea className="form-control" name='jd' placeholder='Message' rows="4"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridApplyLink">
                  <Form.Label>Apply Link</Form.Label>
                  <Form.Control type='text' name='link' />
                </Form.Group>
              </>
            )}

            {formType === 'Collaboration' && (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='first_name' placeholder="Enter Your First Name" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name='last_name' placeholder="Enter Your Last Name" required />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' name='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type='phone' name='phone' placeholder="Enter Phone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type='text' name='subject' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMoreAboutYou">
                  <Form.Label>More about You</Form.Label>
                  <textarea className="form-control" name='about_message' placeholder='Message' rows="2"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <textarea className="form-control" name='message' placeholder='Message' rows="4"></textarea>
                </Form.Group>
              </>
            )}
            <StyledButton type="submit">
              Submit
            </StyledButton>
          </Form>
        </div>
      </Section>
      <Section>
        <ResumeSection>
          <h2>Downloadable Resume</h2>
          <p>Get a detailed overview of my professional experience and skills.</p>
          <StyledButton href={cv} download>
            <FaDownload /> Download Resume
          </StyledButton>
        </ResumeSection>
        <SkillToolSection>
          <SkillTool><FaReact /> React</SkillTool>
          <SkillTool><FaNodeJs /> Node.js</SkillTool>
          <SkillTool><FaDatabase /> MySQL</SkillTool>
          <SkillTool><FaDatabase /> MongoDB</SkillTool>
          <SkillTool><SiStyledcomponents /> styledcomponents</SkillTool>
          <SkillTool><SiFlutter /> Flutter</SkillTool>
          <SkillTool><SiReact /> Native</SkillTool>
          <SkillTool><SiTailwindcss /> Tailwind</SkillTool>
        </SkillToolSection>
      </Section>
    </FormContainer>
  );
}

export default ContactForm;
    
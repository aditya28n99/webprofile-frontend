import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 
import { Link } from 'react-router-dom';

function ContactForm() {
    const [formType, setFormType] = useState('Hiring');
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = formType === 'Hiring' ? 'service_43dcufl' : 'service_43dcufl';
        const templateId = formType === 'Hiring' ? 'template_66pdykl' : 'template_okyy8e9';

        emailjs.sendForm(serviceId, templateId, formRef.current, 'At5r9QyxKu1MAIlqB')
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
        <>
            <Container>
                <div className='contact-bg'>
                    <h1>Let's Chat.</h1>
                    <h1>Tell me about your projects.</h1>
                    <p className='col-white my-4'>Let's create something together.. I enjoy working with dedicated creatives.</p>
                    <h6 className='col-white'>You can also find me on <Link to='mailto:adityawakale208@gmail.com' className='mx-2 col-yellow'>{' '}adityawakale208@gmail.com</Link></h6>
                </div>
                <div className='col-white form-bg'>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default ContactForm;

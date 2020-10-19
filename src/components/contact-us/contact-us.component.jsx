import React from 'react';
import './contact-us.styles.scss';
import {Container,Row,Col} from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.component';
export const ContactUs = () => (
    <Container fluid className="contact-us p-3">
    <form>

    <Row>
    <Col md={6}>
    <input type="text" placeholder="Name*"></input>
    </Col>
    <Col md={6}>
    <input type="email" placeholder="Email*"></input>
    </Col>
    </Row>
    <Row xs={12}>
    <input type="text" placeholder="Subject"></input>
    </Row>
    <Row>
    <textarea type="text" placeholder="Message"></textarea>
    </Row>
    <Row>
    <Col md={12}>
    <CustomButton>Submit</CustomButton>
    </Col>
    </Row>
    </form>
    </Container>
    
);
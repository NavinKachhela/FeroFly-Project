import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {Navbar,Nav} from 'react-bootstrap';
import './header.styles.scss';


const Header = () => (
    <Navbar className="header" sticky='top'collapseOnSelect expand="lg">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto options">
      <Nav.Link href="#home" className="option">HOME</Nav.Link>
      <Nav.Link href="#about" className="option">ABOUT</Nav.Link>
      <Nav.Link href="#room" className="option">ROOM</Nav.Link>
        <Nav.Link href="#services" className="option">SERVICES</Nav.Link>
        <Nav.Link href="#gallery" className="option">GALLERY</Nav.Link>
        <Nav.Link href="#see&do" className="option">SEE & DO</Nav.Link>
        <Nav.Link href="#contact" className="option">CONTACT</Nav.Link>
        <Nav.Link href="#nav-button" className="option res-btn1"><CustomButton>Book A Room</CustomButton></Nav.Link>
    </Nav> 
  </Navbar.Collapse>
  <Nav.Link href="#nav-button" className="option res-btn"><CustomButton>Book A Room</CustomButton></Nav.Link>
</Navbar>
);


export default Header;
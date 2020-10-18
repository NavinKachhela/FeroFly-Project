import React from 'react';
import  './parallax.styles.scss';
import Container from 'react-bootstrap/Container';


const Parallax = ({img,  ...otherProps}) => (
    <Container className="parallax-component mt-5" {...otherProps}>
   <img src={img} alt="" width="980" height="698"></img>
   
    </Container>
);
export default Parallax;
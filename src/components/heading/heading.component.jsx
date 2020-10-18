import React from 'react';
import  './heading.styles.scss';
import Container from 'react-bootstrap/Container';


const Heading = ({heading,  ...otherProps}) => (
    <Container className="heading-component mt-5" {...otherProps}>
    <h4>{heading}</h4>
    {heading==="ABOUT US" ?(
    <p className="mt-5 mb-5 paragraph-custom">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    ):<p></p>
}
    </Container>
);
export default Heading;
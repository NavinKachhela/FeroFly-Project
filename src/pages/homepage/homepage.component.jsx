import React from 'react';
import Container from 'react-bootstrap/Container';
import './homepage.styles.scss';
import './responsive.scss';
import Parallax from '../../components/parallax/parallax.component';
import Heading from '../../components/heading/heading.component';
import image1 from '../../assets/image1.png';
import BookingInfo from '../../components/Booking-info/booking-info.component';
import image2 from '../../assets/image2.png';
import Division from '../../components/division/division.component';
import Gallery from '../../components/Gallery/gallery.component';
import {ContactUs} from '../../components/contact-us/contact-us.component';
import Footer from '../../components/footer/footer.component';
import {Beverage} from '../../components/fixed-position/fixed-pos.component';


const HomePage = () => (

    
    <Container fluid>
    <Beverage/>
    <div className='title mt-custom'>
    <h1>
        <span>Ferofly</span>
        </h1>
        </div>
        <hr></hr>
        <div className='subtitle mb-custom'>
        <h5>
            <span>Magnify your Journey</span>
            </h5>
            </div>
            <Parallax img={image1}></Parallax>
            <BookingInfo/>
            <Heading heading="ABOUT US"/>
            <Parallax img={image2}></Parallax>
            <Heading heading="OUR SERVICES"/>
            <Division/>
            
            

<Heading heading="GALLERY"/>
<Gallery/>
<Container fluid className="large-container">
<Heading heading="CONTACT US"/>
<ContactUs/>
<Footer/>
</Container>
</Container>
)
export default HomePage;
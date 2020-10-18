import React from "react";
// import ReactDOM from "react-dom";
import {Container,Row,Col} from 'react-bootstrap';
import img1 from '../../assets/Gallery1.png';
import img2 from '../../assets/Gallery2.png';
import "./gallery.styles.scss";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        img1,
        img2
       
        
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 2000);
  }

  render() {
    return (
        <Container>
        <Row>
    <Col>
     <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    </Col>
    <Col>
    <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    </Col>
    <Col>
    <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    
    </Col>
  </Row>
      </Container>
    );
  }
}
// const GalleryElement = document.getElementById("root");
// ReactDOM.render(<Gallery />, GalleryElement);
export default Gallery;

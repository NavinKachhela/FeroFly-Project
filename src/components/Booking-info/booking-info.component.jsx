import React from 'react';
import './booking-info.styles.scss';
import {Container,Row,Col} from 'react-bootstrap';
const BookingInfo = () => (
    <Container className="mt-5 mb-5">
    <form>
    <Row>
    <Col>
    <label >Check In</label>
  <br></br>
  <input type="date" id="check-in" name="check in">
  </input>
    </Col>
    <Col>
    <label >Check Out</label>
  <br></br>
  <input type="date" id="check-out" name="check out">
  </input>
    </Col>
    <Col>
    <label >Adults</label>
    <br></br>
    <input type="number" value="1" min="1" max="50" ></input>
    </Col>
   <Col>
    <label >Kids</label>
    <br></br>
    <input type="number" value="0" min="1" max="50"></input>
    </Col>
    <Col>
    <p></p>
  <button type="button" className="mt-3">Search</button>
    </Col>
  </Row>
  
  
  
</form>
</Container>
   
);
export default BookingInfo;
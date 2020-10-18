import React from 'react';
import './fixed-pos.styles.scss';
import { library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {Row} from 'react-bootstrap';
library.add(fab);
//library.add(fagithubF);
export const Beverage = () => (
  
  <div class="box" id="fixed">
  <Row className="pl-5  mt-4">
  <FontAwesomeIcon id='icon' icon={['fab', 'tripadvisor']} />
  </Row>
  <Row className="pl-5 mt-5">
  <FontAwesomeIcon id='icon' icon={['fab', 'facebook-f']} />
  </Row>
  <Row className="pl-5 mt-5">
  <FontAwesomeIcon  id='icon' icon={['fab', 'instagram']} />
  </Row>  
  </div>

)
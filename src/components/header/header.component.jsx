import React from 'react';
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        
        <div className='options'>
        <Link className='option' to='/'>
            HOME
        </Link>
        <Link className='option' >
            ABOUT
        </Link>
        <Link className='option' >
            ROOM
        </Link>
        <Link className='option' >
            SERVICES
        </Link>
        <Link className='option'>
            GALLERY
        </Link>
        <Link className='option'>
            SEE & DO
        </Link>
        <Link className='option' >
            CONTACT
        </Link>
        <CustomButton>Book A Room</CustomButton>
        </div>
    </div>
)

export default Header;
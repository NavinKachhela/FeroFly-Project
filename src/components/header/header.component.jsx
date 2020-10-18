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
        <Link className='option' to='/'>
            ABOUT
        </Link>
        <Link className='option' to='/'>
            ROOM
        </Link>
        <Link className='option' to='/'>
            SERVICES
        </Link>
        <Link className='option' to='/'>
            GALLERY
        </Link>
        <Link className='option' to='/'>
            SEE & DO
        </Link>
        <Link className='option' to='/'>
            CONTACT
        </Link>
        <CustomButton>Book A Room</CustomButton>
        </div>
    </div>
)

export default Header;
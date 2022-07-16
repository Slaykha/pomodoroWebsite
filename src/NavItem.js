import React, { useState } from 'react';
import './Nav.css';

const NavItem = (props) => {
    return (
        <li className='navItem'>
            {props.children}
        </li>
    );
}

export default NavItem;
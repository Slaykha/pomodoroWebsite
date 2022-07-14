import React, { useState } from 'react';
import './dropdownMenu.css';

const NavItem = (props) => {

    const [open, setOpen] = useState(false)    

    return (
        <li className='navItem'>
            <a href="#" className='iconButton' onClick={() => setOpen(!open)}>{props.icon}</a>

            {open && props.children}
        </li>
    );
}

export default NavItem;
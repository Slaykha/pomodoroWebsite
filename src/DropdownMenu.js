import React from 'react';
import './dropdownMenu.css';

const DropdownMenu = (props) => {

    const DropdownItem = (props) =>{
        return(
            <p className='menuItem'>{props.children}</p>
        )
    }
    return (
        <div className='dropDown'>
            <DropdownItem>{props.children}</DropdownItem>
            <DropdownItem>deneme Item</DropdownItem>
        </div>
    );
}

export default DropdownMenu;
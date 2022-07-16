import React from 'react';
import './Nav.css';

const Nav = (props) => {

    return (
        <>
            <input type="checkbox" id="menu"/>
            <label for="menu" class="icon">
                <div class="menu"></div>
            </label>
            <div className='nav'>
                <ul>{props.children}</ul>
            </div>
        </>
    );
}


export default Nav;
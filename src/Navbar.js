import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './Colors';

const spin = keyframes`
to {
    transform: rotate(360deg);
}
`

const Navbar = () => (

    <header 
    css={css`
        background-color: ${colors.dark};
        padding: 15px;
    
    `}>

        <Link to="/" > Adopt Me!</Link>
        <span css={css`font-size: 60px; 
        display:inline-block; 
        animation: 1s ${spin} linear infinite; 
        &:hover {
            animation: 1s ${spin} linear infinite reverse; 
        }
        
        `} role="img" > 🐐 </span>
    </header>


)
 
export default Navbar;
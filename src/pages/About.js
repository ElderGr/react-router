import React from 'react';
import { useLocation } from 'react-router-dom'
// import { Container } from './styles';

function About(props) {
    const navigate = useLocation()
    console.log(props, navigate)
    return( 
        <div>
            About
        </div>
    );
}

export default About;
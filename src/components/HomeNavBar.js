import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    @media (max-width: 600px) {
        display: none;
    }
`;

const NavLink = styled.p`
    font-family: 'Playfair Display', serif;
    color: black;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: clamp(12px, 2vw, 20px);

    &:hover {
        color: #800000; // Dark red color on hover
    }

    &:not(:last-child)::after {
        content: '|';
        margin: 20px;
        color: black;
    }

    @media (max-width: 600px) {
        margin: 10px 0;
    }
`;

function HomeNavBar() {
    const handleNavigation = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <NavBar>
            <NavLink onClick={() => handleNavigation('gallery')}>Gallery</NavLink>
            <NavLink onClick={() => handleNavigation('wedding')}>Wedding</NavLink>
            <NavLink onClick={() => handleNavigation('getting-there')}>Getting There</NavLink>
            <NavLink onClick={() => handleNavigation('gifts')}>Gifts</NavLink>
            <NavLink onClick={() => handleNavigation('rsvp')}>RSVP</NavLink>
        </NavBar>
    );
}

export default HomeNavBar;

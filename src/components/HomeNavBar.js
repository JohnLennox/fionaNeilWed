import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const NavLink = styled.p`
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
    color: black;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        color: #800000; // Dark red color on hover
    }
    
        &:not(:last-child)::after {
        content: '';
        margin-left: 10px;

        @media (max-width: 600px) {
            content: '';
            margin-left: 0;
        }
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
            <NavLink onClick={() => handleNavigation('getting-there')}>Location</NavLink>
            <NavLink onClick={() => handleNavigation('gifts')}>Gifts</NavLink>
            <NavLink onClick={() => handleNavigation('rsvp')}>RSVP</NavLink>
        </NavBar>
    );
}

export default HomeNavBar;

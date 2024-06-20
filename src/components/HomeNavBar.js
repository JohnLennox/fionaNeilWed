import React from 'react';

function HomeNavBar() {
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100vw', // Ensure the nav doesn't exceed the viewport width
        overflow: 'hidden', // Prevent overflow if content exceeds container
        padding: '10px 0',
        boxSizing: 'border-box', // Include padding in element's total width and height
        flexWrap: 'wrap', // Allow wrapping of items to new line
    };

    const linkStyle = {
        margin: '0 10px',
        textDecoration: 'none',
        fontWeight: 'bold', // Adjusted to make it more visually appealing
        color: 'black',
        padding: '20px',
        cursor: 'pointer', // Make the cursor a pointer to indicate it's clickable
        flex: '1 1 auto', // Allow flex items to grow and shrink as needed
        textAlign: 'center', // Center text in smaller screens
    };

    const handleNavigation = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={navStyle}>
            <p style={linkStyle} onClick={() => handleNavigation('gallery')}>Gallery</p>
            <span>|</span>
            <p style={linkStyle} onClick={() => handleNavigation('wedding')}>Wedding</p>
            <span>|</span>
            <p style={linkStyle} onClick={() => handleNavigation('getting-there')}>Location</p>
            <span>|</span>
            <p style={linkStyle} onClick={() => handleNavigation('gifts')}>Gifts</p>
            <span>|</span>
            <p style={linkStyle} onClick={() => handleNavigation('rsvp')}>RSVP</p>
        </div>
    );
}

export default HomeNavBar;

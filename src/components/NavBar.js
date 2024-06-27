import React, { useState, useEffect } from 'react';

function NavBar() {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        const scrollHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        setIsVisible(window.scrollY >= scrollHeight || screenWidth <= 600);
    };

    useEffect(() => {
        // Add scroll and resize event listeners
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        // Initial check
        checkVisibility();

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    const navStyle = {
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000
    };

    return (
        <div style={navStyle}>
            <nav className="navbar container-fluid navbar-expand-lg justify-content-center navbar-light bg-light sticky-top">
                <a className="navbar-brand d-flex w-50 me-auto" style={{ paddingLeft: '10px', fontFamily: "Dancing Script" }} href="#">Emma & John</a>
                <button className="navbar-toggler" type="button" style={{ marginRight: '10px' }} data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" style={{ marginLeft: '10px' }} id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#wedding">Wedding</a></li>
                        <li className="nav-item"><a className="nav-link" href="#getting-there">Getting There</a></li>
                        <li className="nav-item"><a className="nav-link" href="#gifts">Gifts</a></li>
                        <li className="nav-item"><a className="nav-link" href="#rsvp">RSVP</a></li>
                    </ul>
                </div>
                <div className="w-50 justify-content-end" />
            </nav>
        </div>
    );
}

export default NavBar;

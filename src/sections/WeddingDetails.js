import React from 'react';

function WeddingDetails() {
    return (
        <div className="container mt-5">
            <div className="row welcome-text text-center mb-4">
                <h1>Wedding Details</h1>
                <p>We are excited to celebrate our special day with you!</p>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <img
                        src="https://spaseekers.imgix.net/m/0/back-view.jpg?ixlib=gatsbyHook-1.7.4&fit=min&auto=format&w=800&h=600"
                        alt="Wedding Venue" className="img-fluid rounded shadow"/>
                </div>
                <div style={{padding:'20px'}} className="col-md-6 text-start align-items-center welcome-text">
                    <p><strong>Date:</strong> 17th November 2024<br/>
                        <strong>Time:</strong> 12pm<br/>
                        <strong>Location:</strong> Inglewood Hotel, Alloa</p>
                    <p><strong>Dress Code:</strong> Semi-formal<br/>
                        <strong>RSVP By:</strong> 1st October 2024<br/>
                        <strong>Contact:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default WeddingDetails;

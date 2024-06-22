import React from 'react';

function WeddingDetails() {
    return (
        <div className="container mt-5">
            <div className="row welcome-text text-center mb-4">
                <h1>Wedding Details</h1>
                <p>We are excited to celebrate our special day with you!</p>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <img
                        src="https://spaseekers.imgix.net/m/0/back-view.jpg?ixlib=gatsbyHook-1.7.4&fit=min&auto=format&w=800&h=600"
                        alt="Wedding Venue" className="img-fluid rounded shadow mb-4"/>
                </div>
                <div className="card p-3 shadow col-md-12 text-center welcome-text">
                    <h2>Important Information</h2>
                    <p><strong>Date:</strong> 17th November 2024<br/>
                        <strong>Time:</strong> 12pm<br/>
                        <strong>Location:</strong> Inglewood Hotel, Alloa</p>
                    <p><strong>Dress Code:</strong> Formal<br/>
                        <strong>RSVP By:</strong> 6th October 2024<br/>
                        <strong>Contact Us:</strong> <a
                            href="mailto:example@example.com">EmmaAndJohnWedding@outlook.com</a></p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12 text-center">
                    <h2>Contact Information</h2>
                    <p>If you have any questions or need assistance, please feel free to reach out to us or the hotel
                        directly.</p>
                </div>
            </div>

            <div className="row mb-4">
                <div style={{marginBottom: '20px'}} className="col-md-6 text-center mx-auto">
                    <div className="card p-3 shadow">
                        <h3>Our Contact Information</h3>
                        <p><strong>Our Email:</strong> <a
                            href="mailto:EmmaAndJohnWedding@outlook.com">EmmaAndJohnWedding@outlook.com</a></p>
                    </div>
                </div>
                <div className="col-md-6 text-center mx-auto">
                    <div className="card p-3 shadow">
                        <h3>Hotel Contact Information</h3>
                        <p><strong>Hotel Website:</strong> <a
                            href="https://www.inglewoodhouseandspa.co.uk/">https://www.inglewoodhouseandspa.co.uk</a>
                        </p>
                        <p><strong>Hotel Email:</strong> <a
                            href="mailto:reservations@inglewoodhouseandspa.co.uk">reservations@inglewoodhouseandspa.co.uk</a>
                        </p>
                        <p><strong>Hotel Phone:</strong> +44 01259 216156</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeddingDetails;

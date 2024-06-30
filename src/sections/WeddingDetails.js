import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    sectionTitle: {
        fontFamily: 'Dancing Script, cursive',
        position: 'relative',
        paddingBottom: '10px'
    },
    sectionTitleUnderline: {
        content: '',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        backgroundColor: '#000'
    },
    cardText: {
        fontFamily: 'Playfair Display, serif',
        paddingTop: '10px',
        fontSize: 'clamp(20px, 2vw, 20px)'
    },
    noWrapText: {
        fontFamily: 'Playfair Display, serif',
        whiteSpace: 'nowrap',
        paddingRight: '10px',
        fontWeight: '',

        // fontSize: '0.9em'
    },
    smallText: {
        // fontSize: '0.8rem'
    },
    verticalCenter: {
        display: 'flex',
        alignItems: 'center'
    }
};

function WeddingDetails() {
    return (
        <div className="container mt-5">
            <div>
                <h1 style={styles.header}>Wedding Details</h1>
                <p className="lead" style={{ fontSize: 'clamp(20px, 1.5vw, 60px)', fontFamily: "Dancing Script" }}>
                    We are excited to celebrate our special day with you!
                </p>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2 verticalCenter" style={styles.verticalCenter}>
                    <div className="card-text" style={styles.cardText}>
                        <div className="d-flex">
                            <p style={styles.noWrapText}>Date:</p>
                            <p>17th November 2024</p>
                        </div>
                        <div className="d-flex">
                            <p style={styles.noWrapText}>Time:</p>
                            <p>12pm</p>
                        </div>
                        <div className="d-flex">
                            <p style={styles.noWrapText}>Location:</p>
                            <p>Inglewood Hotel, Alloa</p>
                        </div>
                        <div className="d-flex">
                            <p style={styles.noWrapText}>Dress Code:</p>
                            <p>Formal</p>
                        </div>
                        <div className="d-flex">
                            <p style={styles.noWrapText}>RSVP By:</p>
                            <p>6th October 2024</p>
                        </div>
                        {/*<div className="d-flex">*/}
                        {/*    <p style={styles.noWrapText}>Contact Us:</p>*/}
                        {/*    <p><a href="mailto:EmmaAndJohnWedding@outlook.com">EmmaAndJohnWedding@outlook.com</a></p>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="col-lg-6 order-lg-2 order-1 mb-4">
                    <img
                        src="https://spaseekers.imgix.net/m/0/back-view.jpg?ixlib=gatsbyHook-1.7.4&fit=min&auto=format&w=800&h=600"
                        alt="Wedding Venue"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default WeddingDetails;

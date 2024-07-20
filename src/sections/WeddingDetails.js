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
        paddingRight: '10px'
    },
    verticalCenter: {
        display: 'flex',
        alignItems: 'center'
    }
};

const WeddingDetails = () => {
    const weddingInfo = [
        { label: 'Date:', value: '17th November 2024' },
        { label: 'Time:', value: '2pm arrival for 2.30pm ceremony' },
        { label: 'Location:', value: 'Inglewood House & Spa, Alloa, FK10 2HU' },
        { label: 'Dress Code:', value: 'Formal' },
        {
            label: <strong>RSVP by</strong>,
            value: (
                <strong>
                    22<sup style={{ fontSize: '10px' }}>nd</sup> September 2024
                </strong>
            )
        }
    ];

    return (
        <div className="container mt-5">
            <div style={{paddingBottom:'20px'}}>
                <h1 >Wedding Details</h1>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2" style={styles.verticalCenter}>
                    <div style={styles.cardText}>
                        {weddingInfo.map((info, index) => (
                            <div className="d-flex" key={index}>
                                <p style={styles.noWrapText}>{info.label}</p>
                                <p>{info.value}</p>
                            </div>
                        ))}
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
};

export default WeddingDetails;

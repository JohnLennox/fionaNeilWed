import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    sectionTitle: {
        fontFamily: 'Dancing Script, cursive',
        position: 'relative',
        paddingBottom: '10px'
    },
    infoText: {
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
    },
    rsvpText: {
        fontFamily: 'Playfair Display, serif',
        paddingTop: '20px',
        textAlign: 'left'
    }
};

const weddingInfo = [
    {label: 'Date:', value: '17th November 2024'},
    {label: 'Time:', value: '2pm arrival for 2.30pm ceremony'},
    {label: 'Location:', value: "Inglewood House & Spa,<br>Alloa,<br>FK10&nbsp;2HU"},
    {label: 'Dress Code:', value: 'Formal'}
];

const WeddingDetails = () => (
    <div className="container mt-5">
        <div style={{paddingBottom: '20px'}}>
            <h1>Wedding Details</h1>
        </div>

        <div className="row">
            <div className="col-lg-6 mb-4 order-lg-1 order-2" style={styles.verticalCenter}>
                <div style={styles.infoText}>
                    {weddingInfo.map((info, index) => (
                        <div className="d-flex" key={index}>
                            <div className="col-4 text-start">
                                <p style={styles.noWrapText}>{info.label}</p>
                            </div>
                            <div className="col-8 text-start">
                                <p dangerouslySetInnerHTML={{__html: info.value}} />
                            </div>
                        </div>
                    ))}
                    <div className="text-start" style={styles.rsvpText}>
                        <strong>RSVP by 22<sup style={{fontSize: '10px'}}>nd</sup> September 2024</strong>
                    </div>
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

export default WeddingDetails;

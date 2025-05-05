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
        // fontSize: 'clamp(20px, 2vw, 20px)'
    },
    noWrapText: {
        // fontFamily: 'Playfair Display, serif',
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

function ContactDetails() {
    return (
        <div className="sectionContent text-start">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h1>Contact Details</h1>
                </div>
            </div>

            <p>If you have any questions please get in touch!</p>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2">
                    <div className="d-flex">
                        <div className="col-4 text-start">
                            <p>Tel:</p>
                        </div>
                        <div className="col-8 text-start">
                            <p>07964 372088</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4 order-lg-1 order-2">
                    <div className="d-flex">
                        <div className="col-4 text-start">
                            <p>Address</p>
                        </div>
                        <div className="col-8 text-start">
                            <p> 61 Faulds Drive<br/> Kirkintilloch <br/> Glasgow <br/> G66 3QT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;

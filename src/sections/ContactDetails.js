import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactDetails() {
    return (
        <div className="sectionContent text-start">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h1>Contact Details</h1>
                </div>
            </div>

            <p>If you have any questions please get in touch!</p>

            <p>Email: <a href="mailto:emmajohnwed@outlook.com">emmajohnwed@outlook.com</a></p>

            <p>Address: 49 Faulds Drive, Kirkintilloch, Glasgow, G66 3QT.</p>
        </div>
    );
}

export default ContactDetails;

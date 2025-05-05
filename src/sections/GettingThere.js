import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    textStart: {
        textAlign: 'left'
    }, textCenter: {
        textAlign: 'center'
    }, iframe: {
        border: '0', borderRadius: '8px', width: '100%', height: '450px'
    }
};

function GettingThere() {
    return (<div className="container mt-5">
        <div className="row mb-4">
            <div className="col-md-12">
                <h1>Getting There</h1>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col-md-12">
                <h2>Travel</h2>
                <div style={styles.textStart}>
                    <p>There are plenty of parking spaces available at the venue for those wishing to travel by car.</p>

                    <p> If you don’t fancy driving, Hillfoot train station is a 5-10 minute walk away from Boclair House
                        and it
                        takes 22 minutes from Glasgow Central Station. If you choose to travel by train, please make
                        sure to
                        check your journey in advance. As the wedding is on a Sunday, train services will be less
                        frequent
                        than usual.</p>

                    {/*<p>Train timetables and further information can be found on the ScotRail website: <a*/}
                    {/*    href="https://www.scotrail.co.uk" target="_blank" rel="noopener noreferrer">ScotRail</a></p>*/}

                    {/*<h3>Taxi Numbers</h3>*/}
                    {/*<p><strong>Buchan Town Cars: </strong> 01259 213 215</p>*/}
                    {/*<p><strong>AppiCab: </strong> 01259 202 020</p>*/}
                </div>


                <div className="mt-4" style={styles.textCenter}>
                    <iframe
                        style={styles.iframe}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.7985631907254!2d-4.323035323107996!3d55.91819307314588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888456d2e783715%3A0x98306f2c998f00fd!2sBoclair%20House%20Hotel!5e0!3m2!1sen!2suk!4v1746382267370!5m2!1sen!2suk">
                    </iframe>
                </div>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col-md-12">
                <h2>Accommodation</h2>
                <div style={styles.textStart}>
                    <p>Accommodation at the venue is limited, all rooms have been reserved for close family of the bride
                        and groom. There are two nearby Premier Inns in Bearsden and Milngavie should you require
                        accommodation.</p>
                    <p>If you have a room reserved at Boclair House, they will require the remaining balance to be paid
                        by
                        30th October 2025. You can check in from 3pm onwards and their check out time is at 11am. </p>
                </div>
            </div>
        </div>
    </div>);
}

export default GettingThere;

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
                        <p>There are plenty of parking spaces available at the venue for those wishing to travel by car.
                            It takes around 45 minutes to drive to Inglewood House & Spa from Glasgow, and 15 minutes to
                            drive from Stirling.</p>

                        <p>If you don’t fancy driving, Alloa train station is just over a mile away from Inglewood House
                            & Spa and it takes only 45 minutes from Glasgow Queen Street Station. From Alloa Station,
                            the wedding venue is a 25 minute walk away, or 7 minutes in a taxi. If you choose to travel
                            by train, please make sure to check your journey in advance. As the wedding is on a Sunday,
                            train services may be less frequent than usual.</p>

                        <p>Train timetables and further information can be found on the ScotRail website: <a
                            href="https://www.scotrail.co.uk" target="_blank" rel="noopener noreferrer">ScotRail</a></p>

                        <h3>Taxi Numbers</h3>
                        <p><strong>Buchan Town Cars: </strong> 01259 213 215</p>
                        <p><strong>AppiCab: </strong> 01259 202 020</p>
                    </div>


                    <div className="mt-4" style={styles.textCenter}>
                        <iframe
                            style={styles.iframe}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.7655706162977!2d-3.80602028373683!3d56.126572480654985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48887de89a3d0ba9%3A0xed9aebff31d43877!2sInglewood+House+and+Spa!5e0!3m2!1sen!2suk!4v1556269220696!5m2!1sen!2suk">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <h2>Accommodation</h2>
                    <div style={styles.textStart}>
                        <p>Accommodation at Inglewood House & Spa is limited as most rooms have been reserved for close
                            family of the bride and groom. But if you need a place to stay after the wedding, don’t
                            worry! There are a number of other hotels located close by, including a Holiday Inn and
                            Premier Inn in Stirling. You can explore places to stay in Alloa and Stirling here: <a
                                href="https://www.booking.com/searchresults.en-gb.html?ss=Stirling&ssne=Stirling&ssne_untouched=Stirling&efdco=1&label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQ3YAQHoAQGIAgGoAgO4AoGG27QGwAIB0gIkZmE0N2ZmZGEtZWI4Ny00Nzk0LWE4ZDEtMGI2ZjFmZTk5ZGE02AIF4AIB&sid=14fbf8e24d89e1d854bbcd72817c12a0&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-2608742&dest_type=city&checkin=2024-11-17&checkout=2024-11-18&group_adults=2&no_rooms=1&group_children=0"
                                target="_blank" rel="noopener noreferrer">Booking.com</a></p>
                        <p>If you have a room reserved at Inglewood House & Spa, please get in touch with reception to
                            pay the remaining balance for the room at least 4 weeks before the wedding (20th
                            October).</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default GettingThere;

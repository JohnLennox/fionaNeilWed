import React from 'react';

function GettingThere() {
    return (
        <div className="container mt-5">
            <div className="row welcome-text text-center mb-4">
                <h1>Guest Information</h1>
            </div>

            <div className="row mb-4">
                <div className="col-md-12 text-center">
                    <div className="card p-3 shadow mb-4">
                        <h1>Getting There</h1>
                        <div className={"text-start"}>
                            <h3>Directions by Car</h3>
                            <br/>
                            <p>It takes around 45 minutes to drive to Inglewood House & Spa from Glasgow city
                                centre.</p>
                            <br/>
                            <h3>Public Transport</h3>
                            <p> Alloa train
                                station is a 7 minute car journey from the venue, with trains to and from Glasgow
                                typically
                                running
                                once per hour on a Sunday. The train journey from Glasgow to Alloa is approximately 45
                                minutes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12 text-center">
                    <div className="card p-3 shadow mb-4">
                        <h2>Alloa Hotels & Taxis</h2>
                        <p>https://www.ihg.com/holidayinnexpress/hotels/gb/en/stirling/siruk/hoteldetail - 12 min car journey</p>
                        <p>https://www.premierinn.com/gb/en/hotels/scotland/central/falkirk/falkirk-north.html?cid=GLBC_FALBOW - 15 minute car journey</p>
                        <p>Booking.com : https://www.booking.com/searchresults.en-gb.html?aid=303948&label=alloa-V7xx8y0sMZFaDdkyBWMBmQS393123143455%3Apl%3Ata%3Ap15%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-360087309%3Alp1007336%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-TMmGS3IXKv30AOu__1UdtlkkfZG-6gU5PCmj27n8QlLuFes2LZrhRoCoJ4QAvD_BwE&dest_type=city&redirected=1&dest_id=-2588118&source=city&redirected_from_city=1&keep_landing=1&sid=e1640d6b9683dc6021ad4658c45e6de9</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GettingThere;

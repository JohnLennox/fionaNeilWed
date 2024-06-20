function WeddingDetails() {
    return (
        <div>
            <div className="row welcome-text">
                <h1>Wedding Details</h1>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://spaseekers.imgix.net/m/0/back-view.jpg?ixlib=gatsbyHook-1.7.4&fit=min&auto=format&w=800&h=600"
                        alt="Wedding Venue" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6 text-start align-items-center welcome-text">
                    <p><strong>Date:</strong> 17th November 2024<br/>
                        <strong>Time:</strong> 12pm<br/>
                        <strong>Location:</strong> Inglewood Hotel, Alloa</p>
                </div>
            </div>
        </div>
    )
}

export default WeddingDetails;
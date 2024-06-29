import image1 from '../resources/images/img.png';
import Countdown from "../components/Countdown";
import HomeNavBar from "../components/HomeNavBar";

function Home() {
    return (

        <div className="sectionContent text-center">
            <div className="welcome-text">
                <h1 style={{fontSize: '7vw'}}> Emma & John</h1>
                <h2 style={{fontWeight: 5}}> are getting married!</h2 >
            </div>

            <div>

                <HomeNavBar/>
            </div>

            <div className="container" style={{padding: '20px', }}>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <img alt={"Image of Emma and John"} className="img-fluid" style={{width: '80%', borderRadius: '10px'}} src={image1}/>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            <div style={{padding: '20px'}}>
                <Countdown style={{paddingTop: '20px'}}/>
            </div>

        </div>
    )
}


export default Home;
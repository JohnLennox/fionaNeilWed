import image1 from '../resources/images/img.png';
import Countdown from "../components/Countdown";
import HomeNavBar from "../components/HomeNavBar";

function Home() {
    return (

        <div className="sectionContent text-center" style={{minHeight: '80vh'}}>
            <div className="welcome-text" style={{paddingTop: '0px'}}>
                <h1 style={{fontSize: 'clamp(25px, 7.7vw, 90px)'}}> Emma & John</h1>
                <h1 style={{fontSize: 'clamp(20px, 4vw, 60px)', fontWeight: 5, fontFamily: "Dancing Script"}}> are
                    getting married!</h1>
            </div>

            <div>
                <HomeNavBar/>
            </div>

            <div className="container" style={{paddingTop: '20px',}}>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <img alt={"Image of Emma and John"} className="img-fluid"
                             style={{width: '80%', borderRadius: '10px'}} src={image1}/>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

            <div style={{marginTop: '20px'}}>
                <p style={{fontSize: 'clamp(25px, 3vw, 45px)', fontFamily: 'Dancing Script', marginTop: 0}}>17.11.2024</p>
            </div>

            <div style={{padding: '20px'}}>
                <Countdown style={{paddingTop: '20px'}}/>
            </div>

        </div>
    )
}


export default Home;
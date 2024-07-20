import './App.css';
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import Gifts from "./sections/Gifts";
import GettingThere from "./sections/GettingThere";
import WeddingDetails from "./sections/WeddingDetails";
import Gallery from "./sections/Gallery";
import Home from "./sections/Home";
import RSVP from "./sections/RSVP";
import ContactDetails from "./sections/ContactDetails";

function App() {
    return (
        <div style={{backgroundColor: '#E6E5DC'}}>
            <NavBar/>
            <div className={'mainContent'}>
                <Section id="home" content={<Home/>}/>
                <Section id="gallery" content={<Gallery/>}/>
                <Section id="wedding" content={<WeddingDetails/>}/>
                <Section id="getting-there" content={<GettingThere/>}/>
                <Section id="gifts" content={<Gifts/>}/>
                <Section id="rsvp" content={<RSVP/>}/>
                <Section id="contact" content={<ContactDetails/>}/>
            </div>
        </div>
    );
}

export default App;

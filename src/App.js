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
import {useState} from "react";

function App() {

    const [colour, setColour] = useState('#4B0114');
    const [textColour, setTextColour] = useState('#CFCFCF');

    return (
        <div style={{backgroundColor: colour, color: textColour}}>
            <NavBar/>
            <div className={'mainContent'}>
                <Section id="home" content={<Home/>}/>
                <Section id="gallery" content={<Gallery/>}/>
                <Section id="wedding" content={<WeddingDetails/>}/>
                <Section id="getting-there" content={<GettingThere/>}/>
                <Section id="gifts" content={<Gifts/>}/>
                <Section id="rsvp" content={<RSVP/>}/>
                <Section id="contact" content={<ContactDetails/>}/>
                <p>Background colour</p>
                <input type={"color"} value={colour} onChange={(event) =>setColour(event.target.value)}/>

                <p>Text colour</p>
                <input type={"color"} value={textColour} onChange={(event) =>setTextColour(event.target.value)}/>
            </div>
        </div>
    );
}

export default App;

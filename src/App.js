import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { OurStory } from './components/OurStory'
import { Gallery } from "./components/Gallery";
import { More } from "./components/More";
import { Updates } from "./components/Updates";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import mock from "./mock.json";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navbar items={mock.navBar} />
                <Home {...mock.home} />
                <OurStory {...mock.ourStory} />
                {/* <Services {...mock.services} /> */}
                {/* <Updates {...mock.updates} />
                <Gallery {...mock.gallery} />
                <More {...mock.more} />
                <Contact {...mock.contact} />
                <Footer {...mock.footer} /> */}
            </Router>
        </div>
    )
};


import React, { Component } from 'react'
import FlexView from 'react-flexview'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import SkyLight from 'react-skylight'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ScrollArea from 'react-scrollbar'

import ImageAbout from './res/about.jpg'
import ImagePortfolio from './res/portfolio.jpg'
import PortfolioPizza from './res/portfolio/pizza website/pizzaWebsite.jpg'
import PortfolioWorldly from './res/portfolio/worldly/worldlyCover.jpg'
import ImageCV from './res/cv.jpg'
import ImageContact from './res/contact.jpg'
import WorldlyComb from './res/portfolio/worldly/worldlycomb.png'
import WorldlyTitle from './res/portfolio/worldly/worldlytitle.png'
import WorldlyLogo from './res/portfolio/worldly/worldlylogo.png'
import WorldlyWire from './res/portfolio/worldly/worldlylogowire.png'
import WorldlyColour from './res/portfolio/worldly/worldlycolours.png'

const buttonStripper = {
    background: "none",
    border: "none",
    fontFamily: "inherit",
}
const readMore = {
    color: "var(--highlights)",
    fontSize: "1.5vw",
    fontFamily: "inherit",
    fontWeight: "Bold",
    textDecoration: "none",
    cursor: "pointer",
}
const dotStyle = {
    fontSize: "2vw",
    fontWeight: "bold",
}
const emailStyle = {
    fontSize: "2vw",
    fontFamily: "inherit",
    margin: "0",
}
const portfolioStyle = {
    width: "25vw",
    height: "50vh",
    marginLeft: "-12.5vw",
    marginTop: "-25vh",
}

function PortfolioHome() {
    return (
        <section className="navSection">
            <img src={ImagePortfolio} className="navImage" alt="portfolio" />
            <section className="navText">
                <FlexView column vAlignContent='center'>
                    <a>Portfolio</a>
                    <h1>DESIGN BEAUTIFULLY. <br /> DEVELOP EFFICIENTLY.</h1>
                    <p>Fullstack capability.<br />Extensive experience using Adobe Suite, React, Java, Visual Studio and more to carry a project all the way from conceptualisation to realisation.
                    <br />
                        <Link to="/portfolio" style={readMore}>See Work...</Link></p>
                </FlexView>
            </section>
        </section>
    );
}
function PortfolioContent() {
    return (
        <section className="navSection">
            <div className="content">
                <a href="/casestudySoL.pdf" target="_blank">
                    <div class="content-overlay"></div>
                    <img src={PortfolioPizza} className="content-image" alt="aboutme" />
                    <div class="content-details fadeIn-bottom">
                        <h2 class="content-title">The Slice of Life</h2>
                        <p class="content-text">Year 1 Assignment: A HTML and Javascript website designed to streamline the pizza ordering process</p>
                        <h3 class="content-title">Read Case Study</h3>
                    </div>
                </a>
            </div>
            <div className="content">
                <a href="/casestudyWorldly.pdf" target="_blank">
                    <div class="content-overlay"></div>
                    <img src={PortfolioWorldly} className="content-image" alt="aboutme" />
                    <div class="content-details fadeIn-bottom">
                        <h2 class="content-title">Worldly</h2>
                        <p class="content-text">Year 2 Assignment: A news and social app where users can read articles and discuss topics with friends. (case study incomplete until assignment deadline)</p>
                        <h3 class="content-title">Case Study Unavailable</h3>
                    </div>
                </a>
            </div>
            <div className="content">
                <a href="">
                    <div class="content-overlay"></div>
                    <img src={ImagePortfolio} className="content-image" alt="aboutme" />
                    <div class="content-details fadeIn-bottom">
                        <h2 class="content-title">The Simpsons: Duff Party Bus</h2>
                        <p class="content-text">Year 2 Assignment: A 3D render of the Duff Party Bus, from blueprinting to final render (case study unavailable until assignment deadline)</p>
                        <h3 class="content-title">Case Study Unavailable</h3>
                    </div>
                </a>
            </div>
        </section >
    );
}

export default class G extends Component {
    render() {
        return (
            <div id="page">
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={250}
                    totalSlides={4}
                    dragEnabled={false}>
                    <FlexView
                        height='100vh'
                        hAlignContent='center'
                        vAlignContent='center'>
                        <div id="navBack">
                            <Slider id="carousel">
                                <Slide index={0}>
                                    <section className="navSection">
                                        <img src={ImageAbout} className="navImage" alt="aboutme" />
                                        <section className="navText">
                                            <FlexView column vAlignContent='center'>
                                                <a>Gabriel Gruter</a>
                                                <h1>INTERNATIONAL. <br /> MULTI-CULTURAL.</h1>
                                                <p>Not the average undergrad.<br />Fluency in English, German and Portuguese with British, Euro and Latin American nationalities. I can correspond with a variety of different clients and work in EU and non-EU countries.</p>
                                            </FlexView>
                                        </section>
                                    </section>
                                </Slide>
                                <Slide index={1}>
                                    <Router>
                                        <div>
                                            <Route exact path="/" component={PortfolioHome} />
                                            <Route path="/portfolio" component={PortfolioContent} />
                                        </div>
                                    </Router>
                                </Slide>
                                <Slide index={2}>
                                    <section className="navSection">
                                        <img src={ImageCV} className="navImage" alt="CV" />
                                        <section className="navText">
                                            <FlexView column vAlignContent='center'>
                                                <a>Qualifications &amp; CV</a>
                                                <h1>ADOBE SUITE. <br /> REACT, NODE, ANDROID, iOS.</h1>
                                                <p>Dedicated to work.<br />1 year of industry experience with YvYSolutions: Creating, working on and maintaining android/iOS apps as a web/app developer alongside my undergradude studies.<a style={readMore} href="/CV.pdf" target="_blank"> See CV...</a></p>
                                            </FlexView>
                                        </section>
                                    </section>
                                </Slide>
                                <Slide index={3}>
                                    <section className="navSection">
                                        <img src={ImageContact} className="navImage" alt="aboutme" />
                                        <section className="navText">
                                            <FlexView column vAlignContent='center'>
                                                <a>Contact</a>
                                                <h1>FAST. <br /> RESPONSIVE.</h1>
                                                <p>Feel free to contact me anytime at:<br /><a href="mailto:contact@gabrielgruter.com" style={emailStyle}>contact@gabrielgruter.com</a><br />Or snoop into this site's <a href="https://github.com/gabrielgruter/react-to-gabe" target="__blank">source code</a></p>
                                            </FlexView>
                                        </section>
                                    </section>
                                </Slide>
                            </Slider>
                        </div>
                        <FlexView height='38vw' hAlignContent='center' vAlignContent='bottom'>
                            <section id="navBar">
                                <Dot slide={0} style={Object.assign({}, dotStyle, buttonStripper)}>About Me</Dot>
                                <a>&ensp;|&ensp;</a>
                                <Dot slide={1} style={Object.assign({}, dotStyle, buttonStripper)}>Portfolio</Dot>
                                <a>&ensp;|&ensp;</a>
                                <Dot slide={2} style={Object.assign({}, dotStyle, buttonStripper)}>Qualifications &amp; CV</Dot>
                                <a>&ensp;|&ensp;</a>
                                <Dot slide={3} style={Object.assign({}, dotStyle, buttonStripper)}>Contact</Dot>
                            </section>
                        </FlexView>
                        <div id="highlightBorder"></div>
                        <div id="whiteBorder"></div>
                    </FlexView>
                </CarouselProvider>
            </div >
        )
    }
}
// This website would not have been possible without:
// React.js https://reactjs.org/
// npm https://www.npmjs.com/
//
// FlexView https://github.com/buildo/react-flexview
// Pure React Carousel https://www.npmjs.com/package/pure-react-carousel
// SkyLight https://marcio.github.io/react-skylight/
// Scrollbar https://www.npmjs.com/package/react-scrollbar
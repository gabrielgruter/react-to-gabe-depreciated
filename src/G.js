import React, { Component } from 'react'
import FlexView from 'react-flexview'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MediaQuery from 'react-responsive'

import ImageAbout from './res/about.jpg'
import ImagePortfolio from './res/portfolio.jpg'
import PortfolioComic from './res/portfolio/comic/comicCover.jpg'
import PortfolioWorldly from './res/portfolio/worldly/worldlyCover.jpg'
import PortfolioBlog from './res/portfolio/blog/blogCover.jpg'
import ImageCV from './res/cv.jpg'
import ImageContact from './res/contact.jpg'

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

function DesktopSite({ match }) {
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
                                        <Route exact path={match.path} component={DesktopPortfolioHome} />
                                        <Route path={`/portfolio`} component={DesktopPortfolioContent} />
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
function DesktopPortfolioHome() {
    return (
        <section className="navSection">
            <img src={ImagePortfolio} className="navImage" alt="portfolio" />
            <section className="navText">
                <FlexView column vAlignContent='center'>
                    <a>Portfolio</a>
                    <h1>DESIGN BEAUTIFULLY. <br /> DEVELOP EFFICIENTLY.</h1>
                    <p>Fullstack capability.<br />Extensive experience using Adobe Suite, React, Java, Visual Studio and more to carry a project all the way from conceptualisation to realisation.
                    <br />
                        <Link to={`portfolio`} style={readMore}>See Work...</Link></p>
                </FlexView>
            </section>
        </section>
    )
}
function DesktopPortfolioContent() {
    return (
        <section className="navSection">
            <div className="content">
                <a href="/casestudyGromit.pdf" target="_blank">
                    <div class="content-overlay"></div>
                    <img src={PortfolioComic} className="content-image" alt="aboutme" />
                    <div class="content-details fadeIn-bottom">
                        <h2 class="content-title">Wallace and Gromit Comic</h2>
                        <p class="content-text">Year 1 Assignment: Fuse together Marvel Comics and Wallace &amp; Gromit concepts</p>
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
                        <p class="content-text">Year 2 Assignment: A news and social app where users can read articles and discuss topics with friends. (full case study unavailable until assignment deadline)</p>
                        <h3 class="content-title">Read Case Study</h3>
                    </div>
                </a>
            </div>
            <div className="content">
                <div class="content-overlay"></div>
                <img src={ImagePortfolio} className="content-image" alt="aboutme" />
                <div class="content-details fadeIn-bottom">
                    <h2 class="content-title">The Simpsons: Duff Party Bus</h2>
                    <p class="content-text">Year 2 Assignment: A 3D render of the Duff Party Bus, from blueprinting to final render (case study unavailable until assignment deadline)</p>
                    <h3 class="content-title">Case Study Unavailable</h3>
                </div>
            </div>
            <div className="content">
                <a href="Portfolio Website/index.html">
                    <div class="content-overlay"></div>
                    <img src={PortfolioBlog} className="content-image" alt="aboutme" />
                    <div class="content-details fadeIn-bottom">
                        <h2 class="content-title">Assignment EE2615</h2>
                        <p class="content-text">A weekly blog for Year 2 module 2615 (blog unavailable until assignment deadline)</p>
                        <h3 class="content-title">Blog Unavailable</h3>
                    </div>
                </a>
            </div>
        </section >
    )
}

function MobileSite() {
    return (
        <div id="mobilePage">
            <h2>GABRIEL<br />GRUTER</h2>
            <h3>International. Multi-Cultural</h3>
            <p>Not the average undergrad.<br />Fluency in English, German and Portuguese with British, Euro and Latin American nationalities. I can correspond with a variety of different clients and work in EU and non-EU countries.</p>
            <h3>Design Beautifully. Develop Efficiently</h3>
            <p>Fullstack capability.<br />Extensive experience using Adobe Suite, React, Java, Visual Studio and more to carry a project all the way from conceptualisation to realisation.</p>
            <h3>Adobe. React. Node. Android. iOS. Web.</h3>
            <p>Dedicated to work.<br />1 year of industry experience with YvYSolutions: Creating, working on and maintaining android/iOS apps as a web/app developer alongside my undergradude studies.</p>
            <h3>Fast. Responsive.</h3>
            <p>Feel free to contact me anytime at:<br /><a href="mailto:contact@gabrielgruter.com">contact@gabrielgruter.com</a><br />Or snoop into this site's <a href="https://github.com/gabrielgruter/react-to-gabe" target="__blank">source code</a></p>
            <br />
        </div>
    )
}
export default class G extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MediaQuery query="(orientation: portrait)">
                        <Route path="/" component={MobileSite} />
                    </MediaQuery>
                    <MediaQuery query="(orientation: landscape)">
                        <Route exact path="/" component={DesktopSite} />
                    </MediaQuery>
                </div>
            </Router>
        )
    }
}
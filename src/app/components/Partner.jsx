//component//Partners
import React from "react";

const Partner = () => {
    return (
        <section class="partner" style={{backgroundImage: `url(images/bg_pattern.png)`, backgroundColor: `white`}}>
        <div class="container pb-24">
            <div class="partner-top">
                <div class="row" style={{justifyContent: `space-between`}}>
                    <h2 class="latest-work">LATEST WORK</h2>
                    <ul class="work-list">
                        <li class="work-item"><a href="#">ALL</a></li>
                        <li class="work-item"><a href="#">INTERIOR</a></li>
                        <li class="work-item"><a href="#">CONSTRUCT</a></li>
                        <li class="work-item"><a href="#">REVAMP</a></li>
                    </ul>
                    <h2 class="all-projects">ALL PROJECTS</h2>
                </div>
            </div>
            <div class="dallas pt-20">
                <div class="row" style={{justifyContent: `space-between`}}>
                    <div class="columns">
                        <h1 class="project-title">SAN JOSE <br /> BRIDGE</h1>
                        <span class="project-category">construct, renovation</span>
                        <p class="project-description">
                            Short description for this project <br />
                            will place in here
                        </p>
                        <button class="project-button">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{height:`30` , width:`30`}}viewBox="0 0 512 512">
                                <path fill="#fcfcfc"
                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                            </svg>
                        </button>
                    </div>
                    <div class="columns project-image-container">
                        <img src="images/proj3.jpg" alt="San Jose Bridge" class="project-image" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="container pt-16">
            <div class="top-partner">
                <div class="row" style={{justifyContent: `space-around`}}>
                    <div class="columns">
                        <h1 class="partners-title">OUR PARTNERS</h1>
                    </div>
                    <div class="columns">
                        <p class="partners-description">We are proud to have been trusted and chosen by trusted
                            partners for the past 25 years,
                            here are the prominent names</p>
                    </div>
                </div>
            </div>
            <div class="partner-card pt-32">
                <div class="row" style={{justifyContent: `center`}}>
                    <a href="#" class="partner-box">
                        <p class="partner-number">1</p>
                        <img src="images/partners/lg1.svg" alt="Brand 1986" class="partner-logo" />
                        <h2 class="partner-name">BRAND 1986</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">2</p>
                        <img src="images/partners/lg2.svg" alt="Harley & Nick" class="partner-logo" />
                        <h2 class="partner-name">HARLEY & NICK</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">3</p>
                        <img src="images/partners/lg3.svg" alt="Colorfun" class="partner-logo" />
                        <h2 class="partner-name">COLORFUN</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">4</p>
                        <img src="images/partners/lg4.svg" alt="ARCNYC" class="partner-logo" />
                        <h2 class="partner-name">ARCNYC</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">5</p>
                        <img src="images/partners/lg5.svg" alt="Mathew Coo" class="partner-logo" />
                        <h2 class="partner-name">MATHEW COO</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">6</p>
                        <img src="images/partners/lg6.svg" alt="Zumar Cons" class="partner-logo" />
                        <h2 class="partner-name">ZUMAR CONS</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">7</p>
                        <img src="images/partners/lg7.svg" alt="Rogerark" class="partner-logo" />
                        <h2 class="partner-name">ROGERARK</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">8</p>
                        <img src="images/partners/lg8.svg" alt="Odd Group" class="partner-logo" />
                        <h2 class="partner-name">ODD GROUP</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">9</p>
                        <img src="images/partners/lg9.svg" alt="Star Interior Design" class="partner-logo"
                            style={{margin: `0`,marginLeft: `20px`}} />
                        <h2 class="partner-name">STAR INTERIOR DESIGN</h2>
                    </a>
                    <a href="#" class="partner-box">
                        <p class="partner-number">10</p>
                        <img src="images/partners/lg10.svg" alt="DD Group" class="partner-logo" />
                        <h2 class="partner-name">DD GROUP</h2>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Partner;    
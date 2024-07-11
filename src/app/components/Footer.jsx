import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="top-footer" style= {{color: `white`}}>
                    <div class="row">
                        <div class="columns logo">
                            <img src="images/logo.png" alt="Logo" />
                        </div>
                        <div class="columns private-client">
                            <a href="#" class="links">PRIVATE CLIENT</a>
                        </div>
                        <div class="columns nav-links">
                            <ul class="nav-list">
                                <li class="nav-item"><a href="#" class="links">COMPANY</a></li>
                                <li class="nav-item"><a href="#" class="links">SERVICES</a></li>
                                <li class="nav-item"><a href="#" class="links">WORKS</a></li>
                                <li class="nav-item"><a href="#" class="links">NEWS</a></li>
                                <li class="nav-item"><a href="#" class="links">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-box">
                    <div class="row" style={{justifyContent: `center`}}>
                        <div class="columns description">
                            <h1 class="description-title">TIMELESS, <br />SUSTAINABLE & <br />STABLE</h1>
                        </div>
                        <div class="columns contact-details">
                            <div class="contact-info">
                                <h1 class="city-title">MUMBAI</h1>
                                <ul class="contact-list">
                                    <li>49-center of mumbai</li>
                                    <li>+11 7868968</li>
                                    <li>xyz@gmail.com</li>
                                </ul>
                            </div>
                            <div class="contact-info">
                                <h1 class="city-title">DELHI</h1>
                                <ul class="contact-list">
                                    <li>52-center of delhi</li>
                                    <li>+91 34264632662</li>
                                    <li>xyz5@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="columns works">
                            <h1 class="works-title">WORKS</h1>
                            <ul class="works-list">
                                <li>Orlando Park</li>
                                <li>Dumbarton Bridge</li>
                                <li>Houston Port</li>
                                <li>France BMF Terminal</li>
                                <li>Golden Tower Residence</li>
                                <li>Oregon Office Building</li>
                                <li>Dallas Museum</li>
                            </ul>
                        </div>
                        <div class="columns social">
                            <h1 class="social-title">SOCIAL</h1>
                        </div>
                    </div>
                </div>
                <div class="last-row">
                    <div class="row">
                        <div class="columns language-selector">
                            <select class="language-dropdown">
                                <option value="english">ENGLISH</option>
                                <option value="spanish">SPANISH</option>
                            </select>
                        </div>
                        <div class="columns footer-note">
                            <p>&copy;2024 DESIGN BY GAURAV KUMAR, XZECT LABS PRIVATE LIMITED</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
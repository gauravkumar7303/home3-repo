import React from "react";

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="top-info">
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div className="column">
                            <h2>OUR SERVICES</h2>
                        </div>
                        <div className="column">
                            <p>
                                ARCHIN Constructions has a passion for perfection. We see great value in focusing on the
                                finer details that can make a big difference to the end result.
                            </p>
                        </div>
                        <div className="column">
                            <p>
                                Our commitment to quality design & projects are always delivered to an exceptional
                                standard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-card">
                    <div className="row">
                        <div className="card left slide-left">
                            <a href="#" className="card-link">
                                <div className="num">
                                    <span>1</span>
                                </div>
                                <div className="img">
                                    <img src="images/service-card/ser1.jpg" alt="Interior" className="img-cover" />
                                </div>
                                <div className="card-info">
                                    <p>24 CASES</p>
                                    <h2>INTERIOR</h2>
                                </div>
                            </a>
                        </div>
                        <div className="card top slide-top">
                            <a href="#" className="card-link">
                                <div className="num">
                                    <span>2</span>
                                </div>
                                <div className="img">
                                    <img src="images/service-card/ser2.jpg" alt="Construction" className="img-cover" />
                                </div>
                                <div className="card-info">
                                    <p>52 CASES</p>
                                    <h2>CONSTRUCTION</h2>
                                </div>
                            </a>
                        </div>
                        <div className="card right slide-right">
                            <a href="#" className="card-link">
                                <div className="num">
                                    <span>3</span>
                                </div>
                                <div className="img1" style={{ margin: '20px' }}>
                                    <img src="images/service-card/ser3.jpg" alt="Revamp" className="img-cover1" />
                                </div>
                                <div className="card-info">
                                    <p>24 CASES</p>
                                    <h2>REVAMP</h2>
                                </div>
                            </a>
                            <div className="mini-card full-review">
                                <div className="minibox"></div>
                                <a href="#" className="card-link">
                                    <p style={{ fontSize: '28px' }}>Full <br /> Review</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

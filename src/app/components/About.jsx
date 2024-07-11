import React from "react";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h1 className="title">SINCE 1996</h1>
                        <p className="paragraph">
                            We specialise in a wide range of construction services for private and commercial clients
                            ranging from extensions to complete renovations and development.
                        </p>
                        <p className="paragraph">
                            With the foundations built upon family and an ethos of hard work and integrity,
                            Archin Contractors Co. has become a leading contractor in North Carolina of the United States.
                        </p>
                        <button className="about-button">ABOUT US</button>
                    </div>
                    <div className="column" style={{ width: '300px' }}>
                        <img src="images/about_pat.png" alt="" srcSet="" className="about_pat" />
                        <div className="award">
                            <h1 className="award-title">54</h1>
                            <p className="award-text">AWARDS & RECOGNITIONS</p>
                        </div>
                    </div>
                    <div className="column" style={{ width: '300px' }}>
                        <div className="projects">
                            <h1 className="projects-title">154</h1>
                            <p className="projects-text">COMPLETED PROJECTS <br /> IN 26+ CITIES</p>
                        </div>
                    </div>
                    <div className="column" style={{ width: '300px' }}>
                        <div className="experience">
                            <h1 className="experience-title">25</h1>
                            <p className="experience-text">YEARS<br />EXPERIENCE</p>
                        </div>
                    </div>
                </div>
                <img src="images/about.jpg" alt="About" className="about-image slide-right" />
            </div>
        </section>
    );
};

export default About;


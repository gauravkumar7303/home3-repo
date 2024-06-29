// components/About.js
import React from "react";

const About = () => {
    return (
        <section className="about py-24">
            <div className="container w-11/12 px-3 m-auto">
                <div className="row flex flex-wrap">
                    <div className="columns w-96">
                        <h1 className="text-4xl mb-10">SINCE 1969</h1>
                        <p className="pt-4 pb-4">We specialise in a wide range of construction services for private and
                            commercial clients
                            ranging from extensions, to complete renovations and development.</p>
                        <p className="pb-4"> With the foundations built upon family and an ethos of hard work and integrity,
                            Archin
                            Contractors Co. has become a leading contractor in North Carolina of United States.</p>
                        <button className="p-4 mt-12 bg-white hover:bg-orange-500 hover:text-white hover:shadow-2xl" style={{border: `1px solid black;`}}>ABOUT US</button>
                    </div>
                    <div className="columns w-96">
                    <div className="columns w-48 h-48 p-6 ml-40 mt-16" style={{border:`1px solid gray;`}}>
                            <h1 className="mb-4 text-4xl">54</h1>
                            <p className="p-4 pl-0 pt-8">
                                AWARDS & <br />
                                RECOGNITONS <br />
                            </p>
                        </div>
                    </div>
                    <div className="columns w-64">
                    <div className="columns w-60 h-60 p-6 mt-64 bg-white z-1 mb-4" style={{border:`1px solid gray;`}}>
                            <h1 className="mb-4 text-5xl">154</h1>
                            <p className="p-4 pl-0 pt-8">
                                COMPLETED PROJECTS <br />
                                IN 26+ CITIES
                            </p>
                        </div>
                    </div>
                    <div className="columns w-64">
                    <div className="columns w-72 h-72 p-6" style={{border:`1px solid gray` ,backgroundColor: `orange`}}>
                            <h1 className="mb-4 text-6xl">25</h1>
                            <p className="p-4 text-right pl-0 pt-20">
                                YEARS<br />
                                EXPERINECE
                            </p>
                        </div>
                    </div>
                </div>
                <img src="/images/about.jpg" alt=""
                    style={{maxWidth: `100%`, maxHeight: `100%`, filter: `grayscale(1)`}} className="ml-5 mt-4 right" />
            </div>
        </section>
    );
};

export default About;

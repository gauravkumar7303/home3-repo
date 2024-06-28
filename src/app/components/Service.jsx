// components/Services.js
import React from "react";

const Services = () => {
    return (
        <section className="services py-24">
            <div className="container m-auto px-3.5 w-11/12">
                <div className="top-info w-full">
                    <div className="row flex justify-between w-full" style={{ flexWrap: 'wrap' }}>
                        <div className="columns-3xs mb-2.5" style={{ width: '445px' }}>
                            <h1 className="text-3xl mb-2.5">OUR SERVICES</h1>
                        </div>
                        <div className="columns-3xs mb-2.5" style={{ width: '445px' }}>
                            <p>
                                ARCHIN Constructions has a passion for perfection. We see great value in focusing on the finer details that
                                can make a big difference to the end result.
                            </p>
                        </div>
                        <div className="columns-3xs mb-2.5" style={{ width: '445px' }}>
                            <p>
                                Our commitment to quality design & projects are always delivered to an exceptional standard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-card pt-10 px-1">
                    <div className="row flex w-full" style={{ flexWrap: 'wrap' }}>
                        <div className="columns p-6 bg-white" style={{ width: `455px`, border: `1px solid gray` }}>
                            <a href="#" className="hover:text-orange-500">
                                <p className="text-right">1</p>
                                <div className="img m-20">
                                    <img src="ser1.jpg" alt="" srcset="" className="rounded-full" style={{ width: `240px`, height: `240px` }} />
                                </div>
                                <div className="info">
                                    <p>24 cases</p>
                                    <h1 className="text-4xl mt-2">INTERITOR</h1>
                                </div>
                            </a>
                        </div>
                        <div className="columns p-6 bg-white" style={{ width: `550px`, border: `1px solid gray` }}>
                            <a href="#" className="hover:text-orange-500">
                                <p className="text-right">2</p>
                                <div className="img m-20">
                                    <img src="ser2.jpg" alt="" srcset="" className="rounded-full" style={{ width: `240px`, height: `240px` }} />
                                </div>
                                <div className="info">
                                    <p>52 cases</p>
                                    <h1 className="text-4xl mt-2">CONSTRUCT</h1>
                                </div>
                            </a>
                        </div>
                        <div className="columns  bg-white" style={{ width: `290px`, border: `1px solid gray` }}>
                            <div className="columns p-2">
                            <a href="#" className="hover:text-orange-500" style={{ height: `300px` }}>
                                <p className="text-right">3</p>
                                <div className="img m-16">
                                    <img src="ser3.jpg" alt="" srcset="" className="rounded-full" style={{ width: `120px`, height: `120px` }} />
                                </div>
                                <div className="info">
                                    <p>22 cases</p>
                                    <h1 className="text-4xl mt-2">REVAMP</h1>
                                </div>
                            </a>
                            </div>
                            <div className="columns bg-white p-4 pt-16" style={{height:`200px`, border:`1px solid gray`}}>
                                <div className="minibox absolute" style={{ marginLeft:`193px`, marginTop:`57px`,width:`80px`, height:`80px`, backgroundImage:`-webkit-linear-gradient(135deg, #ECECEC 50%, white 50%)`}}></div>
                                <a href="#"className="text-3xl hover:text-orange-500">FULL <br />
                                REVIEW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;

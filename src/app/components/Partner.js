//component//Partners
import React from "react";

const Partner = () => {
    return (
        <section className="partners" style={{ backgroundImage: `url(/images/bg_pattern.png)`, paddingTop: `96px`, paddingBottom: `96px`, backgroundColor: `white` }}>
            <div className="container w-10/12 m-auto pb-24">
                <div className="partner-top">
                    <div className="row flex flex-wrap justify-between align-middle">
                        <h1 className="text-2xl mt-2 mb-2">LATEST WORK</h1>
                        <ul className="list-none flex">
                            <li className="p-3 hover:text-orange-500"><a href="#">ALL</a></li>
                            <li className="p-3 hover:text-orange-500"><a href="#">INTERIOR</a></li>
                            <li className="p-3 hover:text-orange-500"><a href="#">CONSTRUCT</a></li>
                            <li className="p-3 hover:text-orange-500"><a href="#">REVAMP</a></li>
                        </ul>
                        <h1 className="mt-2 mb-2">ALL PROJECTS</h1>
                    </div>
                </div>
                <div className="dallas pt-20">
                    <div className="row flex flex-wrap">
                        <div className="columns" style={{ width: `420px` }}>
                            <h1 className="text-4xl mb-6">
                                SAN JOSE <br /> BRIDGE</h1>
                            <span>construct, renovation</span>
                            <p className="mt-4">
                                Short description for this project <br />
                                will place in here
                            </p>
                            <button className="w-20 h-20 p-3 mt-24" style={{ backgroundColor: `orange` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                                    <path fill="#fcfcfc"
                                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                </svg>
                            </button>
                        </div>
                        <div className="columns" style={{ width: `700px` }}>
                            <img src="/images/proj3.jpg" alt="Project Image" style={{ maxWidth: `100%`, marginTop: `10px` }} />
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="container w-10/12 m-auto pt-16">
                <div className="top">
                    <div className="row flex flex-wrap">
                        <div className="columns" style={{ width: `600px` }}>
                            <h1 className="text-3xl mb-6">OUR PARTNERS</h1>
                        </div>
                        <div className="columns" style={{ width: `600px` }}>
                            <p>We are proud to have been trusted and chosen by trusted partners for the past 25 years,
                                here are the prominent names</p>
                        </div>
                    </div>
                </div>
                <div className="partner-card pt-28 left">
                    <div className="row flex flex-wrap px-16">
                    <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">1</p>
                            <img src="images/partners/lg1.svg" alt="" class="m-4" />
                            <h2 class="pt-10">BRAND 1986</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">2</p>
                            <img src="images/partners/lg2.svg" alt="" class="m-4" />
                            <h2 class="pt-10">HARLEY & NICK</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">3</p>
                            <img src="images/partners/lg3.svg" alt="" class="m-4" />
                            <h2 class="pt-10">COLORFUN</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">4</p>
                            <img src="images/partners/lg4.svg" alt="" class="m-4" />
                            <h2 class="pt-10">ARCNYC</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">5</p>
                            <img src="images/partners/lg5.svg" alt="" class="m-4" />
                            <h2 class="pt-10">MATHEW COO</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">6</p>
                            <img src="images/partners/lg6.svg" alt="" class="m-4" />
                            <h2 class="pt-10">ZUMAR CONS</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">7</p>
                            <img src="images/partners/lg7.svg" alt="" class="m-4" />
                            <h2 class="pt-10">ROGERARK</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">8</p>
                            <img src= "images/partners/lg8.svg" alt="" class="m-4" />
                            <h2 class="pt-10">ODD GROUP</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">9</p>
                            <img src="images/partners/lg9.svg" alt="" class="m-4" />
                            <h2 class="pt-2">STAR INTERITOR DESIGN</h2>
                        </a>
                        <a href="#" class="w-52 h-52 p-4" style={{border: `1px solid gray`}}>
                            <p class="text-right">9</p>
                            <img src="images/partners/lg10.svg" alt="" class="m-4" />
                            <h2 class="pt-2">DD GROUP</h2>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;    
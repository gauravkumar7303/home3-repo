'use client';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInnerRef = useRef(null);
    const autoSlideInterval = useRef(null);

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        if (carouselInnerRef.current) {
            carouselInnerRef.current.style.transform = `translateX(${offset}%)`;
        }
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
        resetAutoSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
        resetAutoSlide();
    };

    const autoSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval.current);
        autoSlideInterval.current = setInterval(autoSlide, 3000);
    };

    useEffect(() => {
        updateCarousel();
    }, [currentIndex]);

    useEffect(() => {
        autoSlideInterval.current = setInterval(autoSlide, 3000);
        return () => clearInterval(autoSlideInterval.current);
    }, []);

    /* Your existing JavaScript code */
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%"; /* Adjust the width as needed */
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };

    return (
        <header className="header" style={{ maxWidth: `100%` }}>
            <div className="carousel">
                <div className="carousel-inner" ref={carouselInnerRef}>
                    <div className="carousel-item">
                        <img src="images/slider/slider1.jpg" alt="Slide 1" />
                        <div className="carousel-content">
                            <div className="header-info">
                                <div className="row">
                                    <div className="column">
                                        <h1 className="text-4xl pt-10 pb-4">Project</h1>
                                    </div>
                                    <div className="column1">
                                        <div className="header-top mb-6">
                                            <div className="row" style={{ justifyContent: `space-between` }}>
                                                <h3 className="col">FEATURES</h3>
                                                <h3 className="col">GOURAV DESIGN & COO.</h3>
                                            </div>
                                            <hr />
                                            <div className="heading pt-8 pb-8">
                                                <h1 className="text-5xl">AMBER <br /> PROJECT PROGRESS <br /> 8/2023</h1>
                                            </div>
                                            <div className="par pb-10">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Iusto dolorem saepe eum deleniti.</p>
                                            </div>
                                            <div className="header-last">
                                                <div className="box" style={{ backgroundColor: `orange` }}>
                                                    <span style={{ fontSize: `50px` }}>&#8599;</span>
                                                </div>
                                                <div className="buttons mt-16">
                                                    <button id="prev" onClick={prevSlide}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                                        </svg>
                                                    </button>
                                                    <button id="next" onClick={nextSlide}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider/slider2.jpg" alt="Slide 2" />
                        <div className="carousel-content">
                            <div className="header-info">
                                <div className="row">
                                    <div className="column">
                                        <h1 className="text-4xl pt-10 pb-4">News</h1>
                                    </div>
                                    <div className="column1">
                                        <div className="header-top mb-6">
                                            <div className="row" style={{ justifyContent: `space-between` }}>
                                                <h3 className="col">FEATURES</h3>
                                                <h3 className="col">GOURAV DESIGN & COO.</h3>
                                            </div>
                                            <hr />
                                            <div className="heading pt-8 pb-8">
                                                <h1 className="text-5xl">OHIO<br />FINANCE OFFICE <br />BUILDING</h1>
                                            </div>
                                            <div className="par pb-10">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Iusto dolorem saepe eum deleniti.</p>
                                            </div>
                                            <div className="header-last">
                                                <div className="box w-20 h-20 text-center p-4" style={{ backgroundColor: `orange` }}>
                                                    <span style={{ fontSize: `50px` }}>&#8599;</span>
                                                </div>
                                                <div className="buttons mt-16">
                                                    <button id="prev" onClick={prevSlide}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                                        </svg>
                                                    </button>
                                                    <button id="next" onClick={nextSlide}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider/slider3.jpg" alt="Slide 3" />
                        <div className="carousel-content">
                            <div className="header-info">
                                <div className="row">
                                    <div className="column">
                                        <h1 className="text-4xl pt-10 pb-4">BUILDS</h1>
                                    </div>
                                    <div className="column1">
                                        <div className="row">
                                            <div className="header-top mb-6">
                                                <div className="row" style={{ justifyContent: `space-between` }}>
                                                    <h3 className="col">PHILOSOPHY</h3>
                                                    <h3 className="col">GOURAV DESIGN & COO.</h3>
                                                </div>
                                                <hr />
                                                <div className="heading pt-8 pb-8">
                                                    <h1 className="text-5xl">TIMELESS<br /> SUSTAINABLE & <br /> STABLE</h1>
                                                </div>
                                                <div className="par pb-10">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Iusto dolorem saepe eum deleniti.</p>
                                                </div>
                                                <div className="header-last">
                                                    <div className="box w-20 h-20 text-center p-4" style={{ backgroundColor: `orange` }}>
                                                        <span style={{ fontSize: `50px` }}>&#8599;</span>
                                                    </div>
                                                    <div className="buttons mt-16">
                                                        <button id="prev" onClick={prevSlide}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                                            </svg>
                                                        </button>
                                                        <button id="next" onClick={nextSlide}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: `20px`, width: `20px` }}>
                                                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="row" style={{ justifyContent: "space-around" }}>
                    <div className="columns"> <img src="logo.png" alt="" /></div>
                    <div className="columns">
                        <select name="" id="" style={{ padding: "10px" }}>
                            <option value="client">Private client1</option>
                            <option value="client">Private client2</option>
                        </select>
                    </div>
                    <div className="columns-">
                        <div className="nav-side">
                            <a href="#" className="link">free Consulation<i className="fa-light fa-arrow-up-right" style={{ color: "#fcfcfc" }}></i></a>
                            <a href="#" className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "16px", width: "16px" }}>
                                    <path fill="#fafcff" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                </svg>
                            </a>
                            <a href="#" className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "16px", width: "16px" }}>
                                    <path fill="#fafcff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </a>
                            <a href="#" className="link">
                                <span style={{ fontSize: "16px", cursor: "pointer", float: "right" }} onClick={() => openNav()}>&#9776;</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="mySidenav" className="sidenav" style={{backgroundImage: `url(images/bg_pattern.png)`}}>
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                    <a href="#"><h2>About</h2></a>
                    <a href="#"><h2>Services</h2></a>
                    <a href="#"><h2>Clients</h2></a>
                    <a href="#"><h2>Contact</h2></a>
                </div>
            </div>

        </header>
    );
};

export default Header;

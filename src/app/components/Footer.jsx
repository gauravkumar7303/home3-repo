import React from "react";

const Footer = () => {
    return (
        <footer className="footer py-16" style={{backgroundColor: `#393E46`}}>
        <div className="container w-10/12 m-auto">
            <div className="row flex flex-wrap">
                <div className="top-footer columns">
                    <div className="row flex flex-wrap">
                        <div className="columns w-96">
                            <img src="images/logo.png" alt="" srcset="" />
                        </div>
                        <div className="columns w-96">
                            <a href="#" style={{color: `white`}} className=" hover:text-orange-500">PRIVATE CLIENT</a>
                        </div>
                        <div className="columns w-96">
                            <ul className="list-none flex">
                                <li className="p-1 hover:text-orange-500"><a href="#" style={{color: `white`}}>COMPANY</a></li>
                                <li className="p-1 hover:text-orange-500"><a href="#" style={{color: `white`}}>SERVICES</a></li>
                                <li className="p-1 hover:text-orange-500"><a href="#" style={{color: `white`}}>WORKS</a></li>
                                <li className="p-1 hover:text-orange-500"><a href="#" style={{color: `white`}}> NEWS</a></li>
                                <li className="p-1 hover:text-orange-500"><a href="#" style={{color: `white`}}>CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-box columns pt-28">
                    <div className="row flex flex-wrap">
                        <div className="columns mb-6" style= {{width: `316px` , color: `white`}}>
                           <h1 className="text-2xl">
                            TIMELESS, <br />
                            SUSTAINABLE & <br />
                            STABLE <br />
                           </h1>
                        </div>
                        <div className="columns mb-6"  style= {{width: `316px` , color: `white`}}>
                           <div className="columns mb-6">
                            <h1 className="text-2xl mb-8">MUMBAI</h1>
                                    <ul className="list-none" style={{fontSize: `16px`}}>
                                        <li>49-center of mumbai</li>
                                        <li>+11 7868968</li>
                                        <li>xyz@gmail.com</li>
                                    </ul>
                           </div>
                           <div className="columns mb-6">
                            <h1 className="text-2xl mb-8">DELHI</h1>
                                    <ul className="list-none"  style={{fontSize: `16px`}}>
                                        <li>52-center of delhi</li>
                                        <li>+91 34264632662</li>
                                        <li>xyz5@gmail.com</li>
                                    </ul>
                           </div>
                        </div>
                        <div className="columns mb-6"  style= {{width: `316px` , color: `white`}}>
                           <h1 className="text-2xl mb-8">WORKS</h1>
                           <ul className="list-none">
                            <li className="py-2">Orlando Park</li>
                            <li className="py-2">Dumbarton Bridge</li>
                            <li className="py-2">Houston Port</li>
                            <li className="py-2">France BMF Terminal</li>
                            <li className="py-2">Golden Tower Residence</li>
                            <li className="py-2">Oregon Office Building</li>
                            <li className="py-2">Dallas Museum</li>
                           </ul>
                        </div>
                        <div className="columns mb-6"  style= {{width: `316px` , color: `white`}}>
                        <h1 className="text-2xl">SOCIAL</h1>
                        </div>
                    </div>
                </div>
                <div className="last-row columns pt-16">
                    <div className="row flex flex-wrap">
                        <div className="columns w-96 mb-4" style={{color: `white`}} >
                            <select name="" id="" className="p-2" style={{background:`none` , border: `1px solid white`}}>
                                <option value="english" style={{color: `black`}} >ENGLISH</option>
                                <option value="spanish" style={{color: `black`}} >SPANISH</option>
                            </select>
                        </div>
                        <div className="columns w-96" style={{color: `white`}} >
                            <p>&copy;2024 DESIGN BY GAURAV KUMAR (TAILWIND CSS & NEXT.JS), XZECT LABS PRIVATE LIMITED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;
import React from "react";
 
const Location = () => {
    return(
        <section className="contact py-24 bg-white">
        <div className="container m-auto w-10/12">
            <div className="row flex flex-wrap">
                <div className="columns" style={{width: `400px`}}>
                    <h1 className="text-3xl">OUR LOCATION</h1>
                    <div className="map-side " style={{width:`400px`}}>
                        <img src="/images/map.png" alt=""
                            style={{maxWidth: `100%`, marginLeft: `-130px`, backgroundColor: `white`}} />
                    </div>
                </div>
                <div className="columns" style={{width: `800px`}}>
                    <div className="row flex flex-wrap">
                        <div className="top-contact columns">
                            <div className="row flex flex-wrap">
                                <div className="columns w-96 mt-1 mb-6">
                                    <h1 className="text-4xl mb-8">MUMBAI</h1>
                                    <ul className="list-none" style={{fontSize: `16px`}}>
                                        <li>49-center of mumbai</li>
                                        <li>+11 7868968</li>
                                        <li>xyz@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="columns w-96">
                                    <h1 className="text-4xl mb-8">DELHI</h1>
                                    <ul className="list-none" style={{fontSize: `16px`}}>
                                        <li>52-center of delhi</li>
                                        <li>+91 867938626</li>
                                        <li>xy9@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="columns form-contact mt-20">
                            <div className="row flex flex-wrap">
                                <div className="columns">
                                    <h1 className="text-4xl mb-6">HIRE US NOW</h1>
                                    <span style={{color: `red`}}>*Marked fields must need to fill</span>
                                    <form action="" method="post">
                                        <div className="row flex flex-wrap">
                                            <div className="columns mb-4" style={{width: `400px`}}>
                                                <label for="fullname" className="block"><span
                                                        style={{color: `red`}}>*</span>FULL NAME</label>
                                                <input type="text" id="fullname" placeholder="enter your name here"
                                                    className="p-4 w-96" style={{border: `1px solid gray`}} />
                                            </div>
                                            <div className="columns mb-4"style={{width: `400px`}}>
                                                <label for="email" className="block"><span
                                                        style={{color: `red`}}>*</span>EMAIL ADDRESS</label>
                                                <input type="text" id="email" placeholder="enter your email here"
                                                    className="p-4 w-96" style={{border: `1px solid gray`}} />
                                            </div>
                                            <div className="columns mb-4" style={{width: `400px`}}>
                                                <label for="phoneno" className="block"><span
                                                      style={{color: `red`}}>*</span>PHONE NUMBER</label>
                                                <input type="text" id="phoneno"
                                                    placeholder="enter your phone number here" className="p-4 w-96"
                                                    style={{border: `1px solid gray`}} />
                                            </div>
                                            <div className="columns mb-4" style={{width: `400px`}}>
                                                <label for="phoneno" className="block">SUBJECT (OPTIONAL)</label>
                                                <input type="number" id="phoneno"
                                                    placeholder="enter your subject here" className="p-4 w-96"
                                                    style={{border: `1px solid gray`}} />
                                            </div>
                                            <div className="columns mb-4">
                                                <label for="message" className="block">Message</label>
                                                <textarea name="" id="message" cols="45" rows="10"
                                                    placeholder="write your message here"
                                                    style={{border:`1px solid gray` ,padding: `4px`}}></textarea>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="columns mb-4 block">
                                        <input type="file" name="" id="file" />
                                        <label for="file">ADD AN ATTACHMENT</label>
                                    </div>
                                    <div className="columns mb-4 block">
                                        <input type="checkbox" name="" id="checkbox" />
                                        <label for="checkbox">By summiting, I'm agree to the <a href="#"
                                                style={{color: `gray` ,textDecoration: `underline`}}>Terms &
                                                Conditions</a></label>
                                    </div>
                                    <button className="p-2 w-52 bg-white mt-16 hover:bg-orange-500 hover:text-white hover:shadow-2xl" style={{border: `1px solid black`}}>SEND
                                        MESSAGE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Location;
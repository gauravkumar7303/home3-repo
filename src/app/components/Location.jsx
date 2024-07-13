import React from "react";
 
const Location = () => {
    return(
        <section class="contact">
        <div class="container">
            <div class="row">
                <div class="columns location">
                    <h1 class="location-title">OUR LOCATION</h1>
                    <div class="map-side">
                        <img src="images/map.png" alt="Map" class="map-image" />
                    </div>
                </div>
                <div class="columns contact-info">
                    <div class="top-contact">
                        <div class="row">
                            <div class="columns city-info">
                                <h1 class="city-title">MUMBAI</h1>
                                <ul class="contact-details">
                                    <li>49-center of mumbai</li>
                                    <li>+11 7868968</li>
                                    <li>xyz@gmail.com</li>
                                </ul>
                            </div>
                            <div class="columns city-info">
                                <h1 class="city-title">DELHI</h1>
                                <ul class="contact-details">
                                    <li>52-center of delhi</li>
                                    <li>+91 867938626</li>
                                    <li>xy9@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="form-contact">
                        <div class="row">
                            <div class="columns" style={{width: `100%`}}>
                                <h1 class="form-title">HIRE US NOW</h1>
                                <span class="required-fields-note">*Marked fields must need to fill</span>
                                <form action="" method="post">
                                    <div class="row">
                                        <div class="columns form-group">
                                            <label for="fullname" class="form-label"><span
                                                    class="required">*</span>FULL NAME</label>
                                            <input type="text" id="fullname" placeholder="Enter your name here"
                                                class="form-input" />
                                        </div>
                                        <div class="columns form-group">
                                            <label for="email" class="form-label"><span
                                                    class="required">*</span>EMAIL ADDRESS</label>
                                            <input type="text" id="email" placeholder="Enter your email here"
                                                class="form-input" />
                                        </div>
                                        <div class="columns form-group">
                                            <label for="phoneno" class="form-label"><span
                                                    class="required">*</span>PHONE NUMBER</label>
                                            <input type="text" id="phoneno"
                                                placeholder="Enter your phone number here" class="form-input" />
                                        </div>
                                        <div class="columns form-group">
                                            <label for="subject" class="form-label">SUBJECT (OPTIONAL)</label>
                                            <input type="text" id="subject" placeholder="Enter your subject here"
                                                class="form-input" />
                                        </div>
                                        <div class="columns form-group">
                                            <label for="message" class="form-label">MESSAGE</label>
                                            <textarea id="message" cols="45" rows="10"
                                                placeholder="Write your message here"
                                                class="form-textarea"></textarea>
                                        </div>
                                    </div>
                                    <div class="column2 form-group">
                                        <input type="file" id="file" class="form-file-input" />
                                        <label for="file" id="attach" class="form-file-label">ADD AN ATTACHMENT</label>
                                    </div>
                                    <div class="column2 form-group">
                                        <input type="checkbox" id="checkbox" class="form-checkbox" />
                                        <label for="checkbox" class="form-checkbox-label">By submitting, I agree to
                                            the <a href="#" class="terms-link">Terms & Conditions</a></label>
                                    </div>
                                </form>
                                <button class="submit-button">SEND MESSAGE</button>
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
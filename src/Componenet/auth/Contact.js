import React from "react";
import { Icon } from '@iconify/react';



const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-container">
                    <div className="content">
                        <div className="l1-side">y
                            <div className="address details">
                            <Icon icon="material-symbols:location-on" color="#04aa6d" width="30" height="30" />
                        
                             {/* 
                                <i className="fas fa-map-marker-alt"></i> */}
                                <div className="a1">Address</div>
                                <div className="text-1">Safal Prelude, 805,
                                    100 Feet Rd, Vasna Telephone Exchange,
                                    Ashwaraj Bunglows, Prahlad Nagar,
                                </div>
                                <div className="text-2">Ahmedabad, Gujarat 380015</div>
                            </div>
                            <div className="phone details">
                            <Icon icon="material-symbols:perm-phone-msg" color="#04aa6d" width="20" height="30" />

                                <div className="a1">Phone</div>
                                <div className="text-1">+4410-4410</div>
                                <div className="text-2">+02244 104444</div>
                            </div>
                            <div className="email details">
                               <Icon icon="material-symbols:mark-email-unread-outline" color="#04aa6d" width="30" height="30" />
                                <div className="a1">Email</div>
                                <div className="text-1">help@porter.in</div>
                                <div className="text-2">packermover@theporter.in</div>
                            </div>
                        </div>
                        <div className="r1-side">
                            <div className="a1-text">Send us a message</div>
                            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                            <form className="contact-form">
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="input-box message-box">
                                    <input type="text" placeholder="Enter Your message" />
                                </div>
                                <div className="t1-btn">
                                    <button className="t1-btn">SEND NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
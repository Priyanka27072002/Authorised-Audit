import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import "./Contactus.css"
const Contactus=()=>{
    return <div>
        <div className="internal-nav">
            <div className="internal-nav-container">
                <ul className="internal-nav-liast">
                    <li>Home</li>
                </ul>
                <ul className="internal-nav-print">
                    <li>PRINT &nbsp;<HiPrinter className="internal-nav-icon"/></li>
                    <li>SHARE &nbsp;<IoShareSocialOutline className="internal-nav-icon"/></li>
                </ul>
            </div>
        </div>
        <div className="internal-contact-banner">
            <div className="contact-container">
                <h1>General enquiries</h1>
            </div>
        </div>
        <div className="contact-form">
            <div className="contact-form-container">
                <form>
                    <div className="labelcont">
                        <label className="cont-label">First name</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="labelcont">
                        <label className="cont-label">Last name</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="comlabel">
                        <label className="cont-com">Company name</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="joblabel">
                        <label className="cont-job">Job title</label>
                    </div>
                   <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="country-label">
                        <label className="cont-country">Country of residence</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="bus-label">
                    <label className="cont-bus">Business phone</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="sub-label">
                        <label className="cont-sub">Subject</label>
                    </div>
                    <div className="contact-form-input">
                        <input type="text"/>
                    </div>

                    <div className="msg-label">
                        <label className="cont-msg">Message</label>
                    </div>
                   <div className="contact-form-text">
                        <textarea rows={7}></textarea>
                    </div>
                    <div className="cont-form-btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default Contactus
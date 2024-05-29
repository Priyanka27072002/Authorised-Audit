import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Ourpeople.css"
const Ourpeople=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    return <div>
        <div className="internal-nav">
            <div className="internal-nav-container">
                <ul className="internal-nav-liast">
                    <li onClick={gotohome} className="inernal-nav-home">Home</li>
                </ul>
                <ul className="internal-nav-print">
                    <li>PRINT &nbsp;<HiPrinter className="internal-nav-icon"/></li>
                    <li>SHARE &nbsp;<IoShareSocialOutline className="internal-nav-icon"/></li>
                </ul>
            </div>
        </div>
        <div className="ourpeople-banner">
            <div className="ourpeople-empty"></div>
            <div className="ourpeople-head">
                <h1>Ourpeople</h1>
            </div>
        </div>
        <div>
            <div className="ourpeople-container">
                <div className="ourpeople-detail">
                    <h3>Our people are equipped with the requisite skills, industry acumen and experience to deliver customised solutions to help minimize the risks and maximise returns from your operations.</h3>
                    <h4><i>Authorised Audit globally* has a combined staff of 57,000 in over 830 offices across the Americas, Europe, MENA, Africa and Asia Pacific. Our teams practice under different industry and service verticals and work closely with our clients to offer tailored expertise for their local and global operations. Our clients across a wide range of businesses and borders benefit from our team’s ability to respond with speed and agility and the expertise of some of our industry’s most respected practitioners.  </i></h4>
                    <div className="ourpeople-detail-image">
                        <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/india/sites/default/files/media/01%20Global%20assets/03_Icons%20140x140px/Taking%20Charge%20of%20Change.png" alt="loading"/>
                    </div>
                    <div className="ourpeople-det-audit">
                        <h2>Authorised Audit in India has a multi-disciplinary team of over 3,000 professionals comprising of:</h2>
                        <ul>
                            <li>Chartered Accountants</li>
                            <li>Management Graduates</li>
                            <li>Engineers, CISA / ISA professionals and Information Technology professionals</li>
                            <li>Cost Accountants</li>
                            <li>Company Secretaries and Law Graduates</li>
                            <li>Doctorates and social scientists</li>
                        </ul>
                    </div>
                    <div className="ourpeople-det-touch">
                        <div className="ourpeople-det-help">
                            <h1>How can we help you?</h1>
                        </div>
                        <h4>To get in touch with one of our leaders who can support and empower you every step of the way:</h4>
                        <div className="ourpeople-det-list">
                            <ul>
                                <li>Contact us by phone +91 (22) 6108 5555 or +91 (22) 6121 4444</li>
                                <li>Visit our <span>offices section</span></li>
                                <li><span>Email</span> us or submit a <span>contact form</span> </li>
                            </ul>
                            <p>Please visit our <span>legal</span> section to know about the legal structure of the Authorised Audit network and Authorised Audit in India.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Ourpeople
import React, { useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import country from "../../images/country_icon.png";
import people from "../../images/people_icon.png";
import office from "../../images/office_icon.png";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import "./Aboutnav.css"
const Aboutnav=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    let [bool,setbool]=useState(false)
    let [bool2,setbool2]=useState(false)
    let [bool3,setBool3]=useState(false)
    let [bool4,setbool4]=useState(false)
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
        <div className="aboutnav-banner">
            <div className="aboutnav-ban-empty"></div>
            <div className="aboutnav-ban-head">
                <h1>About us</h1>
                <p>Authorised Audit is amongst India’s top tax, accounting and consulting groups with a pan India presence and a team of over 3,000 personnel.</p>
            </div>
        </div> 
        <div className="aboutus-para">
            <p>Authorised Audit is a powerful network of audit, tax and consulting experts with offices all over the world. As an integrated team, we share skills, insight and resources, as well as a client-centric approach that is based on a deep understanding of your business. This is how we empower you to move forward with confidence and realise your full potential. This is the Power of Being Understood.</p>
        </div>
        <div className="aboutnav-card">
            <div className="aboutnav-container">
            <div className="aboutnav-row">
                <div className="aboutnav-col1">
                    <div className="aboutnav-card-card">
                        <h1>Our mission</h1>
                        <p>“TO PARTNER WITH OUR CLIENTS TO FACILITATE ACHIEVEMENT OF THEIR STRATEGIC OBJECTIVES THROUGH CREATIVE SOLUTIONS THAT INTEGRATES PEOPLE, PROCESSES AND TECHNOLOGY”</p>
                    </div>
                </div>
                <div className="aboutnav-col2">
                    <p>Authorised Audit is a powerful network of audit, tax and consulting experts with offices all over the world. As an integrated team, we share skills, insight and resources, as well as a client-centric approach that is based on a deep understanding of your business. This is how we empower you to move forward with confidence and realise your full potential. This is the Power of Being Understood.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="aboutus-nav-det-list">
        <h2>Authorised Audit in India</h2>
            <div className="aboutus-nav-order-list">
                
                <ul>
                    <li>Authorised Audit India has been consistently ranked amongst India's top 6 tax, accounting and consulting groups [International Accounting Bulletins 2012-2022] </li>
                    <li>Indian member of Authorised Audit International, the 6th largest global assurance, tax and consulting network with annual global revenues of US$ 9.4 billion across 120 countries.</li>
                    <li>Indian personnel strength of over 3,000 </li>
                    <li>Pan India presence through offices in 12 key cities viz. Mumbai, New Delhi-NCR, Chennai, Kolkata, Bengaluru, Surat, Hyderabad, Ahmedabad, Pune, Gandhidham, Jaipur and Vijayanagar.</li>
                    <li>Multi-disciplinary team of professionals comprising of Chartered Accountants, Engineers, MBAs, IT Systems, Cyber Security and Forensics professionals, Company Secretaries and Law Graduates </li>
                    <li>Driven by entrepreneurial zeal, industry vertical focus and impeccable reputation </li>
                    <li>Clients include large Indian groups, multinational corporations, public sector undertakings and first generation businesses.</li>
                </ul>
            </div>
        </div>
        <div className="about-fact">
            <div className="about-nav-container">            
                <h1>Fast facts about Authorised Audit</h1>
                <div className="about-nav-row">
                    <div className="about-nav-col">
                        <div className="about-nav-image">
                            <img src={country} alt="loading"/>
                        </div>
                        <div className="about-nav-para">
                            <p>We have firms in 120 countries, with a presence in each of the top 40 major business centres throughout the world.</p>
                        </div>
                    </div>
                    <div className="about-nav-col">
                        <div className="about-nav-image">
                            <img src={people} alt="loading"/>
                        </div>
                        <div className="about-nav-para">
                            <p>We have a global team of 64,000 people</p>
                        </div>
                    </div>
                    <div className="about-nav-col">
                        <div className="about-nav-image">
                            <img src={office} alt="loading"/>
                        </div>
                        <div className="about-nav-para">
                            <p>We have over 820 offices across the Americas, Europe, MENA, Africa and Asia Pacific.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-nav-detail">
            <div className="about-nav-detail-container">
                <div className="about-nav-detail-row">
                    <div className="about-nav-detail-col1">
                        <p>Focused on exceeding expectations</p>
                        <h1>"At RSM, we believe in giving clients more. More understanding. More expertise. More confidence."</h1>
                    </div>
                    <div className="about-nav-detail-col2">
                        <div className="about-nav-detail-image">
                            <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/india/sites/default/files/01%20Global%20assets/02_Thumbnails%201240x930px/04_Portraiture%20thumbnails%201240x930px/pawan-02-portraiture-thumbnail-1240x930px.jpg" alt="loading"/>
                        </div>
                        <div className="about-nav-detail-list">
                            <p>Our key differentiators:</p>
                            <ul>
                                <li>We offer an unparalleled blend of global expertise and local knowledge </li>
                                <li>Every client can benefit from the expertise of our most senior leaders </li>
                                <li>We care about our clients’ business</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="about-nav-acc-container">
                <div className="about-acc-cont">
                    {
                        bool? <div className="about-nav-acc"  onClick={()=>setbool(false)}>
                        <p>Collaboration globally and locally</p>
                        <IoIosArrowUp />
                    </div>: <div className="about-nav-acc"  onClick={()=>setbool(true)}>
                        <p>Collaboration globally and locally</p>
                        <IoIosArrowDown />
                    </div>
                    }
                   {
                    bool?<p>We believe in providing all our clients with a consistent service that goes above and beyond their expectations, wherever they are in the world. That means supporting you with valuable expertise from a local perspective combined with the international knowledge and insights of our global professionals. This dual perspective empowers you to face the future with confidence.</p>:""
                   }
                    
                    
                </div>
                <div className="about-acc-cont">
                    {
                        bool2?<div className="about-nav-acc" onClick={()=>setbool2(false)}>
                        <p>Senior expertise, ideas and insights</p>
                        <IoIosArrowUp />
                    </div>:<div className="about-nav-acc" onClick={()=>setbool2(true)}>
                        <p>Senior expertise, ideas and insights</p>
                        <IoIosArrowDown />
                    </div>
                    }
                    {
                        bool2? <p>We believe that every one of our clients deserves access to the invaluable knowledge and industry acumen of our most senior global professionals. Whether you are an SME or a multi-national, you can always depend on the latest thinking from some of our industry’s most respected practitioners. We are proud to share their expertise with you, responding with speed and agility so you can meet each new challenge armed with all the relevant knowledge and insights.</p>:""
                    }
                </div>
                <div className="about-acc-cont">
                    {
                        bool3?<div className="about-nav-acc" onClick={()=>setBool3(false)}>
                        <p>Understanding our clients</p>
                        <IoIosArrowUp />
                    </div>:<div className="about-nav-acc" onClick={()=>setBool3(true)}>
                        <p>Understanding our clients</p>
                        <IoIosArrowDown />
                    </div>
                  }
                    {
                        bool3? <p>Our client relationships are based on mutual respect and collaboration. We will immerse ourselves in your business to gain a deeper understanding of who you are, what you believe in and what and what motivates you. We will take a 360 degree analysis of your markets, laws and customs enabling us to identify opportunities or challenges before they arise. By fully understanding your goals and measures of success, we can support and empower you every step of the way – maximising your potential.</p>:""
                    }
                   
                </div>
                <div className="about-acc-bot">
                    {
                        bool4?<div className="about-nav-acc" onClick={()=>setbool4(false)}>
                        <p>The advisor of choice to entrepreneurial growth-focused organisations globally</p>
                        <IoIosArrowUp />
                    </div>:<div className="about-nav-acc" onClick={()=>setbool4(true)}>
                        <p>The advisor of choice to entrepreneurial growth-focused organisations globally</p>
                        <IoIosArrowDown />
                    </div>
                    }
                    {
                        bool4?<p>We believe that every one of our clients deserves access to the invaluable knowledge and industry acumen of our most senior global professionals. Whether you’re a private client, an SME or a multi-national, you can always depend on the latest thinking from some of our industry’s most respected practitioners. We’re proud to share their expertise with you, responding with speed and agility so you can meet each new challenge armed with all the relevant knowledge and insights. Our clients range from growth-focused entrepreneurial businesses through to leading multi-national organisations across many sectors and operating nationally and across borders.</p>:""
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
}
export default Aboutnav
import React, { useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import country from "../images/country_icon.png";
import people from "../images/people_icon.png";
import office from "../images/office_icon.png"
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import card1 from "../images/aboutcard1.jpg";
import card2 from "../images/aboutcard2.jpg";
import card3 from "../images/aboutcard3.jpg"
import "./About.css"
import { useNavigate } from "react-router-dom";
const About=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    let [firstbool,setFirstbool]=useState(false) 
    let [secbool,setSecbool]=useState(false)
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
        <div className="about-banner">
            <div className="about-ban-head">
                <span>About us</span>
            </div>
            <div className="about-ban-para">
                <span>Instilling confidence in a world of change.</span>
            </div>
        </div>
        <div className="about-fact">
            <div className="about-container">            
                <h1>Fast facts</h1>
                <div className="about-row">
                    <div className="about-col">
                        <div className="about-fact-image">
                            <img src={country} alt="loading"/>
                        </div>
                        <div className="about-fact-para">
                            <p>We have firms in 120 countries, with a presence in each of the top 40 major business centres throughout the world.</p>
                        </div>
                    </div>
                    <div className="about-col">
                        <div className="about-fact-image">
                            <img src={people} alt="loading"/>
                        </div>
                        <div className="about-fact-para">
                            <p>We have a global team of 64,000 people</p>
                        </div>
                    </div>
                    <div className="about-col">
                        <div className="about-fact-image">
                            <img src={office} alt="loading"/>
                        </div>
                        <div className="about-fact-para">
                            <p>We have over 820 offices across the Americas, Europe, MENA, Africa and Asia Pacific.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="about-paragraph">
                <p>At Authorised Audit, we help clients overcome new challenges, embrace change and adapt to thrive. By working together, creating deep insights, combining world-class technology and real-world experience, we deliver understanding that’s unmatched, and confidence that builds. For a changing world. For the future. For all.</p>
                <p>Authorised Audit is a powerful Network of assurance, tax and consulting experts with offices all over the world. As an integrated team, we share skills, insight and resources, as well as a client-centric approach that’s based on a deep understanding of your business. This is how we empower you to move forward with confidence and realise your full potential. </p>
                <p>At Authorised Audit, we are here to support and advise you on a wide range of issues from audit and assurance, consulting, tax, risk advisory, IFRS, restructuring, transaction and business and financial advisory solutions. As well as these core services, around the world we offer a wide range of specialist services, such as wealth management, IT consulting, legal advisory, forensic accounting and human resource consulting. Our role is to support you to better understand your businesses, overcome challenges and achieve your aspirations.</p>
                <p className="about-para-last">We put ourselves at the heart of your business where we can be most effective. As your long-term adviser, we gain a deep understanding of every aspect of your business so we can respond with the right expertise and insights at the right time. Wherever you are in the world, you will enjoy the same seamless service, combining astute local knowledge with the global expertise of our most senior professionals. We’re passionate about your success and about empowering you so you can face the future with confidence.</p>
                <div className="about-para-color">
                    <p><i>As the leading provider of professional services to the middle market, our clients range from growth-focused entrepreneurial businesses through to leading multi-national organisations across many sectors and operating nationally and across borders.</i></p>
                </div>
                <div className="about-para-tilte">
                    <p><span>Focused on exceeding expectations -</span>At Authorised Audit, we believe in giving clients more. More understanding. More expertise. More confidence.</p>
                    <p><span>Collaboration globally and locally - </span>We believe in providing all our clients with a consistent service that goes above and beyond their expectations, wherever they are in the world. That means supporting you with valuable expertise from a local perspective combined with the international knowledge and insights of our global professionals. This dual perspective empowers you to face the future with confidence.</p>
                    <p><span>Senior expertise, ideas and insights - </span> We believe that every one of our clients deserves access to the invaluable knowledge and industry acumen of our most senior global professionals. Whether you’re an SME or a multi-national, you can always depend on the latest thinking from some of our industry’s most respected practitioners. We’re proud to share their expertise with you, responding with speed and agility so you can meet each new challenge armed with all the relevant knowledge and insights.</p>
                </div>
            </div>
        </div>
        <div>
            <div className="about-accordian">
                <div className="about-acc-body">
                    {
                        firstbool?<div className="about-acc-first" onClick={()=>setFirstbool(false)}> 
                            <p>The story of Authorised Audit</p><IoIosArrowUp />
                            </div>:<div className="about-acc-first" onClick={()=>setFirstbool(true)}>
                        <p>The story of Authorised Audit</p>
                        <IoIosArrowDown />
                    </div>
                    }
                    {
                        firstbool?<div className="about-acc-first-info">
                        <p>This book documents the history of Authorised Audit over the last six decades.</p>
                        <span>Read More</span>
                    </div>:""
                    }
                    
                </div>
                <div className="about-acc-two">
                    {
                        secbool?<div  className="about-acc-first" onClick={()=>setSecbool(false)}>
                        <p>What are Member Firms and Correspondent Firms?</p>
                        <IoIosArrowUp />
                    </div>:
                        <div  className="about-acc-first" onClick={()=>setSecbool(true)}>
                            <p>What are Member Firms and Correspondent Firms?</p>
                            <IoIosArrowDown />
                        </div>
                    }
                    {
                        secbool? <div className="about-acc-first-info">
                        <span>Learn More</span>
                    </div>:""
                    }
                   
                </div>
            </div>
        </div>
        <div className="about-card">
            <div className="about-card-container">
                <div className="about-card-row">
                    <div className="about-card-col">
                        <div className="about-card-image">
                            <img src={card1} alt="loading"/>
                        </div>
                        <div className="about-card-content">
                            <p>Global Leadership team</p>
                        </div>
                    </div>
                    <div className="about-card-col">
                        <div className="about-card-image">
                            <img src={card2} alt="loading"/>
                        </div>
                        <div className="about-card-content">
                            <p>Working for Authorised Audit</p>
                        </div>
                    </div>
                    <div className="about-card-col">
                        <div className="about-card-image">
                            <img src={card3} alt="loading"/>
                        </div>
                        <div className="about-card-content">
                            <p>The Authorised Audit experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default About
import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import card1 from "../../images/internalcard1.png";
import "./ITsystem.css"
const ITsystem=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    const gotothis=()=>{
        nav("/IT")
    }
    const gotocontact=()=>{
        nav("/contact")
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
        <div className="it-banner">
            <div className="it-banenr-empty"></div>
            <div className="it-banner-head">
                <h1>IT systems assurance and IT</h1>
                <h1>solutions</h1>
            </div>
        </div>
        <div className="it-details">
            <div className="it-details-container">
                <div className="it-details-first">
                    <h3>Thinking ahead and responding rapidly to your IT needs</h3>
                    <p>We provide a wide range of information technology (IT) systems assurance and IT and business consulting services through the dedicated IT arm of RSM in India. Our team of around 200 IT professionals based in India, bolstered by industry partnerships, enables us to provide cutting-edge IT solutions and products.</p>
                    <p>RSM in India has the prestigious recognition of being empanelled as an IT Security Auditing Organisation with CERT-IN (Ministry of Telecommunications and Information Technology, Government of India). Your business can rest assured that its IT systems and security are in safe and capable hands with our extensive team of IT specialists. </p>
                </div>
                <div className="it-detail-second">
                    <h3>Our IT solutions services</h3>
                    <p><span onClick={gotothis}>IT systems assurance services:</span> Designed to give you confidence that your IT systems and processes are comprehensive, efficient and up to speed with the pace of technological change.</p>
                    <p>Our service offering is driven by our progressive IT assurance model. This is built on a thorough preliminary assessment of your system framework, in-depth IT risk and advisory, and a holistic view of how your IT systems compare with industry standards.</p>
                    <p><span onClick={gotothis}>IT solutions and implementation:</span> We offer extensive IT system design consulting and implementation support to India’s gems and jewellery industry. This includes end-to-end IT solutions from planning through to ongoing management.</p>
                    <p>Our integrated IT software products support inventory management, production control, sales and much more. </p>
                </div>
                <div className="it-detail-third">
                    <h3>Our partnerships:</h3>
                    <ul>
                        <li>Oracle India Pvt. Ltd – Integrated cloud applications and platform services</li>
                        <li>Microsoft India – Global cloud services for digital transformation</li>
                    </ul>
                </div>
                <div className="it-detail-four">
                    <h3>Gem and jewellery industry IT solutions</h3>
                    <p>A focal part of our sector-ranging expertise, we are the pioneers in providing IT system design consulting and IT solutions to India’s gems and jewellery industry. We’ve supported around 100 large and medium diamond businesses and continue to do so today.</p>
                </div>
                <div className="it-detail-third">
                    <h3>Our IT products include:</h3>
                    <ul>
                        <li>Diasoft TM – Diamond Inventory Tracking, Manufacturing and Decision Support System</li>
                        <li>Sales and Global Inventory (SGI Diasoft TM) – Polished diamond inventory and sales solution</li>
                        <li>Web Sales – B2B web sales solution</li>
                        <li>Accusoft – Local and international accounting catering to industry needs</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="internal-list">
            <div className="internal-list-container">
                <div className="internal-list-con-col1">
                    <div className="internal-list-service">
                        <h3>IT systems assurance and IT solutions</h3>
                        <h1>Why choose Authorised Audit for your IT systems assurance and IT solutions?</h1>
                    </div>
                </div>
                <div  className="internal-list-con-col2">
                    <div className="internal-list-servicelist">
                        <ul>
                            <li>Expert: Utilise Authorised Audit as your value-added partner with a multi-disciplinary team of project managers, business consultants, chartered accountants, management graduates, IT professionals and engineers, IS auditors and more</li> 
                            <li>Recognised: Take peace of mind in knowing RSM is empanelled as an IT Security Auditing Organisation with CERT-IN (Ministry of Telecommunications and Information Technology, Government of India)</li>
                            <li>Flexible: Our experienced team can deliver consulting and implementation assignments across a wide range of functions and sectors</li>
                            <li>Cost effective: Access our professional expertise and effective IT solutions and enjoy tangible returns</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="internal-card">
            <div className="internal-card-container">
                <div className="internal-card-col">
                    <div className="internal-card-1">
                        <div className="internal-card-image">
                            <img src={card1} alt="loading"/>
                        </div>
                        <div>
                            <p className="card-info">For more information on how Authorised Audit can assist you with internal audit services,</p>
                            <p className="card-cont" onClick={gotocontact}>contact us today.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>           
    </div>
}
export default ITsystem
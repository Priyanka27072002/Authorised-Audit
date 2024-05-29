import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import card1 from "../../images/internalcard1.png";
import { useNavigate } from "react-router-dom";
import "./Ind.css"
const Ind=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
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
        <div className="ind-banner">
            <div className="ind-banner-empty"></div>
            <div className="ind-banner-head">
                <h1>Ind AS advisory</h1>
            </div>
        </div>
        <div>
            <div className="ind-detail-container">
                <div className="ind-det-first">
                    <h4>Bringing expert global and local knowledge to your accounting environment</h4>
                    <p>Global capital markets are increasingly getting integrated and businesses are growing internationally. International expansion plans may involve cross-border acquisitions or joint ventures abroad, raising international debt finance, developing relationships with private equity houses or raising capital from the equity markets, whether in India or abroad.</p>
                    <p>In India, Ministry of Corporate Affairs (MCA) has notified phase-wise convergence of Indian Standards with IFRS which are known as Indian Accounting Standards (Ind AS). <span>These standards have become effective from financial year 2016-17 and in Phase I, were applicable to all listed companies and companies having net worth exceeding Rs.500 crores.</span></p>
                    <h4>Experiance of working on Ind AS as conversion of more than 100 companies in Phase I.</h4>
                    <h4>Any company may voluntarily comply with Ind AS for accounting periods beginning on or after 1 April 2015.</h4>
                </div>
            </div>
        </div>
        <div className="internal-list">
            <div className="internal-list-container">
                <div className="internal-list-con-col1">
                    <div className="internal-list-service">
                        <h3>Ind AS advisory</h3>
                        <h1>How we can help</h1>
                    </div>
                </div>
                <div  className="internal-list-con-col2">
                    <div className="internal-list-servicelist">
                        <ul>
                            <li>Ind AS adoption:</li> 
                            <li>Assistance in analysis of difference between Indian GAAP (generally accepted accounting principles)and Ind AS</li>
                            <li>Assistance in identifying / deciding new policies / procedures required to be implemented of under Ind AS</li>
                            <li>Assistance in implementation of identified changes for convergence to Ind AS</li>
                            <li>Training your staff on key Ind AS concepts and requirements</li>
                            <li>Assistance in compilation of financial statements under Ind AS  </li>
                            <li>Ind AS consultancy on technical issues</li>
                            <li>Ind AS Advisory - Advantage RSM:</li>
                            <li>RSM in India is consistently ranked amongst India’s top six accounting and consulting groups</li>
                            <li>Globally, RSM is the sixth largest audit, tax and consulting network</li>
                            <li>Well experienced and skilled professional staff with proven project management skills</li>
                            <li>International orientation and best practices with respect to financial reporting</li>
                            <li>Local and global financial reporting servicing capabilities being part of the RSM network</li>
                            <li>Utmost emphasis on confidentiality of your financial and other strategic information</li>
                            <li>Process orientation with emphasis on well-defined and documented procedures</li>
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
                            <p className="card-info">For more information on how RSM can assist you with internal audit services,</p>
                            <p className="card-cont" onClick={gotocontact}>contact us today.</p>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>       
    </div>
}
export default Ind
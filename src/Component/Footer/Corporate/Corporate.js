import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import leader from "../../images/corporate advisor leader.jpg"
import card1 from "../../images/internalcard1.png";
import "./Corporate.css"
import { useNavigate } from "react-router-dom";
const Corporate=()=>{
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
        <div className="corporate-advisor">
            <div className="corporate-banner"></div>
            <div className="corporate-banner-head">
                <h1>Corporate advisory &</h1>
                <h1>structuring</h1>
                <div className="cor-ban-para">
                    <p>Corporate advisory services that offer sound, practical and</p>
                    <p>innovative solutions.</p>
                </div>
            </div>
        </div>
        <div className="corporate-details">
            <div className="cor-det-first">
                <p>Our corporate advisory and structuring services provide valuable insight into structuring options for your business, enabling you to enhance stakeholder value within your organisation. Our teams have global market and sector knowledge combined with specialist technical experience, offering you the right mix of technical, commercial and operational expertise for the unique challenges your business is facing.</p>
                <p>We offer services across capital market consultation, corporate structuring solutions, business restructuring advice, inbound and outbound investment structuring and more. Though we offer a diverse portfolio of specialised corporate advisory and restructuring services, they can be broadly grouped into three key areas:</p>
                <ul>
                    <li><GoDotFill className="cor-det-icon"/> Capital market consulting</li>
                    <li><GoDotFill className="cor-det-icon"/> Company law and secretarial services</li>
                    <li><GoDotFill className="cor-det-icon"/> Commercial documentation</li>
                </ul>
            </div>
            <div className="cor-det-help">
                <h3>How we can help:</h3>
                <ul>
                    <div className="cor-det-para-list">
                    <li><span>Capital market consulting –</span> We can offer structural consultation for your organisation as a preparatory step towards accessing capital markets. Our national and global expertise enables us to support your business with any floatation, acquisition, fundraising and de-listing plans.</li>
                    <li><span>Corporate structuring – </span>Tailored support for specific businesses, new projects and expansions through effective management of:
                        <div className="cor-det-list">
                            <li>Local regulations that can impact businesses and projects</li>
                            <li>Tax efficiencies for both direct and indirect taxes</li>
                            <li>Corporate laws</li>
                            <li>Foreign exchange management regulations</li>
                        </div>
                    </li>
                    </div>
                    <div className="cor-det-para-list2">
                    <li><span>Transaction advisory services -</span> Including advice and assistance in implementation of specific needs such as spin-offs, amalgamations and mergers, demergers, acquisitions, slump sale and more.</li>
                    </div>
                    <div>
                    <li className="cor-det-type"> <span>Financial advisory services</span> related to:
                   
                        <div className="cor-det-list2">
                            <li>o &nbsp;Debt and equity financing</li>
                            <li>o &nbsp;Refinancing</li>
                            <li>o &nbsp;Profit optimisation strategies</li>
                            <li>o &nbsp;Acquisition and reorganisation analysis</li>
                            <li>o &nbsp;Initial public offerings, follow-on public offerings and private placements</li>
                            <li> &nbsp;Delisting of shares from stock exchanges for listed companies</li>
                        </div>
                    </li>
                    <li className="cor-det-type"><span>Financial resource mobilisation plans</span></li>
                    <li className="cor-det-type"><span>Advice on technical and financial collaborations -</span> Including advisory services on technical know-how collaborations, joint ventures, royalty and licensing agreements and obtaining approvals from the Foreign Investment Promotion Board (FIPB), as well as other government agencies</li>
                    <li className="cor-det-type"><span>Company formation</span></li>
                    </div>
                </ul>
            </div>
        </div>
        <div className="cor-leader-detail">
            <div className="cor-led-det-container">
                <div className="cor-led-row">
                    <div className="cor-led-col1">
                        <h3>Corporate advisory & structuring</h3>
                        <h1>Why choose Authorised Audit for your corporate advisory, structuring and restructuring services?</h1>
                    </div>
                    <div className="cor-led-col2">
                        <div className="cor-led-image">
                            <img src={leader} alt="loading"/>
                        </div>
                        <div className="cor-led-list">
                            <ul>
                                <li>Authorised Audit is the world’s sixth largest network of audit, tax and consulting firms, with RSM India consistently ranked amongst the country’s top six accounting and consulting groups</li>
                                <li>Extensive experience in various facets of corporate advisory services, notably corporate structuring and business restructuring advice across the full spectrum of sectors, nationalities and regions, including cross-border structuring</li>
                                <li>A dedicated team of multi-disciplinary professionals, featuring chartered accountants, management graduates, legal and secretarial professionals and domain and industry experts</li>
                            </ul>
                        </div>
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
export default Corporate
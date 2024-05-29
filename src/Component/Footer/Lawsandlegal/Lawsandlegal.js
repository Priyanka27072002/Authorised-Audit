import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import card1 from "../../images/internalcard1.png";
import "./Lawsandlegal.css"
const Lawsandlegal=()=>{
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
        <div className="laws-banner">
            <div className="laws-banner-empty"></div>
            <div className="laws-banner-head">
                <h1>Company law and legal</h1>
                <h1>advisory</h1>
            </div>
        </div>
        <div>
            <div className="laws-detail-container">
                <div className="laws-det-info">
                    <div className="laws-det-first">
                        <h2>The <a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf">Companies Act 2013</a> has substantially altered the corporate regulatory framework by bringing in changes with far-reaching implications. Our legal advisory experts in India are on hand to help ensure your business is fully compliant.</h2>
                        <h3>We provide compliance and advisory services for company law matters, Securities and Exchange Board of India (SEBI) matters and other corporate laws (including representation before the Registrar of Companies and other authorities) and various types of commercial and legal documentation.</h3>
                    </div>
                    <div className="laws-det-sec">
                        <small>Broadly our business legal support services include:</small>
                        <h3>Company law and secretarial services</h3>
                        <h3>Labour law compliance review & risk management</h3>
                        <h3>Commercial documentation</h3>
                    </div>
                    <div className="laws-det-thrid">
                        <h3>How we can help:</h3>
                        <ul>
                            <h3>Compliance services:</h3>
                            <li>Incorporation of new companies / limited liability partnerships, both in India and abroad</li>
                            <li>Conversion of existing companies / partnership firms into limited liability partnerships (LLPs) and vice versa</li>
                            <li>E-filing of various documents and returns with regulatory authorities</li>
                            <li>Secretarial compliance services</li>
                            <li>Review of secretarial records and updating thereof</li>
                            <li>Appearance before central government, Company Law Board and other authorities</li>
                            <li>Convening and conducting different meetings such as board of directors and shareholders meetings</li>
                            <li>Winding up / dissolution of companies and LLPs</li>
                        </ul>
                        <ul>
                            <h3>Commercial law advisory services:</h3>
                            <li>Carry out impact analysis under the <a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf">Companies Act 2013</a></li>
                            <li>Business law advisory services in respect of corporate laws, SEBI, Foreign Exchange Management Act (FEMA), labour laws and other allied laws</li>
                            <li>Providing assistance for mergers, amalgamations, joint ventures, absorption and external reconstruction schemes</li>
                            <li>Assisting in designing a legal compliance framework for companies and conducting compliance audits</li>
                            <li>Drafting and reviewing commercial agreements and other documents related with corporate matters such as joint ventures, foreign collaborations, shareholders’ agreements, property acquisition and disposal</li>
                            <li>Legal due diligence</li>
                            <li>Legal regulatory advisory services on intellectual property rights (IPRs) including registration and renewal of trademarks, royalty agreements, enforcement of IPRs, etc.</li>
                            <li>Drafting of code of conduct for employees, HR policies, employment contracts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="internal-list">
                <div className="internal-list-container">
                    <div className="internal-list-con-col1">
                        <div className="internal-list-service">
                            <h3>Company law and legal advisory</h3>
                            <h1>Why choose RSM for company law and legal advisory services?</h1>
                        </div>
                    </div>
                    <div  className="internal-list-con-col2">
                        <div className="laws-det-list">
                            <ul>
                                <li><span>Experienced:</span> Our company legal support team boasts wide exposure across sectors, regulations and jurisdictions and has overseen many complex legal and secretarial issues</li> 
                                <li><span>Specialist:</span> You’ll benefit from a dedicated company law and legal advisory team of highly qualified and trained professionals including company secretaries, chartered accountants, law graduates and management graduates</li>
                                <li><span>International:</span> We offer global servicing capabilities and consulting perspectives through the wider RSM network – the world’s seventh largest network of audit, tax and consulting firms and consistently one of India’s leading accounting and consulting groups</li>
                                <li><span>Collaborative:</span> Our integrated business legal support team will share skills, insights and resources to provide you with the best possible results</li>
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
                            <p className="card-info">For more information on how RSM can assist you with internal audit services,</p>
                            <p className="card-cont" onClick={gotocontact}>contact us today.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </div>
}
export default Lawsandlegal
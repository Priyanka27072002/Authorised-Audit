import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import card1 from "../images/internalcard1.png";
import card2 from "../images/internalcard2.png"
import "./Internalaudit.css"
import { useNavigate } from "react-router-dom";
const Internalaudit=()=>{
    let nav=useNavigate()
    const gotocontact=()=>{
        nav("/contact")
    } 
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
        <div>
            <div className="internal-banner">
                <h1>Internal audit and risk advisory</h1>
            </div>
        </div>
        <div>
            <div className="internal-about-container">
                <div className="internal-about-first">
                    <h3>Tailored expertise to minimise your risks and maximise your returns</h3>
                    <p>We understand the major threats of business today and how they can impact your organisation. The global banking crisis, the rise of cybercrime, changing business dynamics, corporate failures with increased stakeholder accountability – all of these factors only heighten the importance of identifying risks and the appropriate response as early as possible.</p>
                </div>
                <div className="internal-about-first">
                    <h3>The need for internal audit and risk advisory services:</h3>
                    <p>Our objective is to provide the audit committee, senior management, head of operations, process owners and the rest of your organisation with a comprehensive and unbiased analysis of the corporate governance processes, risks and functional efficiency of your business - and to suggest areas for improvement and value-addition.</p>
                </div>
                <div className="internal-about-second">
                    <h3>Our internal audit services are also an effective means of evaluating:</h3>
                    <ul>
                        <li>Efficacy of operations</li>
                        <li>Reliability of financial reporting</li> 
                        <li>Compliance with various regulations</li>
                        <li>Safeguarding of assets and various matters concerning the interest of the company, employees, stakeholders and society in general</li>
                    </ul>
                </div> 
                <div className="internal-about-thrid">
                    <h3>The <span><a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf">Indian Companies Act 2013</a></span> also provides for mandatory internal audits for certain classes of companies.</h3>
                    <p>As a result, we are proactive, not reactive, and provide support and guidance as your processes and systems develop. Our expertise and knowledge ensure we remain at the forefront of implementing new approaches to managing risk. We believe in delivering internal audit and risk advisory solutions at the highest level of professional competency and integrity to our clients.</p>
                </div>
                <div className="internal-about-first">
                    <h3>We specialise in providing internal audit and risk advisory services.</h3>
                    <p>Our audit specialists and risk advisory consultants understand the unique nature of each of our clients’ needs. Our endeavour is to guide you through the entire process step by step, addressing your key business concerns, helping you comply with regulatory norms and enhancing the overall effectiveness of corporate governance and reporting requirements within your organisation. The endgame is to see your operational efficiencies boosted and move you a big step closer to achieving your strategic business goals.</p>
                </div>
                <div className="internal-about-second">
                    <h3>Our internal audit services include distinctive methodologies such as:</h3>
                    <ul>
                        <li>Adoption of standard operating procedures</li>
                        <li>Client specific ‘toolkits’ to service multi-location engagements</li>
                        <li>Use of computer-assisted audit tools (CAATs) such as ACL and IDEA to aid in accurate sampling and data analytics</li>
                        <li>Research based checklists</li>
                        <li>Issuing customized reports for various levels of management</li>
                    </ul>
                </div>
                <div className="internal-abotu-four">
                    <p>Our highly dedicated and specialised internal audit and risk advisory consultants are actively engaged with various corporates across the world, with comprehensive sector experience. Our detailed service list includes:</p>
                    <ul>
                        <li>Internal and management audit services</li>
                        <li>Enterprise risk management</li>
                        <li>Techno commercial and concurrent review</li>
                        <li>Due diligence review</li>
                        <li>IT risk and advisory</li>
                        <li>Compliance review</li>
                        <li>Carbon and sustainability risk advisory solutions </li>
                    </ul>
                </div>
                <div className="internal-about-five">
                    <h3>How we can help</h3>
                    <p>Our internal audit services typically include the following processes:</p>
                    <ul>
                        <li>Critical evaluation of internal controls, performing gap analysis and suggesting areas for improvement and efficiency</li>
                        <li>Constructive review of operations - keeping your business needs and risks at the forefront of our mind</li>
                        <li>Identification and recommendation of areas for cost reduction and revenue optimisation</li>
                        <li>Critical evaluation of systems and procedures, including those which are embedded in information technology systems and processes</li>
                        <li>Identification and assessment of risks, followed by suggestion of risk-mitigation measures</li>
                        <li>Ensuring proper compliance with the various regulatory provisions and operations manuals</li>
                        <li>Assisting in meeting the corporate governance requirements, particularly with  respect to the far-reaching changes introduced by the <span className="internal-span"><a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf">Companies Act 2013</a></span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="internal-list">
            <div className="internal-list-container">
                <div className="internal-list-con-col1">
                    <div className="internal-list-service">
                        <h3>Internal audit and risk advisory</h3>
                        <h1>Why choose Authorised Audit for your internal audit services and risk advisory solutions?</h1>
                    </div>
                </div>
                <div  className="internal-list-con-col2">
                    <div className="internal-list-servicelist">
                        <ul>
                            <li>Authorised Audit India* is consistently ranked among India’s top six accounting and consulting groups and has multi-disciplinary personnel spanning over 1,200 employees</li> 
                            <li>Authorised Audit is the seventh largest global audit, tax and consulting network, encompassing 120 countries, 830 offices and more than 57,000 people internationally</li>
                            <li>A dedicated team of over 550 internal audit specialists and risk advisors in India alone, boasting highly qualified and trained professionals including chartered accountants, engineers, management graduates, CISA professionals, cost accountants and more.</li>
                            <li>Three decades of top-level experience in internal audit & risk advisory services in India</li>
                            <li>Regular involvement of experts from other verticals such as tax, accounting, legal, IT, etc.  </li>
                            <li>Wide exposure across several sectors and geographies</li>
                            <li>Nationwide delivery capabilities in over 100 cities across India through a combination of our own offices and associates</li>
                            <li>Clear value proposition</li>
                            <li>Use of well researched and dynamic toolkits and checklists with periodical updates</li>
                            <li>Risk-based audit approach with emphasis on computer-assisted audit tools (CAATs) for statistical sampling and data analytics</li>
                            <li>Use of domain and functional expertise</li>
                            <li>Global servicing capabilities through the Authorised Audit network</li>
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
                    <div className="internal-card-2">
                        <div  className="internal-card-image">
                            <img src={card2} alt="loading"/>
                        </div>
                        <div>
                            <p><i>Please visit our <span onClick={gotohome}>legal section</span> to know about the legal structure of the Authorised Audit network and Authorised Audit in India.</i></p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
}
export  default Internalaudit
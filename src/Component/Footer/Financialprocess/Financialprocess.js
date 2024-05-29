import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import card1 from "../../images/internalcard1.png";
import "./Financialprocess.css"
const Financialprocess=()=>{
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
        <div className="financial-banner">
            <div className="finacial-banenr-empty"></div>
            <div className="financial-ban-head">
                <h1>Financial process outsourcing</h1>
                <p>Supporting and empowering you every step of the way  </p>
            </div>
        </div>
        <div>
            <div className="financial-detail-container">
                <div className="financial-detail-info">
                    <h2>Every facet of your business is important, from the fundamentals carried out behind the scenes, to the skills and craft at the heart of your brand that make it what it is. To succeed, every task needs to be carried out effectively and efficiently, which can put a strain on even the biggest of names in the world of commerce and industry.</h2>
                    <h2>We possess the necessary expertise and relevant resources to provide cost-effective and high-quality accounting and business process outsourcing services. This enables you to outsource each and every element of your core processes to a reliable workforce, so you can focus on the critical, unique functions that add value to your bottom line.</h2>
                    <h2>We provide assistance on a wide variety of accounting processes, including bookkeeping services, accounts production, payroll processing, finalisation, tax work and administrative support. We’ll manage your finance and accounts with the utmost levels of confidentiality, integrity, professionalism, accuracy and timeliness. We’ve also developed specialised teams to provide services for emerging sectors, including:</h2>
                    <div className="finacial-detial-section">
                        <h2> Ind AS advisory</h2>
                        <h2> Goods and Service Tax (GST) transition</h2>
                    </div>
                </div>
                <div className="fin-det-help">
                    <h1>How we can help:</h1>
                    <div className="fin-det-first-head">
                        <h3>Onsite and offsite financial process outsourcing including the following:</h3>
                    </div>
                    <div className="fin-det-list1">
                        <ul>
                            <li>Comprehensive bookkeeping services & account management outsourcing services</li>
                            <li>Periodic review and finalisation of accounts and financial statements including IFRS statements</li>
                            <li>Monthly management accounts and quarterly VAT/GST returns</li>
                            <li>Payroll processing</li>
                            <li>Compliance assurance (direct and indirect taxes)</li>
                            <li>Administrative and secretarial support</li>
                        </ul>
                    </div>
                    <div className="fin-det-first-head">
                        <h3>Transaction processing services:</h3>
                    </div>
                    <div className="fin-det-list1">
                        <ul>
                            <li> Purchase payment processing</li>
                            <li> Sales invoice processing</li>
                            <li> Accounts receivable/payable (sales and purchase ledger)</li>
                            <li> Compilation of fixed assets register</li>
                            <li> Travel claims management</li>
                            <li> Reconciliation jobs (bank, payables, receivables, etc.)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="financial-choose">
            <div className="financial-choose-container">
                <div className="fin-choose-row">
                    <div className="fin-choose-col1">
                        <h3>Why choose Authorised Audit for your financial process outsourcing?</h3>
                        <h1>Reap the advantages of outsourcing your accounting and business processing needs to us:</h1>
                    </div>
                    <div className="fin-choose-col2">
                        <div className="fin-choose-list">
                            <div className="fin-cho-list-det">
                                <h1>People:</h1>
                                <ul>
                                    <li>Highly experienced and skilled professional staff with proven project-management skills</li>
                                    <li>International orientation and awareness</li>
                                    <li>Dedicated teams across different departments</li>
                                    <li>Exposure to varied sectors such as finance, manufacturing, entertainment, service, retail, hospitality, healthcare and more</li>
                                    <li>Comprehensive knowledge and vast experience of various accounting practices</li>
                                </ul>
                            </div>
                            <div className="fin-cho-list-det">
                                <h1>Process:</h1>
                                <ul>
                                    <li>Internal quality assurance processes: We ensure independent quality assurance and monitoring for all our key engagements</li>
                                    <li>Process orientation: We ensure that all processes are appropriately carried out and shared with our operating and supervisory teams to ensure proper function and controls. These processes are logged in engagement-specific accounting manuals, compliance manuals and area-specific checklists which we prepare as assignment controlling and monitoring tools</li>
                                    <li>Independent quality monitoring cell: Our team is entrusted with the task of ensuring that all the specified quality-assurance activities for each engagement are effectively followed</li>
                                    <li>Effective transition and migration process: For each of our engagements, we have a detailed transition/migration process agreed upon with our clients</li>
                                    <li>Commitment: Reliable, timely delivery</li>
                                    <li>Training: All our accounting outsourcing personnel across India undergo monthly training on relevant matters and updates, from our account management outsourcing teams through to our administrative support</li>
                                    <li>Communication: We provide periodical updates on key changes happening in accounting and compliance areas to our delivery teams through monthly newsletters and flash reports</li>
                                </ul>
                            </div>
                            <div className="fin-cho-list-det">
                                <h1>Technology:</h1>
                                <ul>
                                    <li>Comfortable with emerging technologies: Authorised Audit focuses on leveraging the latest available technologies to enable cost-effective accounting outsourcing solutions for our clients</li>
                                    <li>Our team has a spread of knowledge across various ERP systems, as well as standalone accounting software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="fin-credentials-container">
                <div className="fin-cre-info">
                    <h3>Our credentials:</h3>
                    <p>
                        <img src="https://www.rsm.global/india/core/misc/icons/e32700/error.svg" alt="loading"/>
                    </p>
                    <ul>
                        <li>Authorised Audit in India is consistently ranked amongst India’s top six accounting and consulting groups and is the world’s seventh largest network of audit, tax and consulting firms</li>
                        <li>Domestic personnel tallying over 1,200 people, offering expertise across a diverse portfolio with nationwide presence</li>
                        <li>Extensive experience in advisory, taxation and accounting matters across various industries and service verticals</li>
                        <li>Dedicated team of outsourcing professionals, comprising of chartered accountants, management graduates, cost accountants, legal professionals, and administrative and secretarial support specialists, with a wide exposure to various sectors</li>
                    </ul>
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
export default Financialprocess
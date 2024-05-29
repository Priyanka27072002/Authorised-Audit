import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import card1 from "../../images/internalcard1.png";
import card2 from "../../images/internalcard2.png"
import "./Taxservices.css"
const Taxservices=()=>{
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
        <div className="tax-banner">
        <div className="tax-banner-container"></div> 
            <div className="tax-head">
                <h1>Tax Services – Domestic and</h1>
                <h1>International</h1>
            </div>
        </div>
        <div className="tax-para">
            <div className="tax-para-container">
                <div className="tax-para-details">
                    <h3>Helping with tax challenges, wherever you are in the world. </h3>
                    <p>If you’re a global business juggling complex and diverse tax rules of multiple markets, it can be hard to stay on top of what can seem like ever-changing regulations. Authorised Audit can help solve your tax challenges, offering in-depth, up-to-date knowledge of the relevant local rules and regulations. Through collaboration with our tax professionals across all relevant jurisdictions, we are able to provide you with seamless advisory and compliance solutions for taxes in India and international tax law.</p>
                </div>
                <div className="tax-para-info">
                    <p>Broadly, our domestic service areas in tax cover:</p>
                    <ul>
                        <li>Direct tax</li>
                        <li>Indirect tax</li>
                        <li>Transfer pricing</li>
                    </ul>
                    <p>Indian tax law is well structured, wherein the power to levy taxes is clearly demarcated by the constitution between the central government, the state governments and local bodies. Taxes in India can broadly be classified into direct tax and indirect tax. Some of the major taxes levied by the central government are classified below:</p>
                    <ul>
                        <li> Direct tax: </li>
                        <li> Income tax</li>
                        <li> Wealth tax</li>
                        <li> Indirect tax:</li>
                        <li> Customs duties</li>
                        <li> Central excise</li>
                        <li> Service tax</li>
                    </ul>
                    <p>Since July 2017, the <span><a href="https://gstcouncil.gov.in/sites/default/files/CGST.pdf">Goods and Services Tax (GST)</a></span> has made the taxation system more dynamic in terms of effective administration, creating efficient tax collection and reducing the cascading effect of taxes in India.</p>
                    <p>We provide practical, commercially focused and socially responsible solutions for both multi-national and Indian companies, as well as expatriates and non-resident and resident Indians. Our extensive knowledge of taxation practices and detailed understanding of both international tax law and Indian tax law leaves us expertly positioned to help your business. Our procedures follow globally regarded best practice, and our regular interaction with international tax authorities ensures we maintain this at all times.</p>
                    <p>We are a leading service provider in matters of direct and indirect tax, covering the full spectrum of Indian and international tax law and key regulations including transfer pricing, service tax, VAT, central excise and GST.  We can also assist you with numerous specialised service areas, with experience in business set up in India and overseas, not to mention corporate business structuring, transaction advisory and multiple other avenues.</p>
                </div>
                <div className="tax-para-list">
                    <ul>
                        <li>Provision of effective taxation strategy for corporates and non-corporates through consideration and application of various tax holidays and benefits under the existing taxation regulations</li>
                        <li>Advising on taxation and exchange control regulations for investments or setting up of business in India and abroad</li>
                        <li>Evaluating the existing compensation structure of employees and suggesting tax efficient improvements</li>
                        <li>Advisory on withholding tax, assistance in seeking advance rulings on international tax issues and representation before tax and judicial authorities in assessment and appeals</li>
                        <li>Handling and representation in income tax search, seizure and survey cases</li>
                        <li>Expatriate taxation advisory services</li>
                        <li>Advising on corporate structuring and transaction advisory services with a view to optimize tax incidence view to optimize tax incidence</li>
                        <li> Assistance and training for compliance around Goods and Services Tax (GST)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="tax-choose">
            <div className="tax-choose-container">
                <div className="tax-choose-row">
                    <div className="tax-choose-col1">
                        <h3>Why choose Authorised Audit for your tax services?</h3>
                        <h1>Tax Services - Domestic and International</h1>
                    </div>
                    <div className="tax-choose-col2">
                        <div className="tax-choose-list">
                            <ul>
                                <li>Authorised Audit is the world’s seventh largest networkof audit, tax and con sulting firms and the sixth largest global provider of tax services by revenue</li>
                                <li>Authorised Audit in India is consistently ranked amongst India’s top six accounting and consulting groups*</li>
                                <li>Extensive experience in advisory, tax and accounting matters across various sectors</li>
                                <li> Dedicated team of highly qualified,experienced and trained professionals</li>
                                <li> Full knowledge of India tax law, as well as international tax legalities</li>
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
                            <p className="card-info">For more information on how Authorised Audit can assist you with taxes in India</p>
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
export default Taxservices
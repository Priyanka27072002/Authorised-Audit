import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import card1 from "../../images/internalcard1.png";
import { useNavigate } from "react-router-dom";
import "./Goods.css"
const Goods=()=>{
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
        <div className="gst-banner">
            <div className="gst-banner-empty"></div>
            <div className="gst-banner-head">
                <p>Service</p>
                <h1>Goods and Services Tax</h1>
                <h1>advisory and compliance</h1>
            </div>
        </div>
        <div>
            <div className="gst-detail-container">
                <div className="gst-det-list">
                    <h3 className="gst-info"><i>In July 2017 Goods and Services Tax (GST) replaced a plethora of indirect taxes such as excise duty, VAT, service tax, central sales tax, countervailing duty (CVD) and octroi duty. GST has far-reaching impacts for virtually every business in terms of tax rates, overall tax incidence, input credits, distribution system, prices and costs.</i></h3>
                    <p>Businesses need to ensure:</p>
                    <ul>
                        <li>Proper classification in terms of HSN and SAC codes and the applicable tax rates (generally ranging from exempt to 28%)</li>
                        <li>Ascertain place of supply to determine relevant state for GST compliances and tax payments</li>
                        <li>Claim proper input tax credits where eligible and exclude or defer input tax credits not eligible, as well as refunds or tax credits for exports</li>
                        <li>Ascertain and ensure compliance with reverse charge on inward supplies where applicable</li>
                        <li>Ensure filing of periodic and annual tax returns in each state (or for each registered presence) based on applicability</li>
                        <li>Special procedure for valuation in case of related party transactions</li>
                    </ul>
                    <p>Thankfully, our indirect tax advisory specialists are here to help.</p>
                    <h3>Our tax compliance advisory services</h3>
                    <ul>
                        <li><span>GST & customs duty incidence and compliance blueprint:</span> Providing a blueprint for GST and customs duty incidence and compliances as applicable to the client</li>
                        <li><span>GST compliances:</span> Review of tax returns and tax computations and submission to tax authorities in each state or for each registered presence (including review of mismatches between vendors and/or customers and the client’s records based on reconciliation prepared by the client) and also providing ASP/GSP selection related guidance</li>
                        <li><span>GST operational assistance and retainer services:</span> Addressing operational issues arising out of GST implementation, vendors and customers ecosystem support and advisory services as well as obtaining advance rulings</li>
                        <li><span>GST audit services:</span> Assisting the client in getting annual GST audit done in respect of each registered presence where the client is situated.</li>
                        <li><span>GST internal audit review:</span> Review of Order to Cash and Procure to Pay and other processes from a GST perspective, including testing, validation and user acceptance of ERP-related GST controls</li>
                        <li><span>GST representation and litigation support:</span> Representation before GST assessing and appellate authorities in the various states across India</li>
                        <li><span>GST supply chain effectiveness review:</span> Along with Miebach Consulting, a German headquartered global supply chain expert, we provide clients with insights on improving supply chain, network optimisation, warehousing and logistics</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="internal-list">
            <div className="internal-list-container">
                <div className="internal-list-con-col1">
                    <div className="internal-list-service">
                        <h3>Goods and Services Tax advisory and compliance</h3>
                        <h1>Why choose RSM India for your goods and services tax advisory services?</h1>
                    </div>
                </div>
                <div  className="internal-list-con-col2">
                    <div className="internal-list-servicelist">
                        <ul>
                            <li>We boast a dedicated pan-India team of 100-plus personnel from a diverse collection of professional backgrounds, comprising CAs, IT & ERP engineers, LLBs and MBAs</li> 
                            <li>Our GST team works closely with the IT & ERP team for reviewing tax logic and controls in the IT/ERP system and user acceptance tests</li>
                            <li>We work with a broad client base across sectors including engineering and manufacturing, hospitality, retail, media & entertainment, pharma & healthcare, infrastructure & real estate, IT & ITES and gems & jewellery</li>
                            <li>We offer a knowledge-driven approach, having hosted GST workshops across India at prestigious forums such as CII, IEMAA, Bharat Diamond Bourse, Rio Tinto, Citibank, as well as contributing to a series of publications on GST</li>
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
export default Goods
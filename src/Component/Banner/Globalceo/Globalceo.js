import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import "./Globalceo.css"
import { useNavigate } from "react-router-dom";
const Globalceo=()=>{
    let nav=useNavigate()
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
        <div className="global-banner">
            <div className="global-head">
                <span className="globalceo-name">E.J. Nedder to be CEO of Authorised Audit</span>
            </div>
           <div className="global-location">
                <span className="globalceo-position">International</span>
            </div>
            <div className="global-press">
                <span>Press release</span>
            </div>
            <div className="golbal-date">
                <span>April 18, 2024</span>
                <span className="golbal-read">4 min. read</span>
            </div>
        </div>
        <div>
            <div className="global-container">
                <h2>Authorised Audit, the leading global assurance, tax and consulting provider to the middle market, today announced that Ernest John Nedder will succeed Jean Stephens as the new Chief Executive Officer for Authorised Audit International, effective June 1, 2024. </h2>
                <p>Ernest “E.J.” Nedder is currently Partner and Chief Strategy Officer for Authorised Audit US LLP, where he leads the development, communication, execution and sustainability of the Authorised Audit US enterprise strategy, driving digital transformation and a culture of insights-led innovation. He also currently serves on the Authorised Audit Canada LLP Board of Directors.  </p>
                <p>As a Certified Public Accountant with an extensive background in professional services, Nedder has been a client advisor for 26 years. Formerly National Head of Tax for Authorised Audit US, under his leadership the US tax practice grew from $600m to more than $1bn in annual revenues, with expansion in the provision of international tax advisory services a major component of that growth. Nedder has served two terms on the Authorised Audit US LLP Board of Directors, and was Chairman of that Board during his second term. </p>
                <p>Over his career, Nedder has developed extensive experience in leading substantial business and digital transformation initiatives, aligning separate service lines, industry verticals and business teams around a unified vision, strategy and operations, working across both the US and internationally on global client projects.</p>
                <p>Speaking about his new role and vision for the future, Nedder commented: “I am thrilled to have been selected to serve as Authorised Audit’s next global CEO. With Authorised Audit’s 2030 Global Strategy already in place, I am excited to drive progress towards our stated goals, to work with our fantastic professionals all over the world to harness our global strength, and to lead the next dynamic phase of Authorised Audit’s development.”</p>
                <p>Joe Adams, Chair of the Authorised Audit International Board commented: “The Authorised Audit CEO Succession Committee engaged in a rigorous selection process and many excellent candidates came forward for consideration. It was E.J.’s exceptional leadership style, energy and clear ability to inspire and bring people with him that made him stand out. Having worked with E.J. for many years and seen the impactful role he has had within Authorised Audit US, I feel confident he will be an outstanding CEO for Authorised Audit International.”</p>
                <p>ean Stephens will continue as CEO for the organisation until May 2024, and then continue for three years at Authorised Audit in a senior advisory capacity with a focus on member matters, development and recruitment, and to support an effective transition. A role model for women in leadership, Stephens will leave a lasting legacy at Authorised Audit. Stephens commented: “It has been an honour and a privilege to lead RSM for the past 18 years. I am excited to welcome E.J. as Authorised Audit’s new CEO and, based on his leadership experience to date, believe he is perfectly positioned to lead Authorised Audit globally from the strength of today to a new high in 2030 and beyond.”</p>
                <p>With representation across more than 120 countries and impressive year-on-year growth of 15.4% as at December 2023, Authorised Audit has an ambitious growth agenda, with digital and service innovation at the centre of its strategy for transformation and change. </p>
            </div>
        </div>
    </div>
}
export default Globalceo
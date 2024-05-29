import React from "react";
import logo from "../images/logo2.png"
import { FaLinkedin,FaFacebook, FaRegCopyright} from "react-icons/fa";
import { FaXTwitter,FaYoutube } from "react-icons/fa6";
import "./Footer.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Footer=()=>{
    let nav=useNavigate()
    let state=useSelector((samp)=>samp)
    const gotointernal=()=>{
        nav("/internal")
    }
    const gototaxservices=()=>{
        nav("/taxservice")
    }
    const gotocorporate=()=>{
        nav("/corporate")
    }
    const gotofinancial=()=>{
        nav("/financial")
    }
    const gotoIT=()=>{
        nav("/IT")
    }
    const gotoconsultent=()=>{
        nav("/consultent")
    }
    const gotolaws=()=>{
        nav("/laws")
    }
    const gotogst=()=>{
        nav("/gst")
    }
    const gotoind=()=>{
        nav("/ind")
    }
    const gotoworldlocation=(id)=>{
        nav(`/worldlocation?id=${id}`)
        console.log(id);
        console.log(state.data.arr.worldwidelocation1);
    }
    return <div>
        <div className="footer">
            <div className="footer-container">
                <div>
                    <div className="footer-image">
                        <img src={logo} alt="loading"/>
                    </div>
                    <div className="footer-first-row">
                        <div className="footer-first-head">
                            <h1>THE POWER OF BEING UNDERSTOOD </h1>
                            <h2 className="footer-audit"> ASSURANCE | TAX | CONSULTING</h2>
                        </div>
                        <div className="footer-social-media">
                            <h4>Follow Authorised Audit</h4>
                            <FaLinkedin className="footer-social-icon"/>
                            <FaFacebook className="footer-social-icon"/>
                            <FaXTwitter className="footer-social-icon"/>
                            <FaYoutube className="footer-social-icon"/>
                        </div>
                    </div>
                </div>
                <div className="footer-second-row">
                    <div className="footer-second-col1">
                        <h3>Services</h3>
                        <div className="footer-sec-col1-list">
                            <ul>
                                <div className="footer-col1-col">
                                    <li><span onClick={gotointernal}>Internal audit and risk advisory</span></li>
                                    <li><span onClick={gototaxservices}>Tax Services – Domestic and International</span></li>
                                    <li><span onClick={gotocorporate}>Corporate advisory & structuring</span></li>
                                    <li><span onClick={gotofinancial}>Financial process outsourcing</span></li>
                                </div>
                                <div className="footer-col1-col">
                                    <li ><span onClick={gotoIT}>IT systems assurance and IT solutions</span></li>
                                    <li><span onClick={gotoconsultent}>Consulting services</span></li>
                                    <li><span onClick={gotolaws}>Company law and legal advisory</span></li>
                                    <li><span onClick={gotogst}>GST - Advisory And Compliance</span></li>
                                </div>
                                <div className="footer-col1-col">
                                    <li><span onClick={gotoind}>Ind AS advisory</span></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-second-col2">
                        <h3>Authorised Audit Worldwide Locations</h3>
                        <ul>
                        <div className="footer-col2-col">
                            {
                                state.data.arr.worldwidelocation1.map((e)=>{
                                    return <li><span onClick={()=>gotoworldlocation(e.id)}>{e.location}</span></li>
                                })
                            }
                             </div>
                             <div className="footer-col2-col">
                            {
                                state.data.arr.worldwidelocation2.map((v)=>{
                                    return <li><span>{v.location}</span></li>
                                })
                            }
                            </div>
                        </ul>
                    </div>
                    <div className="footer-second-col3">
                        <h3>Authorised Audit Links</h3>
                        <ul>
                            <li><span>Authorised Audit log-in</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="footer-third-head">
                        <span>Legal - </span><h4>Authorised Audit India</h4>
                    </div>
                    <div className="footer-third-body">
                        <p><b>Authorised Audit India</b> is a member of the Authorised Audit network and trades as Authorised Audit. Authorised Audit is the trading name used by the members of the Authorised Audit network.</p>
                    </div>
                    <div className="footer-third-para">
                        <p>Each member of the Authorised Audit network is an independent accounting and advisory firm each of which practices in its own right. The Authorised Audit network is not itself a separate legal entity of any description in any jurisdiction. The Authorised Audit network is administered by Authorised Audit International Limited, a company registered in England and Wales (company number 4040598) whose registered office is at 50 Cannon Street, London, EC4N 6JJ. </p>
                    </div>
                    <div className="footer-third-para">
                        <p>The brand and trademark Authorised Audit and other intellectual property rights used by members of the network are owned by Authorised Audit International Association, an association governed by article 60 et seq of the Civil Code of Switzerland whose seat is in Zug. Any articles or publications contained within this website are not intended to provide specific business or investment advice. No responsibility for any errors or omissions nor loss occasioned to any person or organisation acting or refraining from acting as a result of any material in this website can, however, be accepted by the author(s) or Authorised Audit International. You should take specific independent advice before making any business or investment decision.</p>
                    </div>
                    <div className="footer-fouth-list">
                        <ul>
                            <li><span>Cookie declaration</span></li>
                            <li><span>Accessibility</span></li>
                            <li><span>Anti-bribery declaration</span></li>
                            <li><span>Legal</span></li>
                            <li><span>Privacy Notice</span></li>
                            <li><span>Standard Terms of Engagement</span></li>
                            <li><span>Terms and Conditions</span></li>
                            <li><span>Sitemap</span></li>
                        </ul>
                    </div>
                    <div className="footer-last-para">
                        <p> <FaRegCopyright className="footer-last-icon"/> 2015-2024 Authorised Audit International Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Footer
import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import card1 from "../../images/internalcard1.png";
import "./Consultent.css"
const Consultent=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    const gotothispage=()=>{
        nav("/consultent")
    }
    const gotoitpage=()=>{
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
        <div className="consultent-banner">
            <div className="consultent-banner-empty"></div>
            <div className="consultent-banner-head">
                <span>Tackling your business challenges through consultancy and collaboration</span>
                <h1>Consulting services</h1>
                <p>We provide specialist consulting services to support your business in India in the short, medium or long term. Combined with our vast sector and service expertise, the key to our consultancy style is partnership; we’ll work to understand the challenges that your business is facing, then bring on board our local and global experts to provide the precise business consultancy support you require.</p>
            </div>
        </div>
        <div>
            <div className="con-det-container">
                <div className="con-det-info">
                    <h1>Our business consulting services</h1>
                    <p>Our consultancy support in India includes but is not limited to:</p>
                    <p><span onClick={gotothispage}>Operations consulting:</span> RSM’s operations business advisory specialists can help you increase operational effectiveness and efficiency to gain a competitive advantage. Our operations consulting services yield better utilisation of resources, increased productivity and greater customer satisfaction.</p>
                    <p>Let us assist in developing your operations strategy and managing its implementation.</p>
                    <p><span onClick={gotothispage}>Capital market consulting:</span> Capital funding is essential for allowing your business to compete and grow.</p>
                    <p>Our capital market consultancy services can support you in multiple respects; from guiding the structuring of your organisation in preparation for accessing capital markets, to determining the suitable financial instruments with which to do so.</p>
                    <p><span onClick={gotoitpage}>Energy and sustainability consulting:</span> Our specialist team in India can provide strategic, technical and financial business advisory services to reduce your organisation’s environmental impact and improve its sustainability.</p>
                    <p>Our energy and sustainability consulting services include enabling you to manage compliance and reputational risks and report on sustainability standards.</p>
                    <p><span onClick={gotothispage}>Executive search and HR solutions:</span> RSM is a member of the International Executive Search Network and has successfully handled over 10,000 executive professional placements from our multiple office locations across India.</p>
                    <p><span onClick={gotothispage}>Supply Chain Consulting:</span>  RSM specializes in assisting clients from strategy to execution across the Supply Chain to unearth potential value by optimizing inbound, outbound logistics, distribution network and streamlining key business processes associated with procurement, manufacturing, and distribution. </p>
                    <p>Our team includes domain as well as process experts, specialized in driving optimum and sustainable benefits for our clients. </p>
                </div>
            </div>
        </div>
        <div className="internal-list">
            <div className="internal-list-container">
                <div className="internal-list-con-col1">
                    <div className="internal-list-service">
                        <h3>Consulting services</h3>
                        <h1>Why choose RSM for business advisory services in India?</h1>
                    </div>
                </div>
                <div  className="internal-list-con-col2">
                    <div className="con-det-list">
                        <ul>
                            <li><span>Global and local:</span> RSM is the seventh largest global audit, tax and consulting network and is consistently ranked amongst India’s top six accounting and consulting groups</li> 
                            <li><span>Collaborative:</span> We share skills, insight and resources as an integrated team, as well as a client-centric approach that’s based on a deep understanding of your business</li>
                            <li><span>Diverse:</span> We boast a multi-disciplinary team of professionals comprising of chartered accountants, management graduates, engineers, IT, secretarial and legal professionals, cost accountants, doctorates and social scientists</li>
                            <li><span>Synergetic:</span> Our breadth of services allows for regular involvement of our experts from other service domains to consult on your various issues</li>
                            <li><span>Flexible:</span> Our extensive experience of consultancy support in India spreads across various functions, sectors and nationalities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="consultent-form">
            <div className="con-form-container">
                <form>
                    <label>Name</label>
                    <div className="con-form-input">
                        <input type="text"/>
                    </div>
                    <label>email</label>
                    <div className="con-form-input">
                        <input type="text"/>
                    </div>
                    <div className="con-form-agree">
                        <input type="checkbox"/><span> i consent to having my data used for email marketing purposes</span>
                        <p>View full terms and conditions</p>
                    </div>
                    <div className="con-form-btn">
                        <button>Submit</button>
                    </div>
                </form>
                <div className="con-form-check">
                    <div className="con-form-click"></div>
                    <span>I'm not a robot</span>
                    <div className="con-form-captcha">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="loading"/>
                        <p>reCAPTCHA</p>
                        <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
                        <a href="https://policies.google.com/terms?hl=en">Terms</a>
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
export default Consultent
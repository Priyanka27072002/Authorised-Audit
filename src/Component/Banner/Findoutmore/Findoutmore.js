import React from "react";
import image1 from "../../images/carolinabanner.jpg";
import image2 from "../../images/banner-2.jpg" 
import "./Findoutmore.css"
import { useNavigate } from "react-router-dom";
const Findoutmore=()=>{
    let nav=useNavigate()
    const gotofaces=()=>{
        nav("/facesofrsm")
    }
    return <div>
        <div id="findmore-banner">
            <div className="findmore-banner-container">
                <div className="findmore-ban-image1">
                    <img src={image2} alt="loading"/>
                </div>
                <div className="findmore-layer">
                    <div className="findmore-ban-image2">
                        <img src={image1} alt="loading"/>
                    </div>
                </div>
            </div>
            <div className="fine-banner-design"></div>
            <div className="find-banner-head">
                <div className="find-ban-head-con">
                    <h1>Authorised Audit Launches evolved</h1>
                    <h1>visual brand</h1>
                </div>
            </div>
        </div>
        <div>
            <div className="find-detail-empty"></div>
            <div className="find-detail-container">
                <div className="find-detail-body">
                    <h1>January 2024 sees the launch of an evolved visual brand for Authorised Audit globally.</h1>
                    <p>In response to changing market dynamics and to support the delivery of our global business ambitions, we have re-energised our presentation to market, reinvigorating our visual brand to better represent both who we are and why we are different.</p>
                    <p>Continuing to hero our talented people as the central and most important pillar of our brand, we have introduced a new creative device taken from the DNA of our logo. Named our ‘Pattern of Progress’, the device reflects the journey of discovery we undertake to build dynamic and compelling solutions to individual client needs. The Pattern alludes to the constant state of flux we all experience in the world of work and the technological environment in which we all live, where digital empowerment is core to progress. Building from bottom left to top right, it symbolises forward movement and the attainment of future goals in an ever-changing and complex world, highlighting our collective commitment at RSM to focus on the issues that matter most to our clients and our people. </p>
                </div>
            </div>
        </div>
        <div className="find-face-meet">
            <div className="find-face-meet-empty"></div>
            <div className="find-face-row">
                <div className="find-face-col1">
                    <h1>Meet the faces of Authorised Audit</h1>
                </div>
                <div className="find-face-col2">
                    <button onClick={gotofaces}>Learn More</button>
                </div>
            </div>
        </div>
    </div>
}
export default Findoutmore
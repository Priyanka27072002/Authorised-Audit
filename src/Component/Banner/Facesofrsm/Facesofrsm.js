import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Facesofrsm.css"
import { useSelector } from "react-redux";
const Facesofrsm=()=>{
    let nav=useNavigate()
    let state=useSelector((samp)=>samp)
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
        <div className="face-banner">
            <div className="face-banner-empty"></div>
            <div className="face-banner-head">
                <h1>The faces of Authorised Audit</h1>
            </div>
        </div>
        <div>
            <div className="face-detail-container">
                <div className="face-detail-info">
                    <h1>About our imagery</h1>
                    <p>As an integral part of the RSM visual identity, we use photographs of our own people to bring the essence of Authorised Audit to life. Through our people portraiture, we capture the broad range of personalities and cultures of our global team, and showcase their approachability and confidence.</p>
                    <p>We began photographing our people as our primary image style in 2015 and we have built an image bank of more than 3,000 photographs of our global team, refreshing our image bank annually or more frequently with new faces of RSM — each with their own story and unique skill set that adds to the Authorised Audit family.</p>
                    <div className="face-detail-video"></div>
                </div>
            </div>
        </div>
        <div className="face-card">
            <div className="face-card-container">
                <h1>Meet some of the faces of Authorised Audit</h1>
                <div className="face-card-row">
                    {
                        state.data.arr.facescard.map((e)=>{
                            return <div className="face-card-col">
                                <div className="face-card-card">
                                    <div className="face-card-image">
                                        <img src={e.cardimag} alt="loading"/>
                                    </div>
                                    <div className="faxce-card-detail">
                                        <h2>{e.name}</h2>
                                        <p>{e.aboutthem}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}
export default Facesofrsm
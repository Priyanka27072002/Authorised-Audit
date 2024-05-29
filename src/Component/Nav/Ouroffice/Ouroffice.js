import React from "react";
import "./Ouroffice.css"
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Ouroffice=()=>{
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    const gotoofficedetail=(id)=>{
        nav(`/officedetail?id=${id}`)
    }
    let state=useSelector((samp)=>samp)
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
        <div className="office-banner">
            <div className="office-ban-empty"></div>
            <div className="office-ban-head">
                <h1>Our offices</h1>
                <div className="office-ban-para">
                    <p>With 12 offices spread across the country, we can offer </p>
                    <p>nationwide service. Find your nearest Authorised Audit office below</p>
                </div>
            </div>
        </div>
        <div>
            <div className="office-card-container">
                <div className="office-card-row">
                    {
                        state.data.arr.officecard.map((e)=>{
                            return <div className="office-card-col" onClick={()=>gotoofficedetail(e.id)}>
                                <div className="office-card-image">
                                    <img src={e.image} alt="loading"/>
                                </div>
                                <div className="office-card-head">
                                    <h2>{e.heading}</h2>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}
export default Ouroffice
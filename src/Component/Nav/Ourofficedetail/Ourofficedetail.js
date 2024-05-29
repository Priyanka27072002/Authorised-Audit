import React from "react";
import "./Ourofficedetail.css"
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Ourofficedetail=()=>{
    let nav=useNavigate()
    let state=useSelector((samp)=>samp)
    let [params]=useSearchParams()
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
            {
                state.data.arr.officecard.map((e)=>{
                    return e.id===Number(params.get("id"))?<div>
                        <div className="off-det-banner">
                            <div className="off-det-image" style={{backgroundImage:`url(${e.banimag})`}}>
                            </div>
                            <div className="off-det-head">
                                <p>Our office</p>
                                <h1>{e.heading}</h1>
                            </div>
                        </div>
                        <div>
                            <div className="off-det-container">
                                <div className="off-det-main">
                                {
                                    e.detailhead?<div className="off-det-det-head">
                                        <h1>{e.detailhead}</h1>
                                    </div>:""
                                }
                                {
                                    e.carddetailpara1?<p>{e.carddetailpara1}</p>:""
                                }
                                {
                                    e.carddetailpara2?<p>{e.carddetailpara2}</p>:""
                                }
                                {
                                    e.carddetailpara3?<p>{e.carddetailpara3}</p>:""
                                }
                                {
                                    e.carddetailpara4?<p>{e.carddetailpara4}</p>:""
                                }
                                {
                                    e.serviceoffered?<div>
                                        <h3>Services Offered </h3>
                                        <p>{e.serviceoffered}</p>
                                    </div>:""
                                }
                                {
                                    e.industryserved?<div>
                                        <h3>Industries Served </h3>
                                        <p>{e.industryserved}</p>
                                    </div>:""
                                }
                                {
                                    e.clientindustries?<div>
                                        <h3>Clients and Industries Served</h3>
                                        <p>{e.clientindustries}</p>
                                    </div>:""
                                }
                                {
                                    e.aboutus?<div>
                                        <h3>About Us:</h3>
                                        <p>{e.aboutus}</p>
                                    </div>:""
                                }
                                {
                                    e.servicelist?<div className="off-det-list">
                                       <ol>
                                        {
                                            e.servicelist1? <li>{e.servicelist1}</li>:""
                                           
                                        }
                                       {
                                             e.servicelist2? <li>{e.servicelist2}</li>:""
                                       }
                                       {
                                            e.servicelist3? <li>{e.servicelist3}</li>:""
                                       }
                                       {
                                            e.servicelist4? <li>{e.servicelist4}</li>:""
                                       }
                                       {
                                            e.servicelist5?<li>{e.servicelist5}</li>:""
                                       }
                                       {
                                            e.servicelist6?<li>{e.servicelist6}</li>:""
                                       }
                                       {
                                            e.servicelist7?<li>{e.servicelist7}</li>:""
                                       }
                                       {
                                            e.servicelist8?<li>{e.servicelist8}</li>:""
                                       }
                                       </ol>
                                    </div>:""
                                }
                                {
                                    e.citydream?<p>{e.citydream}</p>:""
                                }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="off-ino-container">
                                <div>
                                    {
                                        e.officehour?<p>Office hours: {e.officehour}</p>:""
                                    }
                                    {
                                        e.phone?<p>{e.phone}</p>:""
                                    }
                                    {
                                        e.email?<p>Email: <span className="mail">{e.email}</span></p>:""
                                    }
                                    {
                                        e.maplocation?<a href={e.maplocation}>Click here for Google Maps Link</a>:""
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="off-det-map-container">
                                <div className="off-det-map-row">
                                    <div className="off-det-map-col">
                                        {
                                            e.address?<p className="off-address">Adress: {e.address}</p>:""
                                        }
                                        {
                                            e.mapdiv? <iframe src={e.mapdiv} title="maplocation"></iframe>:""
                                        }
                                       
                                    </div>
                                    <div className="off-det-map-col">
                                        <div className="off-det-map-form">
                                            <p className="general">General enquiries</p>
                                            <form>
                                                <div className="off-form-lab">
                                                    <label>First name</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Last name</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Company name</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Job title</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Country of residence</label>
                                                </div>
                                               <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Business email</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Business phone</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Subject</label>
                                                </div>
                                               <div className="off-form-in">
                                                    <input type="text"/>
                                                </div>

                                                <div className="off-form-lab">
                                                    <label>Message</label>
                                                </div>
                                                <div className="off-form-in">
                                                    <textarea rows={7}></textarea>
                                                </div>

                                               <div className="off-form-btn">
                                                    <button>Submit</button>
                                               </div>
                                            </form>
                                            <div className="map-form-captcha">
                                        <div className="loc-click-captcha">
                                        <div className="loc-click"></div>
                                        <div>
                                            <p>I'm not a robot</p>
                                        </div>
                                        </div>
                                        
                                        <div className="loc-catcha-design">
                                            <div className="loc-captcha-empty">
                                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="loading"/>
                                            </div>
                                            <p className="catcha-name">reCAPTCHA</p>
                                            <div className="catcha-link">
                                                <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
                                                <a href="https://policies.google.com/terms?hl=en">Terms</a>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>:""
                })
            }
        </div>
    </div>
}
export default Ourofficedetail
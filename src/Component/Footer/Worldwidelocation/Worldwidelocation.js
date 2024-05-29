import React from "react";
import "./Worldwidelocation.css"
import { useSearchParams } from "react-router-dom";
import { IoIosArrowDown ,IoMdArrowDropright,IoIosArrowForward} from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useSelector } from "react-redux";
import { IoPricetagSharp } from "react-icons/io5";
const Worldwidelocation=()=>{
    let [params]=useSearchParams()
    let state=useSelector((samp)=>samp)
    return <div>
        <div>
            {
                state.data.arr.worldwidelocation1.map((e)=>{
                    return e.id===Number(params.get("id"))?<div>
                        <div>
                            {
                                e.backcolor?<div className="back-color">
                                    <div className="back-container">
                                        <h1>{e.location}</h1>
                                        <div className="back-select">
                                            <IoIosArrowDown  className="location-icon"/>
                                            <p>SELECT COUNTRY/JURISDICTION</p>
                                        </div>
                                        
                                    </div>
                                    </div>:<div className="location-bannner">
                                        <div className="location-container">
                                            <h1>{e.location}</h1>
                                            <div className="location-select">
                                            <IoIosArrowDown className="location-icon"/>
                                            <p>SELECT COUNTRY/JURISDICTION</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                            }
                            <div className="location-detail-container">
                                <div className="location-detail-info">
                                    <h3>{e.detailhead}</h3>
                                    {
                                        e.detailpara1?<p>{e.detailpara1}</p>:""
                                    }
                                    {
                                        e.detailpara2?<p>{e.detailpara2}</p>:""
                                    }
                                    {
                                        e.detailpara3?<p>{e.detailpara3}</p>:""
                                    }
                                </div>
                            </div>
                            <div className="location-card">
                                <div className="location-card-container">
                                    <div className="location-card-row">
                                        {
                                            e.detailcard.map((v)=>{
                                                return <div className="location-card-col">
                                                    <div className="location-card-card">
                                                        <div className="loc-card-tag">
                                                            <div className="loc-card-icon">
                                                                <IoPricetagSharp className="loc-card-tag-icon"/>
                                                            </div>
                                                       
                                                            {
                                                            v.cardtag.map((n)=>{
                                                                return <div className="loc-card-tag-detail"><span>{n}</span></div>
                                                            }) 
                                                        }</div>
                                                        <div className="loc-card-image">
                                                            <img src={v.cardimage} alt="loading"/>
                                                        </div>
                                                        <div className="loc-card-detail">
                                                            <p>{v.carddate}</p>
                                                            <h2>{v.cardname}</h2>
                                                        </div>
                                                        <div className="loc-card-more">
                                                            <p>READ MORE</p>
                                                            <IoMdArrowDropright className="loc-more-icon"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="loc-profile-container">
                                <div className="loc-profile">
                                    <div className="loc-pro-row">
                                        <div className="loc-pro-col1">
                                            <div className="loc-pro-image">
                                                <img src={e.profileimage} alt="loading"/>
                                            </div>
                                        </div>
                                        <div className="loc-pro-col2">
                                            <h3>{e.profilename}</h3>
                                            <p className="pro-view">{e.profileposition}</p>
                                            <div className="loc-pro-view">
                                            <p>View profile</p>
                                            <IoIosArrowForward className="loc-pro-icon"/>
                                            </div>
                                            <div className="loc-pro-btn">
                                                <RxEnvelopeClosed className="loc-pro-mail"/><p>Contact {e.profilename}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loc-contact">
                                <div className="loc-cont-head">
                                    <h1>Contact us</h1>
                                    <h3>Complete this form and an Authorised Audit representative will be in touch.</h3>
                                </div>
                            </div>
                            <div className="loc-cont-form">
                                <div className="loc-cont-form-det">
                                    <label>How can we help?</label>
                                    <div>
                                        <select>
                                            <option>-Select-</option>
                                            <option>Becoming a Member Firm</option>
                                            <option>Speak to one of our specialist</option>
                                            <option>Submit RFB</option>
                                            <option>Working for Authorised Audit</option>
                                        </select>
                                    </div>
                                    <div className="loc-form-captcha">
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
                                    <div className="loc-form-btn">
                                        <button>Submit</button>
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
export default Worldwidelocation
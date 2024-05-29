import React, { useState } from "react";
import banner from "../images/banner.jpg"
// import mask from "../images/mask.png"
import about1 from "../images/about1.jpg"
import country from "../images/country_icon.png"
import office from "../images/office_icon.png"
import person from "../images/people_icon.png"
import banner2 from "../images/banner-2.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Banner.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlearr, handlecount } from "../../Slice";
import play from "../images/playbtn.png"
const Banner = () => {
    let [bool, setBool] = useState(false)
    let nav = useNavigate()
    const gotogolbalceo = () => {
        nav("/globalCEO")
    }
    const gotoabout = () => {
        nav("/about")
    }
    const gotoglobalfinance=()=>{
        nav("/golbalfinance")
    }
    let state = useSelector((samp) => samp)
    let dispatch = useDispatch()
    let array = state.data.arr.addcard
    let array2 = state.data.arr.totalcard
    let count = state.data.count
    const showcard = () => {

        count = count + 3

        if (count === array2.length) {
            count = 0
        }
        for (let i = count; i < count + 3; i++) {
            array = [...array, array2[i]]

        }

        dispatch(handlecount(count))
        dispatch(handlearr(array))

    }
    const gotofindmorepage=()=>{
        nav("/findmore")
    }
    return <div>
        <div className="banner-image" >
            <div id="homebanner">
                <div className="image-container">
                    <div className="first-image">
                        <img srcSet={banner2} alt="loading"/>
                    </div>
                    <div className="image-layer">
                        <div className="second-image">
                            <img src={banner} alt="loading"/>
                        </div>
                    </div>
                </div>
                <div className="banenr-heading">
                <span className="banner-text">Empowering you to move forward with</span>
                <div className="banner-head-span">
                    <span>confidence</span>
                </div>
            </div>
            </div>
            
        </div>
        <div className="about">
            <div className="about-detail">
                <h1>About Authorised Audit</h1>
                <p>Authorised Audit is a powerful Network of assurance, tax and consulting experts with offices all over</p>
                <p>the world. As an integrated team, we share skills, insight and resources, as well as a</p>
                <p>client-centric approach that’s based on a deep understanding of your business.</p>
            </div>
            <div className="about-btn">
                <button onClick={gotoabout}>Learn More</button>
            </div>
        </div>
        {
            bool ? <div className="about-global2">
                <div className="about-global-body2">
                    <div className="about-global-list">
                        <ul>
                            <li className="global-list2" onClick={() => setBool(false)}>Global news:</li>
                            <li className="global-list1">Globel Highlight:</li>
                        </ul>
                    </div>
                    <div className="about-globel-list-detail">
                        <div className="global-list-detail1">
                            <h1>Global highlights:</h1>
                            <h2>Authorised Audit global revenue leaps 16% to record US$9.4bn</h2>
                            <h3>Authorised Audit, the leading provider of assurance, tax and consulting services to middle-market businesses, has today announced worldwide revenues of US$9.4 billion for the 12 months to December 2023, a year-on-year growth of 16%. </h3>
                        </div>
                        <div className="global-list-detail2">
                            <div className="global-list-btn" onClick={gotoglobalfinance}>
                                <p>Find out more</p>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div> :
                <div className="about-global1">
                    <div className="about-global-list-img">
                        <img src={about1} alt="loading" />
                        <div className="about-global-body">
                            <div className="about-global-list">
                                <ul>
                                    <li className="global-list1">Global news:</li>
                                    <li className="global-list2" onClick={() => setBool(true)}>Globel Highlight:</li>
                                </ul>
                            </div>
                            <div className="about-globel-list-detail">
                                <div className="global-list-detail1">
                                    <h1>Global news:</h1>
                                    <h2>Authorised Audit names E.J. Nedder as new global CEO</h2>
                                    <h3>Authorised Audit, the leading global assurance, tax and consulting provider to the middle market, today announced that Ernest John Nedder will succeed Jean Stephens as the new Chief Executive Officer for RSM International, effective June 1, 2024. </h3>
                                </div>
                                <div className="global-list-detail2">
                                    <div className="global-list-btn" onClick={gotogolbalceo}>
                                        <p>Find out more</p>
                                        <MdKeyboardArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
        }
        <div className="card">
            <div className="card-container">
                <div className="card-row">
                    <div className="card-col">
                        <div className="card-image">
                            <img src={country} alt="loading" />
                        </div>
                        <h1>Countries</h1>
                        <p>We have firms in 120 countries, with a presence in each of the top 40 major business centres throughout the world.</p>
                    </div>
                    <div className="card-col">
                        <div className="card-image">
                            <img src={person} alt="loading" />
                        </div>
                        <h1>People</h1>
                        <p>We have a global team of 64,000 people</p>
                    </div>
                    <div className="card-col">
                        <div className="card-image">
                            <img src={office} alt="loading" />
                        </div>
                        <h1>Offices</h1>
                        <p>We have over 820 offices across the Americas, Europe, MENA, Africa and Asia Pacific.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="brand">
                <div className="brand-row">
                    <div className="brand-col1">
                        <div className="barnd-head">
                            <span>Authorised Audit Launches evolved visual brand</span>
                        </div>
                        <div className="brand-para">
                            <span>January 2024 sees the launch of an evolved visual brand for Authorised Audit globally. In response to changing market dynamics and to support the delivery of our global business ambitions, we have re-energised our presentation to market, reinvigorating our visual brand to better represent both who we are and why we are different.</span>
                        </div>
                    </div>
                    <div className="brand-col2">
                        <button onClick={gotofindmorepage}>Find out More</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="home-card-container"> 
                <div className="home-card-row">
                    {
                        array.map((e) => {
                            return <div className="home-card-col">
                                <div className="home-card-image">
                                    <img src={e.cardimg} alt="loading" />
                                </div>
                                
                                {
                                     e.cardtax?<div className="home-card-detail">
                                     <p className="home-card-main">{e.cardname}</p>
                                     <p className="home-card-mini"># | {e.cardtax}</p>
                                     </div>:<div className="home-card-detail2">
                                     <p className="home-card-main">{e.cardname}</p>
                                </div>
                                }
                                
                            </div>
                        })
                    }
                </div>
                <div className="home-card-play">
                    <img src={play} alt="loading" onClick={showcard} />
                </div>
            </div>
        </div>
        <div className="newsletter">
            <div className="newltter-container">
                <div className="news-head">
                    <h1>NewSletter</h1>
                    <p>Sign up to our blog or one of our newsletters for advice, news and changes in the world of assurance, tax and consulting.</p>
                </div>
                <div className="news-btn">
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
}
export default Banner
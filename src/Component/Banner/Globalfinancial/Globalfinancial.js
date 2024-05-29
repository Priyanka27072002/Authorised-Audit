import React from "react";
import globalbanner from "../../images/globalfin-banner.jpg";
import banner2 from "../../images/banner-2.jpg";
import jean from "../../images/Jean quote.jpg"
import { IoIosArrowForward } from "react-icons/io";
import "./Globalfinancial.css"
const Globalfinancial=()=>{
    return <div>
        <div id="globalfin-banner">
            <div className="globalfin-ban-container">
                <div className="gobal-first-image">
                        <img src={banner2} alt="loading"/>
                </div>
                <div className="global-main-layer">
                    <div className="gobal-second-image">
                        <img src={globalbanner} alt="loading"/>
                    </div>
                </div>
                <div className="golbal-ban-title"></div>
            </div>
            <div className="global-banner-heading">
                <div className="global-ban-title">
                    <h1>2023 Global Financial </h1>
                    <h1>Result</h1>
                </div>
            </div>
        </div>
        <div className="globalfin-about-jean">
            <div className="global-about-container">
                <div className="global-empty"></div>
                <div className="global-about-row">
                    <div className="global-about-col1">
                        <h3>Global highlights</h3>
                        <h1>Authorised Audit global revenue leaps 16% to record US$9.4bn</h1>
                        <div className="global-about-btn">
                            <button>Press release</button>
                        </div>
                    </div>
                    <div className="global-about-col2">
                        <div className="global-about-image">
                            <img src={jean} alt="loading"/>
                        </div>
                        <div className="global-about-detail">
                            <p className="global-about-para">“This year’s financial results further cement our status as the leading global provider of professional services to the middle market. Powered by our 2030 Global Strategy, Authorised Audit has worked collaboratively as a global organisation more than ever before to innovate and better serve clients across borders."</p>
                            <p className="global-about-name">Jean M. Stephens </p>
                            <p className="global-about-position">CEO</p>
                            <p className="global-about-place">Authorised Audit International</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="global-message">
            <div className="global-message-container">
                <div className="global-msg-row">
                <div></div>
                    <div className="global-msg-col1">
                        <div className="global-msg-card">
                            <h1>A message from Jean Stephens, CEO, Authorised Audit International.</h1>
                            <p>In this video, Jean Stephens shares the key drivers behind Authorised Audit’s 2023 global growth of 16% and outlines the evolution of the Authorised Audit brand.</p>
                        </div>
                    </div>
                    <div className="global-msg-col2">
                        <div className="global-msg-video">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="global-regional-highlight">
            <div className="global-reg-container">
                <div className="global-reg-head">
                    <ul>
                        <li><span>Regional Highlights</span></li>
                    </ul>
                </div>
                <div className="global-reg-row">
                    <div className="global-reg-col1">
                        <h1>Regional Highlights</h1>
                        <p>All regions showed impressive growth.Europe grew by 36% as a result of sustained development across 33 Member Firms and the addition of Authorised Audit Ebner Stolz in Germany.</p>
                        <p>Europe grew by 36% as a result of sustained development across 33 Member Firms and the addition of Authorised Audit Ebner Stolz in Germany.</p>
                        <p>North America, Authorised Audit’s largest region by revenue, saw an impressive 13% rise in fee income.</p>
                        <p>A strategic merger in South Africa coupled with overall progress across the region contributed to a 29% leap in revenue from Africa.</p>
                        <p>Exceptional growth was recorded for both the MENA region, with a 30% increase, and Latin America, with an increase of 18%.</p>
                        <p>Representing more than US$1bn in fee income, the Asia Pacific region grew by a strong 8%.</p>
                    </div>
                    <div className="global-reg-col2">
                        <div className="global-reg-half">
                            <div className="global-reg-small">
                                <p>Asia Pacific</p>
                                <IoIosArrowForward />
                            </div>
                            <div className="global-reg-small">
                                <p>Europe</p>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="global-reg-half">
                            <div className="global-reg-small">
                                <p>Africa</p>
                                <IoIosArrowForward />
                            </div>
                            <div className="global-reg-small">
                                <p>Latin America</p>
                                <IoIosArrowForward />
                            </div>
                            <div className="global-reg-small">
                                <p>MENA</p>
                                <IoIosArrowForward />
                            </div>
                        </div>
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
                        <button>Find out More</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="global-strategy-container">
                <div className="global-str-detail">
                    <h1>Authorised Audit’s Global Strategy to 2030</h1>
                    <p>2023 marked the first year of the 2030 Global Strategy, which outlines a major multi-year growth and transformation programme that targets 100% growth in revenue by 2030.</p>
                    <p>Through the Strategy, Authorised Audit will make increasing use of global, digital delivery models, enhanced insight generation and wider use of automation, big data, machine learning and artificial intelligence to support businesses through change. We will continue to drive service quality and promote responsible business practice whilst constantly enhancing agility and innovation.</p>
                    <p>Our ongoing investment in talent and people development is significant, with inclusive teams, culture, governance and processes actively aligning across borders to empower both clients and RSM people to achieve their ambitions. </p>
                </div>
            </div>
        </div>
        <div className="global-str-driver">
            <div className="global-str-container">
                <div className="global-str-head">
                    <h1>Strategic Drivers</h1>
                    <p>At Authorised Audit, we exist to instill confidence in a world of change.</p>
                </div>
                <div className="str-dri-row">
                    <div className="str-dri-col">
                        <div className="str-dri-card">
                            <div className="str-dri-image">
                                <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/sites/default/files/styles/professionals_image_style/public/2024-01/RSM_LDN23_IE_160523_S15_JOSE_3071_V2_0.png" alt="loading"/>
                            </div>
                            <div className="srt-dri-details">
                                <h2>People</h2>
                                <p>Drive an unrivalled, inclusive culture and talent experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="str-dri-col">
                        <div className="str-dri-card">
                            <div className="str-dri-image">
                                <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/sites/default/files/styles/professionals_image_style/public/2024-01/finance_investment_thumbnail-1240x930px_03_0.jpg" alt="loading"/>
                            </div>
                            <div className="srt-dri-details">
                                <h2>Clients</h2>
                                <p>Deliver rich personalised experiences through market-leading insights.</p>
                            </div>
                        </div>
                    </div>
                    <div className="str-dri-col">
                        <div className="str-dri-card">
                            <div className="str-dri-image">
                                <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/sites/default/files/styles/professionals_image_style/public/2024-01/technology_thumbnail-1240x930px_02_0.jpg" alt="loading"/>
                            </div>
                            <div className="srt-dri-details">
                                <h2>Technology</h2>
                                <p>Champion and embrace future-focused agile, digital and global delivery models.</p>
                            </div>
                        </div>
                    </div>
                    <div className="str-dri-col">
                        <div className="str-dri-card">
                            <div className="str-dri-image">
                                <img src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/sites/default/files/styles/professionals_image_style/public/2024-01/manufacturing_consumer-goods_thumbnail-1240x930px_07.jpg" alt="loading"/>
                            </div>
                            <div className="srt-dri-details">
                                <h2>Solutions</h2>
                                <p>Win with industry and compelling global products and services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Globalfinancial
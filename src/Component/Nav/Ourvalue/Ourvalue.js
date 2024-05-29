import React from "react";
import "./Ourvalue.css"
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Ourvalue=()=>{
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
        <div className="ourvalue-banner">
            <div className="ourvalue-empty"></div>
            <div className="ourvalue-head">
                <h1>Our values</h1>
            </div>
        </div>
        <div>
            <div className="ourvalue-detail-container">
                <div className="ourvalue-detail">
                    <h3 className="ourvalue-header">The Authorised Audit brand purpose</h3>
                    <div className="ourvalue-empower">
                        <h2>We exist to empower our clients to move forward with confidence.</h2>
                    </div>
                    <div className="ourvalue-power-exp">
                        <h2>EXPERIENCE THE POWER OF BEING UNDERSTOOD</h2>
                        <p>The business world is evolving rapidly. Through advances in technology, communications and infrastructure, business barriers are disappearing and each day we become ever more global.</p>
                        <p>In this fast-paced environment, you need an adviser that thinks ahead and rapidly responds to your changing needs. At Authorised Audit, we build strong relationships based on deep understanding of what matters most to our clients.</p>
                        <p>It is our strong, collaborative approach that differentiates us. We will strive to truly understand you, your strategies and your aspirations and endeavor to be considered the adviser of choice to your business. By sharing the ideas and insights of our most senior professionals, we bring our expert local and global knowledge and resources to your environment, so you feel understood and empowered to move forwards with confidence.</p>
                        <p>This is the power of being understood. This is the Authorised Audit experience and our commitment to you.</p>
                    </div>
                    <div className="ourvalue-distin">
                        <h1>Distinguishing beliefs:</h1>
                    </div>
                    <div className="ourvalue-strong">
                        <h3>Building strong, collaborative client relationships based on a genuine understanding of needs, strategy and aspirations</h3>
                        <h3>Striving to be an essential part of our clients’ business, thinking ahead and responding rapidly to changing needs seamlessly across the globe</h3>
                        <h3>Benefiting every client from the ideas and insights of our most senior experts, both locally and globally, and enabling them to move forward with confidence</h3>
                        <div className="ourvalue-distin">
                            <h1>Collaboration. Understanding. Ideas and insight.</h1>
                        </div>
                        <div className="ourvalue-culture">
                            <h2>Values and culture:</h2>
                            <p>The Power of Being Understood is all about confidence. When you work with Authorised Audit, you are working with people who will take the time to truly understand you, who will bring tailored ideas and insight to your environment and who are committed to your success, helping you make confident decisions about your future.</p>
                            <p>This is achieved through our pursuit towards excellence in providing high quality services which are focused on the core principles of <span>integrity, quality, focus, timeliness, accessibility</span> and <span>commitment.</span></p>
                            <div className="ourvalue-intergity">
                                <h3>Integrity</h3>
                                <p>We strive to ensure the highest level of integrity while focusing on your deliverables. We place utmost care and relevance to ensure that the deliverables comply with the principles of ethics, fairness, honesty and integrity which are the cornerstones of our practice.</p>
                                <h3>Quality</h3>
                                <p>We aim to deliver qualitative solutions that can help to achieve your strategic objectives by deploying our best trained personnel and using the expertise and insights of our senior most leaders. We value deep, long-lasting and time-tested relationship with our clients and we build this through our commitment to professional excellence and providing you with highest quality service.</p>
                                <h3>Focus</h3>
                                <p>We believe in providing highly focused client oriented solutions which has been hallmark of all endeavors and has time and again motivated us to deliver our best under all circumstances.</p>
                                <h3>Timeliness</h3>
                                <p>We are committed to providing timely, cost-effective services by working closely with you to achieve your objectives in the most practical and efficient manner.</p>
                                <h3>Accessibility</h3>
                                <p>n the dynamics of the ever changing and competitive business environment, we understand that being accessible to you is an integral function of your growth. We believe that easy accessibility is essential for any relationship to succeed and accordingly every care is taken to ensure easy accessibility of our personnel at all times.</p>
                                <h3>Commitment</h3>
                                <p>We are committed to our objective of maintaining excellence in client servicing and also believe in commitment towards of our employees. We foster a working environment where people are respected, challenged and encouraged, trained and nurtured, where achievements are recognized, and where we enjoy what we do.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Ourvalue
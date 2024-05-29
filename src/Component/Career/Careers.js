import React from "react";
import "./Careers.css"
import { HiPrinter } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Careers=()=>{
    let state=useSelector((samp)=>samp)
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
        <div className="nav-career">
            <div className="career-banner"></div>
            <div className="career-banner-head">
                <h1>Careers</h1>
                <h3>Kickstart your career at RSM</h3>
            </div>
        </div>
        <div className="career-details">
            <div className="career-detail-container">
                <div className="career-detail-list">
                    <ul>
                        <li className="career-list-first">RSM vacancies</li>
                        <li className="career-list-second">Current vacancies</li>
                    </ul>
                </div>
                <div className="career-detail-row">
                    <div className="career-detail-col">
                        <div className="career-detail-cont">
                            <h1>Current vacancies</h1>
                            <p>At RSM, we are always looking for talented individuals to join our team.</p>
                            <p>The following positions are currently available in our RSM India offices.</p>
                            <p>If these positions do not fit your skill set, you can send us your application by applying online below.</p>
                        </div>
                    </div>
                    <div className="career-detail-col2">
                            <div className="car-det-list-row">
                                {
                                    state.data.arr.careerdetail.map((e)=>{
                                        return <div className="car-det-list-col">
                                            <div className="car-det-list-card">
                                            <p>{e.detailhead}</p>
                                            <IoIosArrowForward className="car-det-list-icon"/>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="career-apply">
            <div className="career-apply-container">
                <div className="career-apply-row">
                    <div className="career-apply-col">
                        <h1>Apply now</h1>
                        <p>At RSM, we recognise that people are our most important asset. We foster an environment of camaraderie, collaboration and learning that encourages each of us to bring our best self to work every day. We also celebrate talent and individuality and provide an environment where our people are encouraged to bring their unique skills to the table.</p>
                    </div>
                    <div className="career-apply-col">
                        <div className="career-apply-btn">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="career-work">
            <div className="career-work-container">
                <div className="career-work-row">
                    <div className="career-work-col">
                        <div className="career-work-card">
                        <h1>Why work for RSM</h1>
                        <p>We support our people with training, varied work experience and regular learning initiatives that help them to become successful professionals. If you arrive at work with enthusiasm for the job and a drive to learn and succeed, RSM provides the opportunities to develop your career.</p>
                        </div>
                    </div>
                    <div className="career-work-col">
                        <div className="career-work-video">
                            <div className="video-link">
                            <iframe title="Video" allow="autoplay; fullscreen" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/nZR6zHtpvtQ" data-ot-ignore=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Careers
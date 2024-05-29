import React, { useState } from "react";
import "./Nav.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import logo from "../images/logo2.png"
import { useNavigate } from "react-router-dom";
const Nav=()=>{
    let [bool,setBool]=useState(false)
    let [aboutbool,setAboutbool]=useState(false)
    let nav=useNavigate()
    const gotocareers=()=>{
        nav("/career")
    } 
    let colorchange=()=>{
        var a=document.getElementById("nav")
        setBool(true)
        if(bool===true){
           
            a.style.backgroundColor="#489dc1"
        }
        else{
            a.style.backgroundColor="#007EB4"
        }
    }
    const showabout=()=>{
        setAboutbool(true)
     }  
     const gotooffice=()=>{
        nav("/office")
     }
     const gotoourpeople=()=>{
        nav("/ourpeople")
     }
     const gotoourvalues=()=>{
        nav("/ourvalue")
     }
     const gotoaboutuspage=()=>{
        nav("/aboutnav")
     }
    return <div>
        <div className="nav-head" id="nav">
            <div className="nav-head-content">
                <div className="nav-head-toggle">
                <p>Contact</p>
                {
                    bool?<div>
                        <input type="checkbox" id="toggle" className="nav-input"/>
                <label for="toggle" onClick={colorchange}><p className="togglepara"onClick={()=>setBool(true)}>Low</p></label>
                    </div>:<div>
                    <input type="checkbox" id="toggle" className="nav-input"/>
                <label for="toggle" onClick={colorchange}><p className="togglepara"onClick={()=>setBool(false)}>High</p></label>
                    </div>
                }
            </div>
                <div className="nav-head-list">
                    <ul>
                        <li>Events</li>
                        <li>Newsroom</li>
                    </ul>
                    <IoLocationOutline className="nav-head-list-icon"/>
                    <select>
                        <option>India</option>
                        <option>Global</option>
                        <optgroup label="Regions"/>
                        <option>Africa</option>
                        <option>Asia Pacific</option>
                        <option>Europe</option>
                        <option>Latin America</option>
                        <option>MENA</option>
                        <option>North America</option>
                        <optgroup label="Country/Jurisdictions"/>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Argentina</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
        </div>
        <div className="nav-body">
            <div className="nav-body-image">
                <img src={logo} alt="loading"/>
            </div>
            <div className="nav-search">
                <input type="text" placeholder="Search"/><FaSearch className="nav-search-icon"/>
            </div>
            <div className="nav-body-list"> 
                <ul>
                    <li>What We offer <IoIosArrowDown /></li>
                    <li>Insights <IoIosArrowDown /></li>
                    <li onClick={showabout}>About Authorised Audit <IoIosArrowDown /></li>
                    <li onClick={gotocareers}>Careers</li>
                </ul>
            </div>
            {
                aboutbool? <div className="nav-about-row">
                <div className="nav-about-col1">
                    <div className="nav-about-head">
                        <h1>About Authorised Audit India</h1>
                    </div>
                    <div className="nav-about-experience">
                        <p>Experience the power of being understood</p>
                        <IoIosArrowForward className="nav-about-icon"/>
                    </div>
                    <div className="nav-about-empty"></div>
                </div>
                <div className="nav-about-col2">
                    <div className="nav-about-us">
                        <span onClick={gotoaboutuspage}>About us</span>
                        <div className="nav-about-office">
                            <span onClick={gotooffice}>Our offices</span>
                        </div>
                        
                    </div>
                    <div className="nav-about-us">
                        <span onClick={gotoourpeople}>Our people</span>
                        <div className="nav-about-office">
                            <span onClick={gotoourvalues}>Our values</span>
                        </div>
                    </div>
                </div>
            </div>:""
            }
           
        </div>
       
    </div>
}
export default Nav
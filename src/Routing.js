import React from "react";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import Banner from "./Component/Banner/Banner";
import Internalaudit from "./Component/Internal audit/Internalaudit";
import Contactus from "./Component/Internal audit/Contact/Contactus";
import Corporate from "./Component/Footer/Corporate/Corporate";
import Globalceo from "./Component/Banner/Globalceo/Globalceo";
import Globalfinancial from "./Component/Banner/Globalfinancial/Globalfinancial";
import About from "./Component/About/About";
import Findoutmore from "./Component/Banner/Findoutmore/Findoutmore";
import Facesofrsm from "./Component/Banner/Facesofrsm/Facesofrsm";
import Financialprocess from "./Component/Footer/Financialprocess/Financialprocess";
import ITsystem from "./Component/Footer/ITsystems/ITsystem";
import Consultent from "./Component/Footer/Consultentservices/Consultent";
import Lawsandlegal from "./Component/Footer/Lawsandlegal/Lawsandlegal";
import Goods from "./Component/Footer/Gst/Goods.js";
import Ind from "./Component/Footer/Ind/Ind.js";
import Worldwidelocation from "./Component/Footer/Worldwidelocation/Worldwidelocation.js";
import Footer from "./Component/Footer/Footer";
import Careers from "./Component/Career/Careers";
import Ouroffice from "./Component/Nav/Ouroffice/Ouroffice.js";
import Ourofficedetail from "./Component/Nav/Ourofficedetail/Ourofficedetail.js";
import Ourpeople from "./Component/Nav/Ourpeople/Ourpeople.js";
import Ourvalue from "./Component/Nav/Ourvalue/Ourvalue.js";
import Aboutnav from "./Component/Nav/Aboutnav/Aboutnav.js";
import Taxservices from "./Component/Footer/Taxservices/Taxservices";
const Routing=()=>{
    return <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Banner/>}/>
            <Route path="/career" element={<Careers/>}/>
            <Route path="/office" element={<Ouroffice/>}/>
            <Route path="/officedetail" element={<Ourofficedetail/>}/>
            <Route path="/ourpeople" element={<Ourpeople/>}/>
            <Route path="/ourvalue" element={<Ourvalue/>}/>
            <Route path="/aboutnav" element={<Aboutnav/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/findmore" element={<Findoutmore/>}/>
            <Route path="/facesofrsm" element={<Facesofrsm/>}/>
            <Route path="/internal" element={<Internalaudit/>}/>
            <Route path="/taxservice" element={<Taxservices/>}/>
            <Route path="/financial" element={<Financialprocess/>}/>
            <Route path="/IT" element={<ITsystem/>}/>
            <Route path="/consultent" element={<Consultent/>}/>
            <Route path="/laws" element={<Lawsandlegal/>}/>
            <Route path="/gst" element={<Goods/>}/>
            <Route path="/ind" element={<Ind/>}/>
            <Route path="/worldlocation" element={<Worldwidelocation/>}/>
            <Route path="/corporate" element={<Corporate/>}/>
            <Route path="/globalCEO" element={<Globalceo/>}/>
            <Route path="/golbalfinance" element={<Globalfinancial/>}/>
            <Route path="/contact" element={<Contactus/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
}
export default Routing
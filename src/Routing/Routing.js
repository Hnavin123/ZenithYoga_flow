// import { BrowserRouter, Route, Routes } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "../Description/Description";
import Membership from "../Header/Membership/Membership";
import WhoWeAre from "../Header/Whoweare/Whoweare";
import Home from "../Header/Home/Home";
import Classes from "../Header/Classes/Classes";
import Testimonials from "../SideBar/Sidebarcontent/Testimonials";
import OfferDetails from "../SideBar/Sidebarcontent/Offers";
import Features from "../SideBar/Sidebarcontent/Features";
import Admission from "../AdmissionForm/Admission";

const Rout = () => {
    return(
        <>
                <Routes>
                    <Route path="/" element={<Description /> } />
                    <Route path="membership" element={<Membership /> } />
                    <Route path="classes" element={<Classes /> } />
                    <Route path="about" element={<WhoWeAre /> } />
                    <Route path="home" element={<Home /> } />
                    <Route path="offers" element={<OfferDetails /> } />
                    <Route path="testimonials" element={<Testimonials /> } />
                    <Route path="features" element={<Features />} />
                    <Route path="admission-form" element={<Admission />} />
                </Routes>
        </>
    );
};
export default Rout;
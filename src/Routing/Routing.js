// import { BrowserRouter, Route, Routes } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "../Description/Description";
import Membership from "../Header/Membership/Membership";
import WhoWeAre from "../Header/Whoweare/Whoweare";
import Home from "../Header/Home/Home";
import Cart from "../Header/Cart/Cart";

import Classes from "../Header/Classes/Classes";
import Testimonials from "../SideBar/Sidebarcontent/Testimonials";
import OfferDetails from "../SideBar/Sidebarcontent/Offers";
import Features from "../SideBar/Sidebarcontent/Features";
import Admission from "../AdmissionForm/Admission";
import Equipments from "../SideBar/Sidebarcontent/Equipments";
import Trainers from "../SideBar/Sidebarcontent/Trainers";
import Dieticians from "../SideBar/Sidebarcontent/Dietecians";

import Contact from "../Header/Contact/Contact";
import NinetyDaysChallenge from "../SideBar/Sidebarcontent/NinetyDaysChallenge";

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="membership" element={<Membership />} />
        <Route path="classes" element={<Classes />} />
        <Route path="about" element={<WhoWeAre />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />

        <Route path="contact" element={<Contact />} />
        <Route path="offers" element={<OfferDetails />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="features" element={<Features />} />
        <Route path="admission-form" element={<Admission />} />
        <Route path="equipments" element={<Equipments />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="expertdietcians" element={<Dieticians />} />
        <Route path="challenges" element={<NinetyDaysChallenge />} />
      </Routes>
    </>
  );
};
export default Rout;

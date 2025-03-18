import { BrowserRouter, Route, Routes } from "react-router";
import Description from "../Description/Description";
import Membership from "../Header/Membership/Membership";
import WhoWeAre from "../Header/Whoweare/Whoweare";
import Home from "../Header/Home/Home";

const Rout = () => {
    return(
        <>
                <Routes>
                    <Route path="/" element={<Description /> } />
                    <Route path="membership" element={<Membership /> } />
                    <Route path="about" element={<WhoWeAre /> } />
                    <Route path="home" element={<Home /> } />
                </Routes>
        </>
    );
};
export default Rout;
import { Outlet } from "react-router-dom";
import Home from "../COMPONENTS/Home";
import Navber from "../COMPONENTS/Navber/Navber"
import Footer from "../COMPONENTS/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
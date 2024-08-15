import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

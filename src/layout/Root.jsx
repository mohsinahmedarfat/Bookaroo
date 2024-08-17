import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import useAuth from "../hooks/useAuth";

const Root = () => {
  const { loading } = useAuth();
  if (loading)
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-md bg-[#1A5319]"></span>
      </div>
    );
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto min-h-[calc(100vh-120px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

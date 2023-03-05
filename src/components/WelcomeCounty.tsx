import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
interface WelcomeProps {}

const WelcomeCounty: React.FC<WelcomeProps> = () => {
  const location = useLocation();
  const data = location.state?.data;
  const { county, name } = data;
  const countyState = county.split(',');
  return (
    <>
    <Link to="/"><Navbar /></Link>
      <div className="bg-white  flex justify-center ">
        <div className="w-11/12 md:w-7/12 xl:w-4/12 2xl:w-3/12 p-4 rounded max-h-screen shadow appearance-none border mt-8 md:mt-14">
        <div className="text-[18px] md:text-xl text-gray-600">Hello, {name}!</div>
        <div className="text-[15px] md:text-[18px] text-[#5f5f5f]">You selected {countyState[0]} County, {countyState[1]} </div>
        </div>
      </div>
    </>
  );
};
export default WelcomeCounty;

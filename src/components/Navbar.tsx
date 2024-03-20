
import React from "react";
import Logo from "../assets/Logo.png";
import { MdLogin } from "react-icons/md";


const Navbar: React.FC = () => {
  return (
    <div className="container">
      
        <img
          src={Logo}
          alt="Scissor"
          width="200"
          height="50"
          className="d-inline-block align-top"
        />
      
      <div>
        <button className=" btn-primary-1">
          <MdLogin /> Login
        </button>
        </div>

        <div>
        <button className="btn-primary-2">
         Register Now
        </button>
        </div>
    </div>
  );
};

export default Navbar;


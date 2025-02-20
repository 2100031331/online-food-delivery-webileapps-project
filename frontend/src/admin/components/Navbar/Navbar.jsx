import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin"); // Remove admin session
    toast.success("Admin Logged Out Successfully");
    navigate("/admin-login"); // Redirect to login page
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <div className="navbar-right">
        <img className="profile" src={assets.profile_image} alt="Profile" />
        <button className="admin-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

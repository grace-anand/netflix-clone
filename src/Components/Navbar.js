import "./Navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showNavBg, handleShowNavBg] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShowNavBg(true);
      } else handleShowNavBg(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${showNavBg && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://images.indianexpress.com/2021/07/black-panther-wakanda-forever-1200.jpg"
        alt="Profile"
      />
    </div>
  );
};

export default Navbar;

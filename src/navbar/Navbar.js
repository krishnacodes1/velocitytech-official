import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const navLinks = [
  { to: "home", label: "Home" },
  { to: "why-us", label: "About Us" },
  { to: "our-service", label: "Service" },
  { to: "contact", label: "Contact Us" },
  { to: "https://blog.velocitytech.in", label: "Blogs", external: true },
];

const renderNavLinks = () =>
  navLinks.map((link, index) => (
    <li className="nav-item cursor-pointer" key={index}>
      {link.external ? (
        <a
          href={link.to}
          className="nav-link cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ) : (
        <Link
          to={link.to}
          spy={true}
          smooth={true}
          offset={-110}
          duration={100}
        >
          <span className="nav-link cursor-pointer">{link.label}</span>
        </Link>
      )}
    </li>
  ));

  return (
    <div className="container custom mt-5 mb-5 d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="home" spy={true} smooth={true} offset={-110} duration={100}>
            <img
              src={`${process.env.PUBLIC_URL}/images/v.png`}
              style={{ width: "100px", height: "50px" }}
              alt="Company Logo"
            />
          </Link>

          {/* <div>
            <ul class="navbar-nav sm-icons">
              <li>
                <a class="nav-link" href="#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a class="nav-link" href="#">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a class="nav-link" href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a class="nav-link" href="#">
                  <i class="bi bi-pinterest"></i>
                </a>
              </li>
            </ul>
          </div> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            onClick={() => setIcon(!icon)}
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className={`fa-solid ${icon ? "fa-x" : "fa-bars"}`}></i>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${icon ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav  ms-auto">{renderNavLinks()}</ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;

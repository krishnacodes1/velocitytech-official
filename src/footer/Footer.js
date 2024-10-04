import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center">
      {/* Grid container */}
      <div className="container ">
        {/* Section: Social media */}

        {/* Facebook */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="https://www.facebook.com/profile.php?id=61550579938102"
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        {/* Twitter */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#55acee" }}
          href="https://twitter.com/Velocity_Tech_"
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>

        {/* Instagram */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>

        {/* Linkedin */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#0082ca" }}
          href="https://www.linkedin.com/company/velocitytechinfo/?viewAsMember=true"
          role="button"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* youtube */}
        <a
          data-mdb-ripple-init
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ff0000" }}
          href="https://www.youtube.com/@VelocityTechJnp"
          role="button"
        >
          <i className="fab fa-youtube"></i>
        </a>

        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <footer className="text-center p-3">
        © 2023 Copyright:
        <a className="text-body" href="https://velocitytech.in/">
          velocitytech.in
        </a>
      </footer>

      {/* Copyright */}
    </footer>
  );
};

export default Footer;

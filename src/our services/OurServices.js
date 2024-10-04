import React from "react";
import "./ourServices.css";

const OurServices = () => {
  return (
    <div className="our-service container">
      <div>
        <h1 class="text-center mt-5 fw-bold">
          Our <span class="theme-text">Services</span>
        </h1>
        <hr class="mx-auto mb-5 w-25" />
        <div class="service-card text-xs  row h-28 mb-5">
          <div
            data-aos="fade-down-right"
            data-aos-delay="200"
            class="fullcard  col-12 col-sm-6 col-md-3 m-auto my-4"
          >
            {/* <!-- card starts here --> */}
            <div class="card  shadow">
              <img src="/images/web.jpg" alt="" class="card-img-top" />
              <div class="card-body">
                <h3 class="text-center fw-bold">Web Development</h3>
                <hr class="mx-auto w-75" />
                <p className=" h-14">
                  Maximize conversions with expertly designed websites for
                  React, Angular, & more. Drive success through strategic
                  planning & flawless execution.
                </p>
              </div>
            </div>
            {/* <!-- card ends here --> */}
          </div>
          {/* <!-- col ends here --> */}
          <div
            data-aos="fade-down-right"
            data-aos-delay="200"
            class="fullcard zome col-12 col-sm-6 col-md-3 m-auto my-4"
          >
            {/* <!-- card starts here --> */}
            <div class="card shadow">
              <img src="/images/appdev.jpg" alt="" class="card-img-top" />
              <div class="card-body">
                <h3 class="text-center fw-bold">App Development</h3>
                <hr class="mx-auto w-75" />
                <p className=" h-14">
                  Revamp legacy apps: improved architecture, refactored code,
                  attractive new look. Engage users with modernized, appealing
                  mobile experiences.
                </p>
              </div>
            </div>
            {/* <!-- card ends here --> */}
          </div>
          {/* <!-- col ends here --> */}
          <div
            data-aos="fade-down-right"
            data-aos-delay="200"
            class="fullcard  col-12 col-sm-6 col-md-3 m-auto my-4"
          >
            {/* <!-- card starts here --> */}
            <div class="card shadow">
              <img src="/images/marketing.jpg" alt="" class="card-img-top" />
              <div class="card-body">
                <h3 class="text-center fw-bold">Digital Marketing</h3>
                <hr class="mx-auto w-75" />
                <p>
                  Elevate your digital marketing with our expert team. Stand out
                  on social media and achieve impactful results. Partner for
                  unbeatable success.
                </p>
              </div>
            </div>
            {/* <!-- card ends here --> */}
          </div>
          {/* <!-- col ends here --> */}
          <div
            data-aos="fade-down-right"
            data-aos-delay="200"
            class=" fullcard col-12 col-sm-6 col-md-3 m-auto my-4"
          >
            {/* <!-- card starts here --> */}
            <div class="card shadow">
              <img src="/images/seo.jpg" alt="" class="card-img-top" />
              <div class="card-body">
                <h3 class="text-center fw-bold">SEO </h3>
                <hr class="mx-auto w-75" />
                <p className=" text-9xl">
                  SEO stands for search engine optimization, aiming to improve
                  web page appearance and positioning in organic search results.
                </p>
              </div>
            </div>
            {/* <!-- card ends here --> */}
          </div>
          {/* <!-- col ends here --> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

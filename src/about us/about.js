import React from "react";
import "./about.css";

const About = () => {
  const steps = [
    {
      number: "1",
      icon: "💬",
      title: "Discuss Your Requirements",
      description:
        "Share your business goals and requirements with our team to kickstart the development process.",
      arrow: "https://on-the-spot.loopgenius.com/static/img/arrow.svg",
    },
    {
      number: "2",
      icon: "💻",
      title: "Development and Testing",
      description:
        "Our skilled developers will create your customized software solution while ensuring rigorous testing for quality assurance.",
      arrow:
        "https://on-the-spot.loopgenius.com/static/img/upside_down_arrow.svg",
    },
    {
      number: "3",
      icon: "🚀",
      title: "Launch and Support",
      description:
        "Once your software is ready, we will assist you in launching it and provide ongoing support to ensure its smooth operation.",
    },
  ];

  return (
    <div data-section="The How" className="container section">
      <div className="block-center">
        <h2 className="fs-2 mb-5">
          Seamless software development in 3 steps
        </h2>
      </div>

      <div id="threesteps" className="d-flex">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              data-aos="fade-down-right"
              data-aos-delay={`${200 + index * 100}`}
              className="sequence"
            >
              <div className="icon-sequence-bg ">
                <div className="number-sequence-bg ">
                  <div className="number-sequence ">{step.number}</div>
                </div>
                <div className="fs-1">{step.icon}</div>
              </div>
              <h4 className="heading-sequence">{step.title}</h4>
              <p className="paragraph-sequence px-4">{step.description}</p>
            </div>

            {step.arrow && (
              <img
                src={step.arrow}
                loading="lazy"
                alt=""
                className={` img-arrow---${index + 1} `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;

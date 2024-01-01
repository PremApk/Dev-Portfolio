import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const FILE_URL = "http://localhost:3000/Premkumar_Arumugam.pdf";

const downloadFileAtURL = (url) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const about = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <div className="about__description">
            An experienced professional with a strong background in Java. My expertise includes leveraging Java frameworks and tools to create scalable and efficient microservices solutions and address challenges related to distributed systems, REST API design, and inter-service communication.
            </div>
            <button className="btn" onClick={() => {
              downloadFileAtURL(FILE_URL);
            }}>Download CV</button>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Spring Framework</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage spring"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Apache Kafka</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage kafka"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Cloud Knowledge</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cloud"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default about;

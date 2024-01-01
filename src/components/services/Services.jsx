import React from 'react';
import './services.css';
import Image1 from "../../assets/springio-icon.svg";
import Image2 from "../../assets/bash.svg";
import Image3 from "../../assets/kafka.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Spring Framework",
    description:
      "With the help of Spring Boot, I can deliver production-ready microservice application in significantly less time ",
  },
  {
    id: 2,
    image: Image2,
    title: "Automation",
    description:
      "I can transform time-consuming tasks into few lines of code. Thus, reducing time, money and effort",
  },
  {
    id: 3,
    image: Image3,
    title: "Distributed Computing",
    description:
      "I design & develop applications in such a way that data storage and processing is distributed across multiple systems",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
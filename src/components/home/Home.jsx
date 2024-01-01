import React from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const home = () => {
  return (
    <div>
      <section className='container'>
        <Shapes />
      </section>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Premkumar Arumugam</h1>
          <span className="home__education">
            Senior Java Developer
          </span>
          <HeaderSocials />
          <a href="#contact" className="btn">Hire Me</a>
          <ScrollDown />
        </div>

      </section>
    </div>
  )
}

export default home
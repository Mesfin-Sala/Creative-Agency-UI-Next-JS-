import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="" caption="" className="logobg" />
          <h1 className="hero-title">
            Build Your Dream Resume, CV & LinkedIn Profile
          </h1>

          <div className="sub-heading">
            <TitleSm title="Resume" /> <span>.</span>
            <TitleSm title="CV " /> <span>.</span>
            <TitleSm title="LinkedIn Profile" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Unlock Your Career Potential: Pro CVs for University Students" />
            <p>
              Get professionally crafted CVs, resumes, and LinkedIn profiles
              designed just for university students. Stand out, impress
              employers, and land your dream internship or first job! Let our
              experts highlight your skills and achievements effectively. Invest
              in your future success with a tailored professional CV package
              today! Start applying with confidence!
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      
      
      

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
     
    </>
  );
}

export default Hero

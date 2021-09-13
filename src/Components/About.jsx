import React from "react";
import web from "../images/hero-img.png";
import Commom from "../assets/Commom";
import Tdata from "../assets/Tdata";
import TCard from "../assets/TCard"

const About = (props) => {
  return (
    <>
      <Commom
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        mode={props.mode}
      />
      <div className="container">
      <p style={{textAlign:"center"}} className={props.mode==="light" ? "text-dark":"  text-white"}>We are one of the leading company in prividing the services in various sectors of the market our team work on various project domains like IoT , Web and App Devlopment, Digital marketing and Business Automation.</p>
      </div>
      <div className="my-5">
        <h1 className={props.mode==="light" ? "text-center text-dark":"text-center text-white"}> Our Team </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {Tdata.map((val, ind) => {
              return <TCard key={ind} imgSrc={val.imgSrc} nameOfPerson={val.nameOfPerson} position={val.position} linkedIn={val.linkedIn} mode={props.mode}/>;
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

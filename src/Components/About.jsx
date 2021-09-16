import React from "react";
import Commom from "../assets/Commom";
import Tdata from "../assets/Tdata";
import TCard from "../assets/TCard"

const About = (props) => {
  return (
    <>
    <div style={{ marginTop: '8rem' }}>
      <Commom
        name="Welcome to About page"
        imgsrc="https://ik.imagekit.io/levister/images/hero-img_8j2uIij5A_F.png?updatedAt=1631085695882"
        visit="/contact"
        btname="Contact Now"
        mode={props.mode}
      />
      </div>
      <div className="container">
        <p style={{ textAlign: "center" }} className={props.mode === "light" ? "text-dark mt-2" : "  text-white mt-2"}>We are one of the leading company in prividing the services in various sectors of the market our team work on various project domains like IoT , Web and App Devlopment, Digital marketing and Business Automation.</p>
      </div>
      <div className="my-5">
        <h1 className={props.mode === "light" ? "text-center text-dark" : "text-center text-white"}> Our Team </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Tdata.map((val, ind) => {
                return <TCard key={ind} imgSrc={val.imgSrc} nameOfPerson={val.nameOfPerson} position={val.position} linkedIn={val.linkedIn} mode={props.mode} imgAlt={val.imgAlt} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

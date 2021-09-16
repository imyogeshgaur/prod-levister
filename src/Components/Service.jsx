import React from "react";
import Sdata from "../assets/Sdata";
import SCard from "../assets/SCard";

const Services = (props) => {
  const mode = props.mode;
  return (
    <>
      <div className="my-5">
        <h1 style={props.mode === 'light' ? { color: "black" } : { color: "white" }} className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <SCard key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} mode={mode} imgAlt={val.imgAlt}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

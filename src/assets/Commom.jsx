import React from "react";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={props.mode === 'light' ? { color: "black" } : { color: "white" }}>
                    {props.name}
                    <strong className="brand-name"> Levister Technologies  </strong>
                  </h1>
                  <h2 className={props.mode === "light" ? "text-dark my-3" : "text-light my-3"}>
                    Your Scalablity Our Concern
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className={props.mode === "light" ? "btn-get-started" : "btn-get-started text-light"}>
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;

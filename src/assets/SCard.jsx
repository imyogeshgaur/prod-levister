import React from "react";
import { NavLink } from "react-router-dom";

const SCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card mx-2" style={{ backgroundImage: props.mode === "light" ? `linear-gradient(#169af1,aqua)` : "linear-gradient(90deg, #000000 0%, #04619f 74%)" }}>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgAlt}/>
          <div className="card-body">
            <h5 className={props.mode === "light" ? "card-title font-weight-bold" : "card-title font-weight-bold text-white"}>{props.title}</h5>
            <p className={props.mode === "light" ? "card-text" : "card-text  text-white"}>
              {props.description}
            </p>
            <NavLink to="" className={`btn btn-${props.mode === "light" ? "primary" : "secondary"}`}>
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SCard;

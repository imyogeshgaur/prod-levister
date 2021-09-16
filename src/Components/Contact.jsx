import React, { useState } from "react";
import database from "../DataBase/Firebase";
import validator from "validator";

const Contact = (props) => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const { fullname, phone, email, msg } = data
    if (!fullname || !phone || !email || !msg) {
      props.showAlert("Please fill All The Data !!!", "warning")
    } else if (!validator.isEmail(email)) {
      props.showAlert("Please Enter A Valid Email !!!", "danger")
    } else if (!validator.isMobilePhone(phone)) {
      props.showAlert("Please Enter a Valid Phone Number !!!", "danger");
    } else {
      try {
        await database.collection("user").add({ userName: fullname, userPhone: phone, userEmail: email, userMessage: msg });
        props.showAlert("Data Stored SucessFully !!!", "success");
        setData({
          fullname: "",
          phone: "",
          email: "",
          msg: ""
        })
      } catch (error) {
        props.showAlert(`${error.message}`, "danger");
      }
    }
  };

  return (
    <>
      <h1 className={props.mode === "light" ? "text-center text-dark" : "text-center text-light"}> Contact Us </h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${props.mode === "light" ? "text-dark" : " text-light"}`}>
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className={`form-label ${props.mode === "light" ? "text-dark" : " text-light"}`}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${props.mode === "light" ? "text-dark" : " text-light"}`}>
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className={`form-label ${props.mode === "light" ? "text-dark" : " text-light"}`}>
                Message
              </label>
              <textarea
                className="form-control"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
              ></textarea>
            </div>
            <div className="col-12">
              <button className={`btn btn-outline-${props.mode === "light" ? "primary" : "secondary"}`} type="submit" onClick={formSubmit}>
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

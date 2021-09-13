import React, { useState } from "react";
import database from "../DataBase/Firebase";

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
    if(!fullname||! phone||! email||! msg ){
      props.showAlert("Please fill All The Data !!!","warning")
    }
    try {
      await database.collection("user").add({ userName: fullname, userPhone: phone, userEmail: email, userMessage: msg });
      props.showAlert("Data Stored SucessFully !!!","success");
      setData({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
      })
    } catch (error) {
      props.showAlert(`${error.message}`,"danger");
    }
  };

  return (
    <>
      <div className="my-4">
        <h1 className={props.mode === "light" ? "text-center text-dark" : "text-center text-light"}> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className={props.mode === "light" ? "" : "form-label text-light"}>
                FullName
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
              <label htmlFor="exampleFormControlInput1" className={props.mode === "light" ? "" : "form-label text-light"}>
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="mobile number"
              />
            </div>
            <div className="mb-3">
              <label className={props.mode === "light" ? "" : "form-label text-light"}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className={props.mode === "light" ? "" : "form-label text-light"}>
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit" onClick={formSubmit}>
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

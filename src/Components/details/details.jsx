import React from "react";
import "./details.css";

const details = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#2a2f4f" }}>Create your Love Timeline</h1>
      <div className="input-container">
        <h2 style={{ color: "#2a2f4f" }}>Add your details</h2>
        <form action="" id="LoanForm">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Partner Name</label>
          <input type="text" placeholder="Enter your parnter name" />
          <label htmlFor="">Couple Name</label>
          <input type="text" placeholder="Eg.. Virat & Anushka => Virushka" />
          <label htmlFor="">
            Your image <div>(recommended aspect ratio of image 1:1)</div>
          </label>
          <input
            className="input-css"
            style={{ display: "None" }}
            type="file"
            name=""
            id="a"
          />
          <label
            style={{ cursor: "pointer" }}
            htmlFor="a"
            className="label-css"
          >
            Choose File
          </label>
          <label htmlFor="">
            Partner image <div>(recommended aspect ratio of image 1:1)</div>
          </label>
          <input
            style={{ display: "None" }}
            type="file"
            name=""
            id="ab"
            className="input-css"
          />
          <label
            style={{ cursor: "pointer", textAlign: "center" }}
            htmlFor="ab"
            className="label-css"
          >
            {" "}
            Choose File
          </label>
          <label htmlFor="">
            Couple Image <div>(optional)</div>
          </label>
          <input
            style={{ display: "None" }}
            type="file"
            name=""
            id="abc"
            className="input-css"
          />
          <label
            style={{ cursor: "pointer" }}
            htmlFor="a"
            className="label-css custom-file-label"
          >
            Choose File
          </label>
        </form>
      </div>
    </div>
  );
};

export default details;

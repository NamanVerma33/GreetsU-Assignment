import React from "react";
import "./milestone.css";
import logo from "../Assests/greetsu-favicon.b43044faff18cc4fe7f572ee5fe84cef.svg";

const milestone = () => {
  return (
    <div>
      <div className="container-mile">
        <h2 style={{ color: "#2a2f4f" }}>Add your journey milestones</h2>
        <form action="">
          <div className="inner-container-mile">
            <div className="event">
              <div>
                <label>Milestone 1</label>
                <input
                  type="text"
                  placeholder="Milestone 1"
                  value=""
                  style={{ width: "100%" }}
                  class="date"
                />
              </div>

              <div>
                <label style={{ position: "relative" }}>
                  Date of Milestone 1
                </label>
                <div class="delete-milestone"></div>
                <input type="date" class="date" />
              </div>
              <div className="delete">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
                </svg>
              </div>
            </div>
            <div className="create-btn">
              <button>Add Milestone</button>
            </div>
          </div>
        </form>
      </div>
      <div className="last">
        <button type="submit" className="btn">
          Create Timeline
        </button>
      </div>
      <div className="logo">
        <div className="img">
          <a href="https://www.greetsu.com/">
            <img src={logo} alt="" className="header-img" />
          </a>
        </div>
        <div className="content">
          <p id="team">from team</p>
          <p id="greet">GreetsU</p>
        </div>
      </div>
    </div>
  );
};

export default milestone;

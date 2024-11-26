import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="felxColCenter inner-container">
          <span className="primaryText">Get Started with HomyZ</span><br/>
          <span className="secondaryText">
            subscribe to get super amazing contents from our daily posts.<br/>
            trending news, apartments and more available all for free
          </span>
<br/>
<br/>
          <button className="button">
            <a href="mailto:immaxstrendy@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

import React from "react";

export const Solutions = (props) => {
  return (
    <div id="solutions" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Solutions</h2>
        </div>
        <div className="row solutions" style={{display: "flex", flexWrap: "wrap"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

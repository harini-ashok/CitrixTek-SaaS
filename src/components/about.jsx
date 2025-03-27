import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img id="aboutimg"  src="img/team/about.gif" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          
        </div>

        <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                Empowering businesses with cutting-edge Citrix solutions that
                drive efficiency, security, and growth.
                <br />
                At CitrixTek, your vision is our mission—powered by Citrix.
              </p>
            </div>
        <div className="row">
          <div className="col-12">
            <h2>Meet the Team</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.Team.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={d.img} alt="..." className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <h4>About {d.name}</h4>
                        <p>{d.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Image } from "./image";

export const CaseStudies = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Case Studies</h2>
          <p>Explore how we help businesses achieve secure and high-performance Citrix environments.</p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  <div className="card-body">
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text"><strong>Problem:</strong> {d.problem}</p>
                    <p className="card-text"><strong>Solution:</strong> {d.solution}</p>
                    <ul className="list-unstyled">
                      {d.benefits.map((benefit, index) => (
                        <li key={index}>✅ {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

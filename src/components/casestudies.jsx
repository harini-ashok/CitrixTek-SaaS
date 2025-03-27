import React, { useState, useEffect } from "react";
import { Image } from "./image";

export const CaseStudies = (props) => {
  const [showDetails, setShowDetails] = useState([]);

  // Ensure state updates when props.data becomes available
  useEffect(() => {
    if (props.data) {
      setShowDetails(props.data.map(() => false));
    }
  }, [props.data]); // Re-run effect when props.data changes

  const toggleDetails = (index) => {
    setShowDetails((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

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
              <div key={`${d.title}-${i}`} className="col-md-6 mb-6">
                <div className="card h-100">
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  <div className="card-body">
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text"><strong>Problem:</strong> {d.problem}</p>
                    {showDetails[i] && (
                      <>
                        <p className="card-text"><strong>Solution:</strong> {d.solution}</p>
                        <ul className="list-unstyled">
                          {d.benefits.map((benefit, index) => (
                            <li key={index}>✅ {benefit}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => toggleDetails(i)}
                      disabled={showDetails.length === 0} // Disable button if state isn't ready
                    >
                      {showDetails[i] ? "Read Less" : "Read More"}
                    </button>
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

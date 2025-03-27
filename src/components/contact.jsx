import React, { useState, useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';



export const Contact = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeComms: false, // Checkbox field
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false); // Track CAPTCHA validity


  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwXRfHxbRFBo8IaGpLWGtJkLv2fIU16YZMWCMP6TRDPcR2TPK0zwtrhQuNJGBvvKgt62Q/exec";

    
    useEffect(() => {
      loadCaptchaEnginge(6); // Initialize a 6-character CAPTCHA
    }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted
      // Validate CAPTCHA
      if (!validateCaptcha(formData.captcha)) {
        setCaptchaValid(false);
        return;
      }
      setCaptchaValid(true);
      

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreeComms: false,
        captcha: ""
      });
      loadCaptchaEnginge(6);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please check your internet connection.");
    }
  };

  return (
    <div>
      {/* Contact Section */}
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us a message. We’ll get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        className="form-control"
                        placeholder="First Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        className="form-control"
                        placeholder="Last Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    className="form-control"
                    placeholder="Company"
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        className="form-control"
                        placeholder="Phone Number"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    className="form-control"
                    placeholder="Subject"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      name="agreeComms"
                      checked={formData.agreeComms}
                      onChange={handleChange}
                      className="checkbox-input"
                    />{" "}
                    I agree to receive further communications from Citrix Tek.
                  </label>
                </div>
                <div className="form-group captcha-container">
                  <LoadCanvasTemplate className="load-canvas"/>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    className="form-control captcha-input"
                    placeholder="Enter CAPTCHA"
                    required
                    onChange={handleChange}
                />
               
              </div>
              {!captchaValid && submitted && (
                <div className="captcha-error">CAPTCHA is invalid. Please try again.</div>
              )}
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "Loading..."}
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
          
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Landing Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};

// export default Contact;

import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span><i className="fa fa-user"></i> {name}</span>
                    <br />
                    <span>
                      <i className="fa fa-phone"></i> {phone}
                    </span>
                    <br />
                    <span><i className="fas fa-envelope"></i> {email}</span>
                    <br />
                    <span><i className="fas fa-map-marker-alt"></i> {street}, {city}, {state} {zip}, United State</span>
                  </p>
                </div>
                {/* <div className="columns download" style={{marginTop: '90px'}}>
                  <p>
                    <a href={resumeDownload} target="_blank" style={{padding: '20px', background: '#3e3e3e', borderRadius: '5px'}}><i className="fas fa-download"></i> Download Resume</a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

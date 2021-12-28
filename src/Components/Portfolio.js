import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects1 = this.props.data.projects1.map(function (projects1) {
      let project1Image = "images/portfolio/" + projects1.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects1.title} src={project1Image} style={{ height:"80px",width:"215px"}}/>
            <div style={{ textAlign: "center" }}><a href={projects1.url} target="_blank">{projects1.title}</a></div>
          </div>
        </div>
      );
    });

    const projects2 = this.props.data.projects2.map(function (projects2) {
      let project2Image = "images/portfolio/" + projects2.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects2.title} src={project2Image} style={{ height:"80px",width:"215px"}}/>
            <div style={{ textAlign: "center" }}><a href={projects2.url} target="_blank">{projects2.title}</a></div>
          </div>
        </div>
      );
    });
    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works for blockchain.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects1}
              </div>
            </div>
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works for web.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects2}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

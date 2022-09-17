import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10%",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">AM I?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{
              paddingTop: "100%",
              paddingBottom: "5%",
            }} className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-nodejs-plain" />
          <Techstack iconName="devicon-vuejs-plain" />
          <Techstack iconName="devicon-postgresql-plain" />
          <Techstack iconName="devicon-nginx-original" />
          <Techstack iconName="devicon-npm-original-wordmark" />
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-firebase-plain" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        <h1 style={{
              paddingTop: "100%",
              paddingBottom: "5%",
            }} className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-github-original" />
          <Techstack iconName="cib-visual-studio-code" />
        </Row>

      </Container>
    </Container>
  );
}

export default About;

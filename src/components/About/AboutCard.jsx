import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Lisandro Jimenez </span>
            from <span className="purple"> Salinas, California.</span>
            <br />
            I am currently employed as a <span className="purple">Senior Web Developer Intern</span> at <span className="purple">DigitalNest.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Off-roading through rough trails, riding bulls, and embracing the outdoors.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."{" "}
          </p>
          <footer className="blockquote-footer">Patrick McKenzie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
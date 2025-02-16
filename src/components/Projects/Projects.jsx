import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ftg from "../../Assets/Projects/ftg.png";
import digitalnest from "../../Assets/Projects/digitalNest.png";
import occord from "../../Assets/Projects/occord.png";
import ccc from "../../Assets/Projects/CentralCoastComedy.png";
import nestFlow from "../../Assets/Projects/nestFlow.png";
import ucsc from "../../Assets/Projects/ucsc.png";
import randomizer from "../../Assets/Projects/randomizer.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccc}
              isBlog={false}
              title="Central Coast Comedy"
              description="A dynamic and easy-to-manage website for Central Coast Comedy, built with custom PHP and WordPress. The site allows the client to effortlessly add and update events, comedian profiles, and announcements, with automatic formatting to maintain a professional look. Designed for seamless user experience, it features an intuitive layout, responsive design, and event booking integration, making it a go-to platform for comedy enthusiasts."
              demoLink="https://www.centralcoastcomedy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nestFlow}
              isBlog={false}
              title="BizzNestFlow"
              description="BizzNestFlow is an intuitive and efficient internal tool designed to streamline workflows and enhance collaboration. Built with React.js, Node.js, and MySQL, it provides a seamless user experience for managing data, automating tasks, and integrating with existing systems. The platform ensures secure access controls, real-time data processing making it a scalable solution for teams looking to optimize their operations."
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={occord}
              isBlog={false}
              title="OCCORD"
              description="Dynamic and user-friendly website built with custom PHP and WordPress to enhance content accessibility. Features an automated system transforming news articles into visually appealing card-style layouts, ensuring a structured and engaging experience. Each news card dynamically links to full articles, providing seamless navigation for users. OCCORD.org delivers an intuitive platform for sharing updates and community news."
              demoLink="https://occord.org/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalnest}
              isBlog={false}
              title="DigitalNest"
              description="The 'Become an Intern' page is a visually engaging and interactive experience built with custom HTML, CSS, JavaScript, and WordPress. Custom animations, dynamic content loading, and a fully responsive layout ensure an intuitive and accessible experience across all devices. By leveraging WordPress for easy content management, the page allows administrators to update information effortlessly while maintaining a polished and professional look."
              demoLink="https://digitalnest.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftg}
              isBlog={false}
              title="Forest Theater Guild"
              description="A visually captivating and easy-to-navigate website built with CSS, JavaScript, and WordPress. Designed to showcase upcoming productions, events, and community programs, the site provides a seamless browsing experience with dynamic content loading and interactive elements. Leveraging WordPress for content management, the platform allows administrators to update event details effortlessly."
              demoLink="https://foresttheaterguild.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ucsc}
              isBlog={false}
              title="UCSC MESA"
              description="We are working on refining and optimizing the upcoming USCS MESA website by implementing modifications to improve functionality, accessibility, and user experience. Updates include UI enhancements, performance optimizations, and ensuring compliance with modern web standards. We are documenting all modifications in detail, providing a structured reference for future updates and maintenance, ensuring long-term scalability and ease of management."
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomizer}
              isBlog={false}
              title="DigitalNest Scheduler"
              description="The Gilroy Bizznest Scheduler is a simple yet efficient scheduling tool designed to streamline appointment management. Built using HTML, CSS, and JavaScript, the scheduler provides an intuitive user interface with time-slot selection, responsive design, and dynamic updates. Its lightweight structure ensures fast performance, making it an ideal solution for businesses or individuals looking for an easy-to-use scheduling system."
              demoLink="https://bizznest.github.io/Gilroy-Bizznest_Scheduler/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
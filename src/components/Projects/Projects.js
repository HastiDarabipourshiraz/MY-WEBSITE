import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DataBites from "../../Assets/P3.jpg";
import unplugged from "../../Assets/p4.jpg";
import BiasViz from "../../Assets/p2.jpg";
import DoodleLab from "../../Assets/p1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: '#8C7960' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={DataBites}
              isBlog={false}
              title="DataBites"
              description="A museum exhibit designed to teach young learners about supervised machine learning. The exhibit features a hybrid physical-digital installation where children create a dataset of sandwiches and pizzas to train a machine learning model."
              demoLink="/project1"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={DoodleLab}
              isBlog={false}
              title="AI DoodleLab"
              description="A co-creative learning tool that helps young users collaborate with an AI agent to refine and customize drawings and use them in contexts like storytelling or animation, while learning about foundational AI concepts and ethics in creative work."
              demoLink="i"
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={unplugged}
              isBlog={false}
              title="AI Unplugged"
              description="A set of unplugged (computer-free) activities aimed at teaching young learners foundational AI concepts—such as identifying AI, supervised machine learning, and knowledge representation—through hands-on, interactive experiences."
              demoLink="i"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={BiasViz}
              isBlog={false}
              title="BiasViz"
              description="A learning tool designed to provide interactive visualizations of LLM behavior for children, promoting AI literacy and fairness. The tool guides students through analyzing bias and documenting patterns in LLM-generated text."
              demoLink="i"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

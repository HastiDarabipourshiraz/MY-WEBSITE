import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: '#8C7960' }}>
          Here are a few papers I've worked on recently.
        </p>
      </Container>
      <Row className="publication-section">
        <ul>
          <li className="publication-title">Introducing AI Without Computers: Hands-On Literacy and Ethical Sense-Making for Young Learners.</li>
        <p className="publication-conference">In Proceedings of the 2025 ACM Conference on Human Factors in Computing Systems (CHI '2025).</p>
        <p className="publiaction-detail"> <span className="bold">Hasti Darabipourshiraz</span>, Maalvika Bhat, and Duri Long. 2025. Introducing AI Without Computers: Hands-On Literacy
and Ethical Sense-Making for Young Learners. In Extended Abstracts of the CHI Conference on Human Factors in
Computing Systems (Yokohama, Japan) (CHI EA ’25). Association for Computing Machinery, New York, NY, USA.
          <a href="https://doi.org/10.1145/3706599.3719876"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> DOI:10.1145/3706599.3719876 </a> </p>
                      <li className="publication-title">DataBites: An embodied and co-creative museum exhibit to foster children's understanding of supervised machine learning.</li>
        <p className="publication-conference">In Proceedings of the 2024 ACM Conference on Creativity and Cognition (C&C '24)</p>
        <p className="publiaction-detail"><span className="bold">Hasti Darabipourshiraz</span>, Dev Ambani, and Duri Long. 2024. DataBites: An embodied and co-creative museum
          exhibit to foster children's understanding of supervised machine learning. In Proceedings of the 16th Conference on Creativity & Cognition
          (C&C '24). Association for Computing Machinery, New York, NY, USA, 550–555.
          <a href="https://doi.org/10.1145/3635636.3664247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> DOI:10.1145/3635636.3664247 </a> </p>
                                <li className="publication-title">BiasViz: A Project-Based, Narrative-Centered Learning Tool for Engaging Middle School
                                Students in Critical Thinking about AI Biases</li>
        <p className="publication-conference">Under review for the 26th International Conference on Artificial Intelligence Education. (AIED '25)</p>
        <p className="publiaction-detail"><span className="bold">Hasti Darabipourshiraz</span>, Shiyan Jiang, Dongkuan Xu, and Duri Long. 2025. BiasViz: A Project-Based, Narrative-Centered Learning Tool for Engaging Middle School
        Students in Critical Thinking about AI Biases.
          <a href="https://doi.org/10.1145/3635636.3664247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> </a> </p>
          <li className="publication-title">AI Unplugged: Tangible Simulations of AI Reasoning Processes for Middle School Learners</li>
        <p className="publication-conference">Under review for the ACM Transactions on Computing Education (TOCE) Journal, Special Issue on Embodiment
          in Computing Education.</p>
        <p className="publiaction-detail"><span className="bold">Hasti Darabipourshiraz</span>, Lily NG, Grace Wang, Sophie Rollins, and Duri Long. 2025. AI Unplugged: Tangible Simulations of AI Reasoning Processes for Middle School Learners.
          <a href="https://doi.org/10.1145/3635636.3664247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> </a> </p>
          <li className="publication-title">AI DoodleLab: Fostering Middle School Students’ AI Literacy through Project-Based Creative Drawing</li>
        <p className="publication-conference">Under review for the 2025 ACM Conference on Creativity and Cognition (C&C '25)</p>
        <p className="publiaction-detail"><span className="bold">Hasti Darabipourshiraz</span>. 2025. AI DoodleLab: Fostering Middle School Students’ AI Literacy through Project-Based Creative Drawing.
          <a href="https://doi.org/10.1145/3635636.3664247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> </a> </p>
                  <li className="publication-title">Designing and Evaluating Museum Exhibit Prototypes to Foster Middle Schoolers’ AI Literacy through Creativity & Embodiment</li>
        <p className="publication-conference">In preparation for submission to the 2026 ACM Conference on Tangible and Embedded Interaction (TEI '26)</p>
        <p className="publiaction-detail"><span className="bold">Hasti Darabipourshiraz</span>, Sophie Rollins, Milka Trajkova, Chengzhi Zhang, Yasmine Belghith, Tom McKlin, Jessica Roberts, Brian Magerko, Duri Long. 2026. Designing and Evaluating Museum Exhibit Prototypes to Foster Middle Schoolers’ AI Literacy through Creativity & Embodiment.
          <a href="https://doi.org/10.1145/3635636.3664247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-icon-colour doi-icons"> </a> </p>                                       
        </ul>
      </Row>
    </Container>
  );
}

export default About;

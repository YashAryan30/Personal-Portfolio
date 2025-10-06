import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/drowsy.png";
import projImg2 from "../assets/img/deepfake.png";
import projImg3 from "../assets/img/food island.jpg";
import projImg4 from "../assets/img/portfolio.png";
import projImg5 from "../assets/img/chatbot.png";
import imagify from "../assets/img/imagify.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // ML & Computer Vision Projects
  const mlProjects = [
    {
      title: "Drowsiness Detection & Dynamic Alarm System",
      description: "Computer Vision, Deep Learning, OpenCV",
      imgUrl: projImg1,
      link: "https://github.com/YashAryan30/Real-Time-Drowsiness-Detection-Alarm-System"
    },
    {
      title: "Deepfake Detection",
      description: "Deep Learning, CNN, OpenCV",
      imgUrl: projImg2,
      link: "https://github.com/YashAryan30/Deepfake-detection-model"
    },
  ];

  // Web Development Projects
  const webProjects = [
    {
      title: "Imagify- Text to Image Generator",
      description: "React, TailwindCSS, MongoDB, Express JS, Node JS, Postman, Razorpay API, ClipDrop API",
      imgUrl: imagify,
      link: "https://github.com/YashAryan30/Imagify"
    },
    {
      title: "Personal Portfolio Website",
      description: "React, Bootstrap, Node JS",
      imgUrl: projImg4,
      link:"https://github.com/YashAryan30/Personal-Portfolio/tree/main"
    },
    {
      title: "Food Recipe Island",
      description: "React, Bootstrap, MongoDB, Express JS, Node JS, Postman",
      imgUrl: projImg3,
      link: "https://github.com/YashAryan30/mern-project/tree/main"
    },
  ];

  // AWS Projects
  const awsProjects = [
    {
      title: "AWS Chatbot for Food Ordering",
      description: "Amazon Lex, Polly, Transcribe, Lambda, S3",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Rome wasn't built in a day and neither were these projects. Here are some of them across ML, Web Development, and AWS Cloud.</p>
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">ML & Computer Vision</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">AWS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      
                      {/* ML & Computer Vision */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {mlProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Web Development */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* AWS */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {awsProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}

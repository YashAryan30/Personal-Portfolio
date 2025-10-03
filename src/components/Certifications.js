import { Container, Row, Col } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../assets/img/aws cert.png";
import certImg2 from "../assets/img/mern cert.png";
import certImg3 from "../assets/img/python.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      imgUrl: certImg1,
      link: "https://drive.google.com/file/d/1LAaoo869UGdku1MTdEr7PBGBm70ddC7Y/view?usp=sharing"
    },
    {
      title: "MERN Full Stack Development",
      imgUrl: certImg2,
      link: "https://drive.google.com/file/d/18BrnyULHoTDj8LoSX603zo_vhMUEsiTe/view?usp=sharing"
    },
    {
      title: "Python",
      imgUrl: certImg3,
      link: "https://drive.google.com/file/d/1sesQ5KUXxK1WorGqmGrqZodza6b1dyaY/view?usp=sharing"
    },
  ];

  return (
    <section className="certifications" id="certifications" style={{ backgroundColor: "#000", padding: "50px 0" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ color: "#fff", marginBottom: "30px", fontSize: "2.5rem", textAlign: "center", fontWeight: '700' }}>Certifications</h2>
                  <Row>
                    {certifications.map((cert, index) => (
                      <CertificationCard key={index} {...cert} />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  );
};

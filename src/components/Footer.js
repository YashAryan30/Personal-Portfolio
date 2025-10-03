import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/g2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '30px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff'}}>
              {'< Yash Aryan />'}
            </span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yash-aryan30/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/YashAryan30?tab=repositories"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="https://www.instagram.com/aryan.yash_/"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

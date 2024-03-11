import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer text-dark py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Me</h5>
            <p>Email: Terrencemccarthycode@gmail.com</p>
            <p>Phone: (682) 429-3347</p>
          </Col>
          <Col md={4}>
            <h5>Follow Me</h5>
            <p>
              <a href="https://www.linkedin.com/in/terrence-mccarthy-8ab83b2b2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-dark me-2" />
              </a>
              <a href="https://github.com/Tmysterz" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-dark me-2" />
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>From</h5>
            <p>Benbrook, Texas, USA</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


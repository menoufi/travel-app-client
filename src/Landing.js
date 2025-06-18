import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.css';
import logo from './assets/MYtineraryLogo.png';
import arrow from './assets/circled-right-2.png';
import homeIcon from './assets/homeIcon.png';

function Landing() {
  return (
    <Container className="text-center mt-5 landing-container">
      <Row className="mb-4">
        <Col>
          <img src={logo} alt="MYtinerary Logo" className="main-logo" />
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="tagline">
            Find your perfect trip, designed by insiders who know and love their cities.
          </p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Link to="/cities">
            <img src={arrow} alt="Start Browsing" className="start-button" />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="auth-links">
            <Link to="/login">Log in</Link>
            <span> | </span>
            <Link to="/create-account">Create Account</Link>
          </div>
        </Col>
      </Row>

      
      <Row>
        <Col>
          <div className="footer-icon mt-4">
            <Link to="/">
              <img src={homeIcon} alt="Home" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;




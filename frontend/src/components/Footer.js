import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-white text-white py-3">
        <Row>
          <Col md={6}>
            <Nav className="justify-content-center justify-content-md-start mb-3 mb-md-0">
              <Nav.Item>
                <Nav.Link as={Link} to="/pages/about" className="text-dark">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-dark" as={Link}
              to="/pages/features">Features</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/pages/nutrition-checker" className="text-dark">Nutrition Checker</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/pages/bmr-calculator" className="text-dark">BMR</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={6} className="text-center text-dark text-md-end">
          <p style={{
                'color': '#595959',
                'fontFamily': 'sans-serif',
            }}>
                Made with &#128149; by {' '}
                <a
                    style={{ 'textDecoration': 'none', 'color': '#595959', 'fontWeight': 'bolder' }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sanz17">
                    Team Fitness tracker
                </a>
                , with {' '}
                <a
                    style={{ 'textDecoration': 'none', 'color': '#595959', 'fontWeight': 'bolder' }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://reactjs.org">
                    ReactJS 2023
                </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

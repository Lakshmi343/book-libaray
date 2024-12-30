import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light " style={{marginTop:"180px"}}>
      <Container>
        <Row>
          {/* Social Media Section */}
          <Col xs={12} className="text-center mb-4">
            <h5>library management system:</h5>
            <div>
              <a href="#" className="text-light me-3" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3" aria-label="Google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-light me-3" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-light" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          {/* Company Info */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold">Libaray mangment</h6>
            <p>
            Enhance your library experience with our footer! Stay connected through our social media channels, explore useful links, and access quick information about our services. Whether it's managing your account, discovering resources, or getting in touch, our footer keeps everything at your fingertips.
            </p>
          </Col>
          {/* Products */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                React
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                Node
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Boostrap
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Mongodb
                </a>
              </li>
            </ul>
          </Col>
          {/* Useful Links */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold">Useful Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Shipping Rates
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Help
                </a>
              </li>
            </ul>
          </Col>
          {/* Contact */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p>
              <i className="fas fa-home me-2"></i> kochi@..
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-2"></i> + 01 234 567 89
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-primary text-center py-3">
        <p className="mb-0">© 2024 Copyright: MDBootstrap.com</p>
      </div>
    </footer>
  );
};

export default Footer;

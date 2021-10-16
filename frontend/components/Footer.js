import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faChrome
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <Container className="padding3">
        <Row>
          <Col md={3} sm={12} className="footer-col">
            <div>
              <Row>
                <Col>
                  <h6 className="pg-heading">The Index</h6>
                </Col>
              </Row>
              <Row className="margin-bottom2">
                <Col>
                  <p className="copyright">© The Index 2021</p>
                </Col>
              </Row>
              <Row>
                  <div>
                    <a
                        href="https://www.facebook.com/UMassSGA/"
                        target="_blank"
                        className="white-link"
                        rel="noreferrer"
                    >
                    <FontAwesomeIcon icon={faFacebook} className="icon" /> 
                    </a>
                    <a
                        href="https://twitter.com/umasssga"
                        target="_blank"
                        className="white-link"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                    <a
                        href="https://adamlechowicz.github.io/redir"
                        target="_blank"
                        className="white-link"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </a>
                    <a
                        href="https://www.umass.edu/sga/"
                        target="_blank"
                        className="white-link"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faChrome} className="icon" />
                    </a>
                  </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
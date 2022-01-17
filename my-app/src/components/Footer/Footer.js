import React from 'react';
import '../../styles/components/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">About</h4>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                How Triphouse works
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Careers
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Privacy
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Terms
              </a>
            </p>
          </div>
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">Property types</h4>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Guest houses
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Hotels
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Apartments
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Villas
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Holiday homes
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Hostels
              </a>
            </p>
          </div>
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">Support</h4>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                Contact Customer Service
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" className="footer-link">
                FAQ
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2022 Triphouse, Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

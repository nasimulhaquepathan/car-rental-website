import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Pollicy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container className="">
        <Row>
          <Col lg="3" md="3" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-3">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              numquam harum eius incidunt autem perferendis iure aut obcaecati
              debitis nihil.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6" xs="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-2 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" xs="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className="office_info">123, Netrokona, Mymensingh</p>
              <p className="office_info">Phone: +-99992332</p>
              <p className="office_info">Email: nasim12@gmail.com</p>
              <p className="office_info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer_link-title ">Newsletter</h5>
              <p className="section_description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year},Develop by
                <a
                  href="https://nasimahmed.netlify.app/"
                  target="_blank"
                  className="link"
                >
                  Nasim Ahmed
                </a>
                All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import Stats from "./stat";
import Skillsweb from "./skillweb";
import QuestionsChart from "./Questweek";
import Dashboard from "./Dashboard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const Maindashboard = () => {
  return (
    <>
      <Dashboard />
      <Container fluid>
        <Row className="mt-4 g-4">

          <Col lg={7} md={12}>
            <Row className="g-4">
              <Col xs={12}>
                <QuestionsChart />
              </Col>
              <Col xs={12}>
                <Stats />
              </Col>
            </Row>
          </Col>
          
          <Col lg={4} md={12}>
            <Skillsweb />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Maindashboard;

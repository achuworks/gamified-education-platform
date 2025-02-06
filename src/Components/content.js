import React from "react";
import Stats from "./stat";
import Skillsweb from "./skillweb";
import QuestionsChart from "./Questweek";
import Dashboard from "./Dashboard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const user = JSON.parse(sessionStorage.getItem('user'));   
const Maindashboard = () => {
  return (
    <>
      <Dashboard />
      {user ? (

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
    ):(
        <h2>Login to see your progress</h2>
    )}
    </>
  );
};

export default Maindashboard;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Trophy, BookOpen, LayoutDashboard, Award, Zap } from 'lucide-react';
import logo from '../logo.png';
import profile from '../ll.png';
import './Dashstyle.css';


function Dashboard() {
    

    return (
        <>
        <Navbar expand="lg" className="bg-dark px-3">
            <Container>
                <Navbar.Brand style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="CyberQuestLogo" width="130" height="90" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link href='/' className="text-light d-flex align-items-center">
                            <LayoutDashboard size={40} className="me-2 text-secondary" />
                            Dashboard
                        </Nav.Link>
                        <Nav.Link href='/learn' className="text-light d-flex align-items-center">
                            <BookOpen size={40} className="me-2 text-danger" />
                            Learn
                        </Nav.Link>
                        <Nav.Link className="text-light d-flex align-items-center">
                            <Trophy size={40} className="me-2 text-warning" />
                            Compete
                        </Nav.Link>
                        <Nav.Link className="text-light d-flex align-items-center">
                            <Award size={40} className="me-2 text-success" />
                            Badges earned
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-outline-warning fw-bold px-3" onClick={() => window.location.href = "/login"}>
    Login/Register
</button>

                        <div className="d-flex align-items-center">
                            <Zap size={25} className="text-warning" />
                            <span className="text-white ms-2 fw-bold" style={{ fontSize: '1.2rem' }}>5</span>
                        </div>
                        <div className="rounded-circle overflow-hidden" style={{ width: '50px', height: '50px', border: '2px solid white' }}>
                            <img src={profile} alt="Profile Icon" className="w-100 h-100 object-cover" />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
        
    );
}

export default Dashboard;
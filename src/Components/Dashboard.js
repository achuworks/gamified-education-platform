import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Trophy, BookOpen, LayoutDashboard, Award, Zap } from 'lucide-react';
import logo from '../logo.png';
import './Dashstyle.css';
import profile from '../ll.png';
import Login from './Login';
import Learn from './Learn'; 
import Questweek from './Questweek'; 
import Stats from './stats';

function Dashboard() {
    const [showlogin, setshowlogin] = useState(false);

    return (
        <Router>
            <div className="min-vh-100 bg-light text-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-darker-blue px-3">
                    <div className="container-fluid d-flex align-items-center">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img 
                                src={logo}
                                alt="CyberQuestLogo"
                                className="me-2"
                                width="130"
                                height="90"
                            />
                        </Link>
                        <div className="d-flex align-items-center gap-4">
                            <Link className="nav-link text-light d-flex flex-column align-items-center" to="/">
                                <LayoutDashboard size={40} className="text-secondary" />
                                <span>Dashboard</span>
                            </Link>
                            <Link className="nav-link text-light d-flex flex-column align-items-center" to="/learn">
                                <BookOpen size={40} className="text-danger" />
                                <span>Learn</span>
                            </Link>
                            <Link className="nav-link text-light d-flex flex-column align-items-center" to="#">
                                <Trophy size={40} className="text-warning" />
                                <span>Compete</span>
                            </Link>
                            <Link className="nav-link text-light d-flex flex-column align-items-center" to="#">
                                <Award size={40} className="text-success" />
                                <span>Badges earned</span>
                            </Link>
                        </div>
                        <div className="ms-auto d-flex align-items-center gap-3">
                            <button type="button" className="btn btn-outline-warning" onClick={() => setshowlogin(!showlogin)}>
                                <strong>Login/Register</strong>
                            </button>
                            <div className="d-flex align-items-center">
                                <Zap size={30} className="text-warning" />
                                <span className="text-light ms-2 fw-bold" style={{ fontSize: '1.5rem' }}>5</span>
                            </div>
                            <div className="rounded-circle overflow-hidden" style={{ width: '60px', height: '60px', border: '3px solid #ddd' }}>
                                <img 
                                    src={profile}
                                    alt="Profile Icon"
                                    className="w-100 h-100 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container py-5">
                    {showlogin ? (
                        <Login />
                    ) : (
                        <p>Not logged in</p>
                    )}
                    <Questweek />
                    <Stats />
                </div>
                <Routes>
                    <Route path="/learn" element={<Learn />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Dashboard;
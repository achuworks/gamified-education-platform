import React from 'react';
import { Trophy, MoreHorizontal, Search, BookOpen, LayoutDashboard, Award ,Zap} from 'lucide-react';
import logo from '../logo.png';
import './Dashstyle.css';
import profile from '../ll.png'

function Dashboard() {
    return (
        <div className="min-vh-100 bg-light text-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-darker-blue px-3">
                <div className="container-fluid d-flex align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img 
                            src={logo}
                            alt="CyberQuestLogo"
                            className="me-2"
                            width="130"
                            height="90"
                        />
                    </a>
                    <div className="d-flex align-items-center gap-4">
                        <a className="nav-link text-light d-flex flex-column align-items-center" href="#">
                            <LayoutDashboard size={40} className="text-secondary" />
                            <span>Dashboard</span>
                        </a>
                        <a className="nav-link text-light d-flex flex-column align-items-center" href="#">
                            <BookOpen size={40} className="text-danger" />
                            <span>Learn</span>
                        </a>
                        <a className="nav-link text-light d-flex flex-column align-items-center" href="#">
                            <Trophy size={40} className="text-warning" />
                            <span>Compete</span>
                        </a>
                        <a className="nav-link text-light d-flex flex-column align-items-center" href="#">
                            <Award size={40} className="text-success" />
                            <span>Badges earned</span>
                        </a>
                    </div>

                    <div className="ms-auto d-flex align-items-center gap-3">
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
                <div className="d-flex justify-content-between">
                    <div>
                        <h1 className="display-4 mb-2 text-dark">Hey Archana S!</h1> 
                        <p className="text-secondary">Let's jump in!</p>
                    </div>
                    <div className="bg-light p-4 rounded">
                        <div className="display-4 mb-1 text-dark">100 Questions</div>
                        <div className="text-secondary">Answered this week.</div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

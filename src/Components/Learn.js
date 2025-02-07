import React, { useState } from 'react';
import phishingImage from '../images/phishing.jpg';
import ransomImage from '../images/rasnom.jpg';
import Intro from '../images/introtocybersecurity.jpg';
import Dashboard from './Dashboard';
import './Learn.css';
import intro from '../Videos/intro.mp4';

const modules = [
  {
    id: 1,
    title: 'An Introductory to all attacks',
    description: 'Get to know abt these and protect yourself',
    image: ransomImage,
    route: '/module/introtoallattacks',
    levels: [
      { id: 1, title: 'Level 1: Introduction to Cybersecurity', description: 'Brief overview of cybersecurity and the importance of staying protected online.', video: intro },
      { id: 2, title: 'Level 2: Types of Attacks', description: 'Explore and defend against various cyber-attacks through interactive missions and challenges.' },
      { id: 3, title: 'Level 3: Defense Mechanisms', description: 'Learn and apply effective strategies to protect against cyber threats through hands-on defense challenges.' },
    ],
  },
  {
    id: 2,
    title: 'Be aware of Phishing attacks',
    description: 'No more attacks',
    image: phishingImage,
    route: '/module/phishing',
    levels: [
      { id: 1, title: 'Level 1: Introduction to Phishing', description: 'Understand what phishing is.' },
      { id: 2, title: 'Level 2: Identifying Phishing Emails', description: 'Learn to spot phishing emails.' },
      { id: 3, title: 'Level 3: Protecting Yourself', description: 'Learn how to protect yourself from phishing.' },
    ],
  },
];

function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);

  function handleModuleStart(module) {
    setActiveModule(module);
    setActiveLevel(null); 
    console.log(`Navigating to module: ${module.route}`);
  }

  function handleLevelStart(level) {
    setActiveLevel(level);
    console.log(`Navigating to level: ${level.title}`);
  }

  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      <Dashboard />
      {user ? (
        <div className="container mt-5">
          <h1 className="text-center mb-4"></h1>
          {activeLevel ? (
            <div className="video-container">
              <h5 className="text-center">{activeLevel.title}</h5>
              <p className="text-center">{activeLevel.description}</p>
              <video controls className="w-100">
                <source src={activeLevel.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="btn btn-warning mt-3"
                onClick={() => setActiveLevel(null)}
              >
                Back to Levels
              </button>
              <button
  className="d-flex justify-content-end mt-3 btn btn-info"
  onClick={() => window.location.href = 'https://forms.fillout.com/t/fBn78KyDpzus'}
>
  Take Quiz---
</button>
            </div>
          ) : activeModule ? (
            <div className="d-flex flex-column align-items-center">
              {activeModule.levels.map((level) => (
                <div key={level.id} className="col card-container">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{level.title}</h5>
                      <p className="card-text">{level.description}</p>
                      <button
                        className="btn btn-info mt-auto"
                        onClick={() => handleLevelStart(level)}
                      >
                        Start Level
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="btn btn-warning mt-3"
                onClick={() => setActiveModule(null)}
              >
                Back to Modules
              </button>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {modules.map((module) => (
                <div key={module.id} className="col">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={module.image}
                      className="card-img-top"
                      alt={module.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{module.title}</h5>
                      <p className="card-text">{module.description}</p>
                      <button
                        className="btn btn-info mt-auto"
                        onClick={() => handleModuleStart(module)}
                      >
                        Start Module
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <h2>Login first to go to learning page</h2>
        </>
      )}
    </>
  );
}

export default Learn;

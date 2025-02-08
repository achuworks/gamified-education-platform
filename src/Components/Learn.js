import React, { useState } from 'react';
import phishingImage from '../images/phishing.jpg';
import ransomImage from '../images/rasnom.jpg';
import Dashboard from './Dashboard';
import './Learn.css';
import intro from '../Videos/intro.mp4';
import phishing1 from '../Videos/phishing1.mp4';
import types from '../Videos/typesofattacks.mp4';
import spot from '../Videos/spotphish.mp4';
import phish3 from '../Videos/phishing3.mp4';
import defense from '../Videos/defense.mp4';
import QuizPoints from './QuizPoints';
import deftamil from '../Videos/defensetamil.mp4';
import hidone from '../Videos/1hindi.mp4';
import introtamil from '../Videos/introtamil.mp4';
// import phishi3 from '../Videos/phish3.mp4';
import phish1tamil from '../Videos/phish1tamil.mp4';
import phish2tam from '../Videos/phish2tam.mp4';
import phish3tam from '../Videos/phis3tam.mp4';
import in2tam from '../Videos/in2tam.mp4';
import defhin from '../Videos/defhin.mp4';


const modules = [
  {
    id: 1,
    title: 'An Introductory to all attacks',
    description: 'Get to know about these and protect yourself',
    image: ransomImage,
    route: '/module/introtoallattacks',
    levels: {
      tamil: [
        { id: 1, title: 'Tamil Level 1: Introduction to Cybersecurity', description: 'Overview in Tamil.', quizUrl: 'https://forms.fillout.com/t/fBn78KyDpzus', video:introtamil  },
        { id: 2, title: 'Tamil Level 2: Types of Attacks', description: 'Defense strategies in Tamil.', quizUrl: 'https://forms.fillout.com/t/tVmzFQUncWus', video: in2tam },
        { id: 3, title: 'Tamil Level 3: Defense Mechanisms', description: 'Defense in Tamil.', quizUrl: 'https://forms.fillout.com/t/f7C7ZMnUxaus', video: deftamil },
      ],
      english: [
        { id: 1, title: 'English Level 1: Introduction to Cybersecurity', description: 'Overview in English.', quizUrl: 'https://forms.fillout.com/t/fBn78KyDpzus', video: intro },
        { id: 2, title: 'English Level 2: Types of Attacks', description: 'Types of attacks in English.', quizUrl: 'https://forms.fillout.com/t/tVmzFQUncWus', video: types },
        { id: 3, title: 'English Level 3: Defense Mechanisms', description: 'Defense in English.', quizUrl: 'https://forms.fillout.com/t/f7C7ZMnUxaus', video: defense },
      ],
      hindi: [
        { id: 1, title: 'Hindi Level 1: Introduction to Cybersecurity', description: 'Overview in Hindi.', quizUrl: 'https://forms.fillout.com/t/fBn78KyDpzus', video: hidone },
        { id: 2, title: 'Hindi Level 2: Types of Attacks', description: 'Types of attacks in Hindi.', quizUrl: 'https://forms.fillout.com/t/tVmzFQUncWus', video: types },
        { id: 3, title: 'Hindi Level 3: Defense Mechanisms', description: 'Defense in Hindi.', quizUrl: 'https://forms.fillout.com/t/f7C7ZMnUxaus', video: defhin },
      ],
    },
  },
  {
    id: 2,
    title: 'Be aware of Phishing attacks',
    description: 'No more attacks',
    image: phishingImage,
    route: '/module/phishing',
    levels: {
      tamil: [
        { id: 1, title: 'Tamil Level 1: Introduction to Phishing', description: 'Understand phishing in Tamil.', quizUrl: 'https://forms.fillout.com/t/987kHSkGZpus', video: phish1tamil },
        { id: 2, title: 'Tamil Level 2: Identifying Phishing Emails', description: 'Spot phishing emails in Tamil.', quizUrl: 'https://forms.fillout.com/t/dipJuBJCsmus', video: phish2tam },
        { id: 3, title: 'Tamil Level 3: Protecting Yourself', description: 'Defense in Tamil.', quizUrl: 'https://forms.fillout.com/t/192VZ3pggAus', video: phish3tam },
      ],
      english: [
        { id: 1, title: 'English Level 1: Introduction to Phishing', description: 'Understand phishing in English.', quizUrl: 'https://forms.fillout.com/t/987kHSkGZpus', video: phishing1 },
        { id: 2, title: 'English Level 2: Identifying Phishing Emails', description: 'Spot phishing emails in English.', quizUrl: 'https://forms.fillout.com/t/dipJuBJCsmus', video: spot },
        { id: 3, title: 'English Level 3: Protecting Yourself', description: 'Defense in English.', quizUrl: 'https://forms.fillout.com/t/192VZ3pggAus', video: phish3 },
      ],
      hindi: [
        { id: 1, title: 'Hindi Level 1: Introduction to Phishing', description: 'Understand phishing in Hindi.', quizUrl: 'https://forms.fillout.com/t/987kHSkGZpus', video: phishing1 },
        { id: 2, title: 'Hindi Level 2: Identifying Phishing Emails', description: 'Spot phishing emails in Hindi.', quizUrl: 'https://forms.fillout.com/t/dipJuBJCsmus', video: spot },
        { id: 3, title: 'Hindi Level 3: Protecting Yourself', description: 'Defense in Hindi.', quizUrl: 'https://forms.fillout.com/t/192VZ3pggAus', video: phish3 },
      ],
    },
  },
];

function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [language, setLanguage] = useState('english');

  function handleModuleStart(module) {
    setActiveModule(module);
    setActiveLevel(null);
    setLanguage('english'); // Default language selection
  }

  function handleLevelStart(level) {
    setActiveLevel(level);
  }

  function handleQuizCompletion() {
    setShowPointsModal(true);
  }

  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      <Dashboard />
      {user ? (
        <div className="container mt-5">
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
                onClick={() => {
                  window.open(activeLevel.quizUrl, '_blank');
                  setTimeout(handleQuizCompletion, 2000);
                }}
              >
                Take Quiz---
              </button>
            </div>
          ) : activeModule ? (
            <div className="d-flex flex-column align-items-center">
              <select
                className="form-select mb-3"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="tamil">Tamil</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              {activeModule.levels[language].map((level) => (
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
          <QuizPoints
            show={showPointsModal} 
            onHide={() => setShowPointsModal(false)} 
          />
        </div>
      ) : (
        <h2>Login first to go to learning page</h2>
      )}
    </>
  );
}

export default Learn;
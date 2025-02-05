import React from 'react';
import phishingImage from '../images/phishing.jpg';
import ransomImage from '../images/rasnom.jpg';



const modules = [
  
  {
    id: 1,
    title: 'An Introductory to all attacks',
    description: 'Get to know abt these and protect yourself',
    image: ransomImage,
    route: '/module/react-fundamentals'
  },
  {
    id: 2,
    title: 'Be aware of Phishing attacks',
    description: 'No more attacks',
    image: phishingImage,
    route: '/module/javascript-basics'
  },
];

function Learn() {
    function handleModuleStart(route) {
      console.log(`Navigating to module: ${route}`);
    }
    
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4"></h1>
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
                    className="btn btn-primary mt-auto" 
                    onClick={() => handleModuleStart(module.route)}
                  >
                    Start Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default Learn;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../ll.png';

const Stats = () => {
  const loggedUser = JSON.parse(sessionStorage.getItem('user'));
  const user = {
    username:loggedUser ? loggedUser.username : 'Guest', 
    role: 'MAGE',
    level: 9,
    xpProgress: 60,       
    trophies: 0,
    points: 49159,
    anotherStat: 11472,
    kills: 61,
   
    avatarUrl: logo, 
  };

  return (
    <div className="card mt-5" style={{ maxWidth: '620px', backgroundColor: '#FFFFFF' }}>
      <div className="card-body d-flex align-items-center">
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="rounded-circle"
          style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }}
        />

        <div>
          <h5 className="mb-1" style={{ color: '#000' }}>
            {user.username} [{user.role}]
          </h5>
          <p className="mb-0" style={{ color: '#000' }}>
            Level {user.level} 
          </p>
        </div>
      </div>

      <div className="px-3 mb-4">
        <div className="progress" style={{ height: '8px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '${user.xpProgress}%', backgroundColor: '#000033' }}
            aria-valuenow={user.xpProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>

      <div className="card-body pt-0">
        <div className="d-flex justify-content-around text-center">
          <div>
            <h6 className="mb-0" style={{ color: '#000' }}>{user.trophies}</h6>
            <small style={{ color: '#000' }}>Trophies</small>
          </div>
          <div>
            <h6 className="mb-0" style={{ color: '#000' }}>{user.points}</h6>
            <small style={{ color: '#000' }}>Rank</small>
          </div>
          <div>
            <h6 className="mb-0" style={{ color: '#000' }}>{user.anotherStat}</h6>
            <small style={{ color: '#000' }}>Points</small>
          </div>
          <div>
            <h6 className="mb-0" style={{ color: '#000' }}>{user.kills}</h6>
            <small style={{ color: '#000' }}>Modules done</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
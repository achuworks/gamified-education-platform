import React from "react";
import leaderboardData from "./LeaderboardData";  // Corrected import path with proper casing
import "../App.css";  // Corrected path to App.css
import Dashboard from "./Dashboard";

const Leaderboard = () => {
  return (
    <>
    <Dashboard/>
    <div style={{paddingLeft:"270px",paddingTop:"50px"}} >
    <div className="leaderboard"  >
      <h1>Leaderboards</h1>
      <p>Welcome to the wall of fame - Here are our top 50 users.</p>
      <div className="leaderboard-list">
        {leaderboardData.map((user, index) => (
          <div
          key={user.rank}
          className={`leaderboard-item ${index === 0 ? "highlight" : ""}`}
          >
            <span className="rank">{user.rank}</span>
            <img src={user.avatar} alt="avatar" />
            <div className="user-info">
              <h2>
                {user.username} <span className="team">{user.team}</span>
              </h2>
              <p>
                Points: {user.points} | Rooms: {user.rooms} | Country:{" "}
                {user.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    </>
  );
};

export default Leaderboard;

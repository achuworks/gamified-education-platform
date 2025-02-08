import Dashboard from './Components/Dashboard';
import Learn from './Components/Learn';  // Renamed for consistency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Maindashboard from './Components/content';
import Leaderboard from './Components/Leaderboard';
import Roadmap from './Components/Roadmap';
import LearningPath from './Components/Map';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/leader" element={<Leaderboard/>}/> 
        <Route path="/roadmap" element={<LearningPath />}/>
      </Routes>
    </Router>
  );
}

export default App;

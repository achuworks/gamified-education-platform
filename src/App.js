import Dashboard from './Components/Dashboard';
import Learn from './Components/Learn';  // Renamed for consistency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Maindashboard from './Components/content';
import Leaderboard from './Components/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/leader" element={<Leaderboard/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

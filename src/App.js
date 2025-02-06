import Dashboard from './Components/Dashboard';
import Learn from './Components/Learn';  // Renamed for consistency
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learn" element={<Learn />} /> 
      </Routes>
    </Router>
  );
}

export default App;

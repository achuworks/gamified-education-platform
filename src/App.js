
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

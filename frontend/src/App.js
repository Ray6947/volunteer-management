import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import VolunteerDashboard from './components/VolunteerDashboard';
import EventManagement from './components/EventManagement';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Volunteer Dashboard</Link></li>
            <li><Link to="/manage-events">Event Management</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<VolunteerDashboard />} />
          <Route path="/manage-events" element={<EventManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Volunteer Dashboard</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerDashboard;

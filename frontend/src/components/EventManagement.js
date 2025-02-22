import React, { useState } from 'react';
import axios from 'axios';

const EventManagement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleCreateEvent = () => {
    const event = { title, description, date, location, createdBy: 'organization_id' }; // Replace 'organization_id' with the actual organization ID
    axios.post('/api/events', event)
      .then(response => {
        console.log('Event created:', response.data);
        // Reset form fields
        setTitle('');
        setDescription('');
        setDate('');
        setLocation('');
      })
      .catch(error => console.error('Error creating event:', error));
  };

  return (
    <div>
      <h1>Event Management</h1>
      <form onSubmit={e => { e.preventDefault(); handleCreateEvent(); }}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventManagement;

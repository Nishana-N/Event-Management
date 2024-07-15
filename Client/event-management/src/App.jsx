import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EventList from './components/Eventlist';
import EventForm from './components/Eventform';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [token, setToken] = useState('');
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const { data } = await getEvents();
            setEvents(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (token) {
            fetchEvents();
        }
    }, [token]);
  

  return (
    <>
    <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<EventList token={token} events={events} fetchEvents={fetchEvents} />} />
                    <Route path="/add" element={token ? <EventForm token={token} fetchEvents={fetchEvents} /> : <Navigate to="/auth" />} />
                    <Route path="/auth" element={<Auth setToken={setToken} />} />
                </Routes>
            </div>
        </Router>
      
    </>
  )
}

export default App

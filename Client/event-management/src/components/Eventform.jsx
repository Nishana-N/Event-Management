import React, { useState } from 'react';
import { addEvent } from '../services/Api';

const Eventform = ({ token, fetchEvents }) => {
    const [title, setTitle] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = { title, organizer, category, date, description };
        try {
            await addEvent(event, token);
            fetchEvents();
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={organizer} onChange={(e) => setOrganizer(e.target.value)} placeholder="Organizer" required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
            <button type="submit">Add Event</button>
        </form>
    </div>
  )
}

export default Eventform
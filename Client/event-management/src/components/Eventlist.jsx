import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../services/api';
import Event from './Event';

const Eventlist = ({ token }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const { data } = await getEvents();
            setEvents(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEvent(id, token);
            fetchEvents();
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <div>
        <div>
            {events.map(event => (
                <Event key={event._id} event={event} handleDelete={handleDelete} token={token} />
            ))}
        </div>
    

    </div>
  )
}

export default Eventlist;
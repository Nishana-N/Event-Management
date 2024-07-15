import React from 'react'

const Event = ({ event, handleDelete, token }) => {
  return (
    <div>
         <h2>{event.title}</h2>
            <p>Organizer: {event.organizer}</p>
            <p>Category: {event.category}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
            <button onClick={() => handleDelete(event._id)}>Delete</button>
    </div>
  )
}

export default Event
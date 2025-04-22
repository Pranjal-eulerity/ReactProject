import React from 'react';
import { formatDate } from '../utils';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event, i) => (
        <li key={i}>
          {event.title} – {formatDate(new Date(event.date))}
        </li>
      ))}
    </ul>
  );
};

export default EventList;

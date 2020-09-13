import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, ButtonGroup } from 'reactstrap';

import api from '../../services/api';

import './styles.css';

export default function MyRegistrations() {
  const [myEvents, setMyEvents] = useState([]);
  const user = localStorage.getItem('user');

  useEffect(() => {
    getMyEvents();
  }, []);

  const getMyEvents = async () => {
    try {
      const response = await api.get('/registration', { headers: { user } });
      setMyEvents(response.data);
    } catch (error) {}
  };

  return (
    <ul className="events">
      {myEvents.map((event) => (
        <li key={event._id}>
          <div>
            <em>Event:</em> <strong>{event.eventTitle}</strong>
          </div>
          <div className="events-details">
            <span>
              <em>Event Date:</em> {moment(event.eventDate).format('l')}
            </span>
            <span>
              <em>Event Price:</em> ${parseFloat(event.eventPrice).toFixed(2)}
            </span>
            <span>
              <em>User Email:</em> {event.userEmail}
            </span>
            <span>
              <em>Status:</em>
            </span>
          </div>
          <ButtonGroup>
            <Button
              disabled={event.approved === true || event.approved === false ? true : false}
              color="secondary"
              onClick={() => {}}
            >
              Accept
            </Button>
            <Button
              disabled={event.approved === true || event.approved === false ? true : false}
              color="danger"
              onClick={() => {}}
            >
              Reject
            </Button>
          </ButtonGroup>
        </li>
      ))}
    </ul>
  );
}

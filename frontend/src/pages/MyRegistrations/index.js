import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, ButtonGroup } from 'reactstrap';

import api from '../../services/api';

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
    <ul>
      {myEvents.map((event) => (
        <li key={event._id}>
          <div>
            <strong>{event.eventTitle}</strong>
          </div>
          <div>
            <span>Event Date: {moment(event.eventDate).format('l')}</span>
            <span>Event Price: ${parseFloat(event.eventPrice).toFixed(2)}</span>
            <span>User Email: {event.userEmail}</span>
            <span>Status:</span>
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

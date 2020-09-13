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

  const isApproved = (approved) => (approved === true ? 'Approved' : 'Rejected');

  const acceptEventHandler = async (eventId) => {
    try {
      await api.post(`/registration/${eventId}/approvals`, {}, { headers: { user } });
      getMyEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const rejectEventHandler = async (eventId) => {
    try {
      await api.post(`/registration/${eventId}/rejections`, {}, { headers: { user } });
      getMyEvents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className="events">
      {myEvents.map((event) => (
        <li key={event._id}>
          <div className="events-status">
            <em>Event:</em> <strong>{event.eventTitle}</strong>
            <span>
              <em>Status: </em>
              <span
                className={event.approved !== undefined ? isApproved(event.approved) : 'Pending'}
              >
                {event.approved !== undefined ? isApproved(event.approved) : 'Pending'}
              </span>
            </span>
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
          </div>
          <ButtonGroup>
            <Button
              disabled={event.approved === true || event.approved === false ? true : false}
              color="secondary"
              onClick={() => acceptEventHandler(event._id)}
            >
              Accept
            </Button>
            <Button
              disabled={event.approved === true || event.approved === false ? true : false}
              color="danger"
              onClick={() => rejectEventHandler(event._id)}
            >
              Reject
            </Button>
          </ButtonGroup>
        </li>
      ))}
    </ul>
  );
}

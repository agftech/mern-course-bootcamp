import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import moment from 'moment';

import api from '../../services/api';

import './styles.css';

export default function Dashboard({ history }) {
  const [events, setEvents] = useState([]);
  const user_id = localStorage.getItem('user');
  //const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  useEffect(() => {
    getEvents();
  }, []);

  const filterHandler = (query) => {
    setRSelected(query);
    getEvents(query);
  };

  const getEvents = async (filter) => {
    const url = filter ? `/dashboard/${filter}` : '/dashboard';
    const response = await api.get(url, { headers: { user_id } });

    setEvents(response.data);
  };

  return (
    <>
      <div>
        <strong>Filter: </strong>
        <ButtonGroup>
          <Button color="primary" onClick={() => filterHandler(null)} active={rSelected === null}>
            All Sports
          </Button>
          <Button
            color="primary"
            onClick={() => filterHandler('running')}
            active={rSelected === 'running'}
          >
            Running
          </Button>
          <Button
            color="primary"
            onClick={() => filterHandler('cycling')}
            active={rSelected === 'cycling'}
          >
            Cycling
          </Button>
          <Button
            color="primary"
            onClick={() => filterHandler('swimming')}
            active={rSelected === 'swimming'}
          >
            Swimming
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="warning" onClick={() => history.push('events')}>
            New Event
          </Button>
        </ButtonGroup>
      </div>
      <br></br>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event._id}>
            <header style={{ backgroundImage: `url(${event.thumbnail_url})` }} />
            <strong>{event.title}</strong>
            <span>Event Date: {moment(event.date).format('l')}</span>
            <span>Event Price: {parseFloat(event.price).toFixed(2)}</span>
            <span>Event Description: {event.description}</span>
            <br></br>
            <Button color="primary">Subscribe</Button>
          </li>
        ))}
      </ul>
    </>
  );
}

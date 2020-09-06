import React from 'react';

import './styles.css';

export default function Dashboard() {
  const user_id = localStorage.getItem('user');

  console.log(user_id);
  return <div>Hello from Dashboard!</div>;
}

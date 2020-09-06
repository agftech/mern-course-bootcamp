import React from 'react';

export default function Dashboard() {
  const user_id = localStorage.getItem('user');

  console.log(user_id);
  return <div>Hello from Dashboard!</div>;
}

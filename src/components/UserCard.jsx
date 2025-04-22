import React from 'react';
import { capitalize, formatDate } from './utility';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{capitalize(user.name)}</h2>
      <p>Joined on {formatDate(new Date(user.joinedAt))}</p>
    </div>
  );
};

export default UserCard;

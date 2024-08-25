import React from 'react';

function User({ name, date, feedback, picture }) {
  return (
    <div className="user">
      <img src={picture} alt={`${name}'s avatar`} className="user-avatar" />
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <p className="user-date">{date}</p>
        <p className="user-feedback">{feedback}</p>
      </div>
    </div>
  );
}

export default User;
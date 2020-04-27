import React from 'react';

const Card = ({ name, onClick, admin }) => (
  <div className="card">
    <h2>{name}</h2>
    {admin && (
      <button type="button" className="card-button" onClick={onClick}>
        Delete user
      </button>
    )}
  </div>
);

export default Card;

import React from 'react';

const Card = ({ name, onClick, admin }) => (
  <div>
    <h2>{name}</h2>
    {admin && (
      <button type="button" onClick={onClick}>
        Delete user
      </button>
    )}
  </div>
);

export default Card;

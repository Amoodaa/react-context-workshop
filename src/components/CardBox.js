import React from 'react';
import Card from './Card';

const CardBox = ({ admin, users, deleteName }) => (
  <div className="cardbox">
    {users.map((name) => (
      <Card
        key={name}
        name={name}
        admin={admin}
        onClick={() => deleteName(name)}
      />
    ))}
  </div>
);

export default CardBox;

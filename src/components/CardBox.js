import React from 'react';
import Card from './Card';

const CardBox = ({ users, deleteName }) => (
  <div className="cardbox">
    {users.map((name) => (
      <Card key={name} name={name} onClick={() => deleteName(name)} />
    ))}
  </div>
);

export default CardBox;

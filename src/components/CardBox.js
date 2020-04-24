import React from 'react';
import Card from './Card';

const CardBox = ({ admin, users, deleteName }) =>
  users.map((name) => (
    <Card name={name} admin={admin} onClick={() => deleteName(name)} />
  ));

export default CardBox;

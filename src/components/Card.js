import React from 'react';
import AuthContext from '../AuthContext';

const Card = ({ name, onClick }) => (
  <div className="card">
    <h2>{name}</h2>
    <AuthContext.Consumer>
      {({ admin }) =>
        admin && (
          <button type="button" className="card-button" onClick={onClick}>
            Delete user
          </button>
        )
      }
    </AuthContext.Consumer>
  </div>
);

export default Card;

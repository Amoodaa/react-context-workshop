import React from 'react';
import Switch from 'rc-switch';

const Controls = ({ toggle, logged, admin }) => (
  <div className="controls">
    <h2>User State / Permissions</h2>
    <div className="controls-switches">
      <div>
        <h3>Logged in:</h3>
        <Switch onChange={toggle('logged')} checked={logged} />
      </div>
      <div>
        <h3>Admin:</h3>
        <Switch onChange={toggle('admin')} checked={admin} />
      </div>
    </div>
  </div>
);

export default Controls;

import React from 'react';

import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

const Controls = ({ toggle, logged, admin }) => (
  <div className="controls">
    <span>
      Logged in:
      <Switch onChange={toggle('logged')} checked={logged} />
    </span>
    <span>
      Admin:
      <Switch onChange={toggle('admin')} checked={admin} />
    </span>
  </div>
);

export default Controls;

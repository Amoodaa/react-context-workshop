import React from 'react';
import CardBox from './CardBox';

class Page extends React.Component {
  state = {
    users: ['Anna', 'Lamia', 'Ziegler', 'Jett', 'Clair', 'Aoi'],
  };

  deleteName = (name) =>
    this.setState(({ users }) => ({
      users: users.filter(name),
    }));

  render() {
    const { logged, admin } = this.props;
    const { users } = this.state;
    if (!logged) return 'Please login first';
    return (
      <div className="page-container">
        <div>
          <h2>Dashboard / Users List</h2>
        </div>
        <CardBox
          logged={logged}
          admin={admin}
          users={users}
          deleteName={this.deleteName}
        />
      </div>
    );
  }
}

export default Page;

import React from 'react';
import CardBox from './CardBox';
import AuthContext from '../AuthContext';

class Page extends React.Component {
  state = {
    users: ['Anna', 'Lamia', 'Ziegler', 'Jett', 'Clair', 'Aoi'],
  };

  deleteName = (name) =>
    this.setState(({ users }) => ({
      users: users.filter((e) => e !== name),
    }));

  render() {
    const { users } = this.state;
    const { logged } = this.context;
    if (!logged) return 'Please login first';
    return (
      <div className="page-container">
        <div>
          <h2>Dashboard / Users List</h2>
        </div>
        <CardBox users={users} deleteName={this.deleteName} />
      </div>
    );
  }
}

Page.contextType = AuthContext;
export default Page;

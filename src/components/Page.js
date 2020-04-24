import React from 'react';
import CardBox from './CardBox';

class Page extends React.Component {
  state = {
    users: ['anna', 'lamia', 'ziegler', 'card1', 'card2', 'card3'],
  };

  deleteName = (name) =>
    this.setState(({ users }) => ({ users: users.filter(name) }));

  render() {
    const { logged, admin } = this.props;
    const { users } = this.state;
    if (!logged) return 'Please login first';
    return (
      <CardBox
        logged={logged}
        admin={admin}
        users={users}
        deleteName={this.deleteName}
      />
    );
  }
}

export default Page;

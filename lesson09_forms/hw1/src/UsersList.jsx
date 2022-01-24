import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { users } = this.props;

    const resultList =
      this.state.value === ''
        ? users
        : users.filter((user) =>
            user.name.toLowerCase().includes(this.state.value.toLowerCase())
          );

    return (
      <>
        <Filter
          filterText={this.state.value}
          count={resultList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {resultList.map((user) => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;

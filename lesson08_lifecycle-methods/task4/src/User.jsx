import React from 'react';

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }

    const { avatar_url, name, location } = user;

    return (
      <div class="user">
        {/* avatar_url */}
        <img alt="User Avatar" src={avatar_url} class="user__avatar" />
        <div class="user__info">
          {/* name */}
          <span class="user__name">{name}</span>
          {/* location */}
          <span class="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;

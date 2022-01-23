import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  onHandleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  search = (e) => {
    e.preventDefault();
    console.log(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.onHandleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../icons/searchIcon.svg';

export default class Searcbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ input: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      toast.error('search cannot be an empty string');
      return;
    }
    this.props.onGetRequest(this.state.input.trim().toLowerCase());
    this.reset();
  };

  render() {
    return (
      <header className={s.searchBar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></input>
          <button className={s.btn} type="submit">
            <SearchIcon width="28" height="28" fill="black" />
          </button>
        </form>
      </header>
    );
  }
}

Searcbar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};

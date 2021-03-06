import React, { Component } from 'react';
import NavLink from '../../node_modules/react-router-dom/Link';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`}>
          <span className="saved-movie"><img src={movie.poster} alt="The movie poster."/></span>
          </NavLink>
        ))}
        <NavLink to="/" className="home-button">
          Home
        </NavLink>
      </div>
    );
  }
}

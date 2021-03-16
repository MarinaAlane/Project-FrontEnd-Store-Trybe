import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingEvaluation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleStorageRating } = this.props;
    return(
      <div onChange={ handleStorageRating }>
        <label htmlFor="rating">
          Rate the movie:
          <select id="rating" name="rating" >
            <option value="1">1 estrela</option>
            <option value="2">2 esltrelas</option>
            <option value="3">3 estrelas</option>
            <option value="4">4 estrelas</option>
            <option value="5">5 estrelas</option>
          </select>
        </label>
      </div>
    );
  }
}

RatingEvaluation.PropTypes = {
  handleStorageRating: PropTypes.func.isRequired,
};

export default RatingEvaluation;

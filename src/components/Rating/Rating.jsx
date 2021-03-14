import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { func, number } from 'prop-types';
import './style.css';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxRating: 5,
      onHover: false,
      hoverRating: 0,
      rated: false,
    };
    this.swapToSolid = this.swapToSolid.bind(this);
    this.swapToRegular = this.swapToRegular.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  swapToSolid(event) {
    const { key: hoverRating } = event.currentTarget.dataset;
    this.setState(
      { rated: false },
      () => {
        this.setState({ onHover: true, hoverRating });
      },
    );
  }

  swapToRegular() {
    const { value: rating } = this.props;
    if (rating) {
      this.setState({ onHover: false, hoverRating: 0, rated: true });
    } else {
      this.setState({ onHover: false, hoverRating: 0 });
    }
  }

  updateRating(event) {
    const { key: ratingOnClick } = event.target.dataset;
    const { value: ratingState } = this.props;
    const { onHandleRatingUpdate } = this.props;
    if (parseInt(ratingOnClick, 10) === (ratingState - 1)) {
      this.setState(
        { onHover: false, rated: false },
        () => onHandleRatingUpdate(0),
      );
    } else {
      this.setState(
        { rated: true },
        () => onHandleRatingUpdate(parseInt(ratingOnClick, 10) + 1),
      );
    }
  }

  isInHoverRange(index) {
    const { onHover, hoverRating } = this.state;
    return [onHover, index <= hoverRating].every((condition) => condition === true);
  }

  isInRatedRange(index) {
    const { value: rating } = this.props;
    const { rated } = this.state;
    return [rated, index < rating].every((condition) => condition === true);
  }

  render() {
    const { maxRating } = this.state;

    return (
      <div
        className="rating-container"
      >
        {
          Array.from({ length: maxRating }).map((_, index) => (
            <label
              key={ index }
              data-key={ index }
              htmlFor={ `checkbox${index}` }
              className="rate-star"
              onMouseEnter={ this.swapToSolid }
              onMouseLeave={ this.swapToRegular }
            >
              {
                this.isInHoverRange(index) || this.isInRatedRange(index)
                  ? <FontAwesomeIcon icon={ fasStar } />
                  : <FontAwesomeIcon icon={ farStar } />
              }
              <input
                type="checkbox"
                id={ `checkbox${index}` }
                data-key={ index }
                onClick={ this.updateRating }
              />
            </label>
          ))
        }
      </div>
    );
  }
}

Rating.propTypes = {
  onHandleRatingUpdate: func.isRequired,
  value: number.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evaluations extends Component {
  render() {
    const { evaluations } = this.props;
    if (!evaluations) return <p>Produto sem avalaições</p>;
    return (
      evaluations.map((evaluation) => (
        <div key={ evaluation.email }>
          <p>{ evaluation.email }</p>
          <p>Estrelas</p>
          <p>{ evaluation.message }</p>
        </div>))
    );
  }
}

Evaluations.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.string),
}.isRequered;

export default Evaluations;

import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name }) => (
  <li className="main__currency-list__item">{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;

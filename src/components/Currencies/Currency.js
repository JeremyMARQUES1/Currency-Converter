import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, updateResult }) => (
  <li onClick={updateResult} className="main__currency-list__item">{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  updateResult: PropTypes.func.isRequired,
};

export default Currency;

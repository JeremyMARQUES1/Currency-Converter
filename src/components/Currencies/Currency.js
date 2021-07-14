import React from 'react';
import PropTypes from 'prop-types';

function Currency({ name, updateResult }) {
  function closureFunction() {
    const currencyName = name;
    updateResult(currencyName);
  }
  return (
    <li
      className="main__currency-list__item"
      onClick={closureFunction}
    >{name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  updateResult: PropTypes.func.isRequired,
};

export default Currency;

import React from 'react';
import PropTypes from 'prop-types';
import './currencies.scss';
import Currency from './Currency';

const Currencies = ({ currencies, updateResult }) => (
  <main className="main">
    <h2 className="main__title">Currencies</h2>
    <ul className="main__currency-list">
      { currencies.map((currency) => (
        <Currency
          key={currency.name}
          updateResult={updateResult}
          {...currency}
        />
      ))}
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  updateResult: PropTypes.func.isRequired,
};

export default Currencies;

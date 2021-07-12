import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';
import Currency from './Currency';

const Main = ({ currencies }) => (
  <main className="main">
    <h2 className="main__title">Currencies</h2>
    <ul className="main__currency-list">
      { currencies.map((currency) => (
        <Currency
          key={currency.name}
          {...currency}
        />
      ))}
    </ul>
  </main>
);

Main.propTypes = {
  // ingredients est....
  currencies: PropTypes.arrayOf( // un tableau de....
    PropTypes.shape({ // objets de la forme de ...
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired, // on a QUE des objets de ce type dans le tableau
  ).isRequired, // le tableau est obligatoire
};

export default Main;

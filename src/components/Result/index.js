import React from 'react';
import PropTypes from 'prop-types';
import Countup from 'react-countup';

import './result.scss';

const Result = ({ currency, value }) => (
  <footer className="footer">
    <div className="footer__content">
      <Countup decimals={2} className="footer__amount" end={value} />
      <p className="footer__unit"> {currency}</p>
    </div>
  </footer>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Result;

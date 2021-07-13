// == Import npm
import React from 'react';

// == Import de nos composants custom
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';

// == notre fichier de style
import './app.scss';

// == notre fichier de données
import currencies from 'src/data/currencies';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency: 'United States Dollar',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);

    this.updateResult = this.updateResult.bind(this);
  }

  handleToggleClick() {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }

  updateResult(event) {
    this.setState({
      selectedCurrency: event.currentTarget.innerText,
    });
  }

  makeConversion() {
    const foundCurrency = currencies
      .find((currency) => currency.name === this.state.selectedCurrency);

    const result = foundCurrency.rate * this.state.baseAmount;

    return Math.round(result * 100) / 100;
  }

  // la méthode render sera appelée lorsqu'il faut redessiner le composant
  // react se charge d'appeller render au bon moment
  // c'est a dire quand les props, ou le state changent
  render() {
    // dans render, on renvoie le meme JSX qu'avant, rien ne change ici
    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount} />
        <Toggler
          isOpen={this.state.isListOpen}
          onToggle={this.handleToggleClick}
        />
        {this.state.isListOpen && (
        <Currencies
          updateResult={this.updateResult}
          currencies={currencies}
        />
        )}
        <Result currency={this.state.selectedCurrency} value={this.makeConversion()} />
      </div>
    );
  }
}

// == Export
export default App;

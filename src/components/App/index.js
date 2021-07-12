// == Import npm
import React from 'react';

// == Import de nos composants custom
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

// == notre fichier de style
import './app.scss';

// == notre fichier de données
import currencies from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main currencies={currencies} />
    <Footer />
  </div>
);

// == Export
export default App;

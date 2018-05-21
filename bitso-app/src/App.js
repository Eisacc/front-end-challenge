import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function MainPanel(props) {
  return (
    <section>
     <header> Soy una cabecera </header>
     <nav> Soy la barra de navegacion </nav>
     <section>
        <aside> trades</aside>
        <section> charts </section>
        <aside> mercados</aside>
     </section>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <MainPanel/>
    );
  }
}

export default App;

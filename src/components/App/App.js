import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from './../SearchForm/SearchForm.js';
import Menu from './../Menu/Menu.js';
import NewsContainer from './../NewsContainer/NewsContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <section className="app">
        <header>
          <SearchForm />
        </header>
        <nav>
          <Menu />
        </nav>
        <main>
          <NewsContainer />
        </main>
      </section>
    );
  }
}

export default App;

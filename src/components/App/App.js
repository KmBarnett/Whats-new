import React, { Component } from 'react';
import noImage from '../../assets/image-not-found.png';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import SearchForm from './../SearchForm/SearchForm.js';
import Menu from './../Menu/Menu.js';
import NewsContainer from './../NewsContainer/NewsContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentArticles: 'local'
    }
  }

  handleError(e) {
    e.target.src = noImage
  }

  changeCurrentArticles = (articles) => {
    this.setState({currentArticles: articles})
  }


  render () {
    return (
      <section className="app">
        <header>
          <SearchForm />
        </header>
        <main>
          <nav>
          <Menu changeCurrentArticles = {this.changeCurrentArticles}/>
          </nav>
          <NewsContainer  articles={this.state[this.state.currentArticles]} handleError={this.handleError}/>
        </main>
      </section>
    );
  }
}

export default App;

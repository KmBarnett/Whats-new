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
      currentArticles: 'local',
      previousArticles: '',
      searchedArticles: [],
    }
  }

  handleError(e) {
    e.target.src = noImage
  }

  changeCurrentArticles = (articles) => {
    this.setState({currentArticles: articles})
  }

  searchArticles = (search) => {
    if (search.length > 0) {
      const articles = this.state[this.state.currentArticles]
      const searched = articles.filter(article => article.headline.includes(search.toLowerCase) )
      const results = this.searchedArticles.concat(searched)
      this.setState({
        previousArticles: this.state.currentArticles,
        searchedArticles: results,
        currentArticles: 'searchedArticles'
      })
    } else {
      this.setState({
        currentArticles: this.state.previousArticles,
        searchedArticles: [],
      })
    }
  }


  render () {
    return (
      <section className="app">
        <header>
          <SearchForm searchArticles={this.searchArticles}/>
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

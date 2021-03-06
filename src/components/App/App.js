import React, { Component } from 'react';
import noImage from '../../assets/image-not-found.png';
// import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import SearchForm from './../SearchForm/SearchForm.js';
import Menu from './../Menu/Menu.js';
import NewsContainer from './../NewsContainer/NewsContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local: [],
      entertainment: [],
      health: [],
      science: [],
      technology: [],
      currentArticles: 'local',
      previousArticles: 'local',
      searchedArticles: [],
    }
  }


  componentDidMount() {
    this.grabArticles();
  }
  //


  grabArticles() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => {
        this.setState({
          local: data.local,
          entertainment: data.entertainment,
          health: data.health,
          science: data.science,
          technology: data.technology,
        })
      })
      .catch(err => console.log(err.message))
  }

  handleError(e) {
    e.target.src = noImage
  }

  changeCurrentArticles = (articles) => {
    this.setState({
      currentArticles: articles,
      previousArticles: articles
    })
  }

  searchArticles = (search) => {
    if (search.length > 0) {
      console.log(search);
      const articles = this.state[this.state.currentArticles]
      const searched = articles.filter(article => article.headline.toLowerCase().includes(search.toLowerCase()) )
      const results = searched || []
      this.setState({
        previousArticles: (this.state.currentArticles !== 'searchedArticles')
          ? this.state.currentArticles : this.state.previousArticles,
        searchedArticles: results,
        currentArticles: 'searchedArticles'
      })
    } else {
      console.log('in');
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

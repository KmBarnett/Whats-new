import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super()
    this.props = props;
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <h3 className='unselectable name'>What's <span>New?</span></h3>
        <input className='search-input' type='text' placeholder='Search News Articles Here'/>
        <button className='unselectable search-btn' type='button'>Search Now</button>
      </form>
    )
  }

}

export default SearchForm;

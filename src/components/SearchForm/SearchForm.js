import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
      <form>
        <h3 className='unselectable name'>What's <span>New?</span></h3>
        <input on className='search-input' type='text' placeholder='Search News Articles Here'/>
        <button onClick={props.searchArticles} className='unselectable search-btn' type='button'>Search Now</button>
      </form>
    )
}

export default SearchForm;

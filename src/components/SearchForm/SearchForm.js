import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
      <form>
        <h3 className='unselectable name'>What's <span>New?</span></h3>
        <input id='search'  onKeyDown={(e) =>  {
          console.log(e.keyCode);
          if (e.key === 'Enter') {
            e.preventDefault()
          }
          if (e.target.value.length === 1 & e.keyCode === 8) {
            props.searchArticles('')
          }
          (e.keyCode === 13) && props.searchArticles(e.target.value)
        } } className='search-input' type='text' placeholder='Search News Articles Here'/>
        <button type='button' onClick={(e) => {
            e.preventDefault()
            let input = document.getElementById('search').value
            props.searchArticles(input)
          }} className='unselectable search-btn' type='button'>Search Now</button>
      </form>
    )
}

export default SearchForm;

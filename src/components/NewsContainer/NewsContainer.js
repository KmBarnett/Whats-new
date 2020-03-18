import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js';



// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = (props) => {
    return (
    <section className='article-container'>
      <NewsArticle articles={props.articles} handleError={props.handleError}/>
    </section>
    )
}

export default NewsContainer;

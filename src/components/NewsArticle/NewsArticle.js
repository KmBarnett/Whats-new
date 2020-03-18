import React from 'react';
import './NewsArticle.css';


const NewsArticle = (props) => {
      return props.articles.map(article => {
        return (
        <section id={article.id} key={article.id}  className='news-article'>
          <img className='article-img'
            src={article.img}
            alt=''
            onError= {props.handleError}/>
          <section className='info'>
            <h3 className='article-headline'>{article.headline}</h3>
            <p className='article-description'>{article.description}</p>
            <a className='article-url' href={article.url}>Read This article</a>
          </section>
        </section>
      )})
}


export default NewsArticle;

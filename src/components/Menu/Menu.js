import React from 'react';
import './Menu.css'
import technologyIcon from '../../assets/my-icons-collection/svg/001-project-management.svg'
import newsIcon from '../../assets/my-icons-collection/svg/002-news.svg'
import entertainmentIcon from '../../assets/my-icons-collection/svg/003-cinema.svg'
import scienceIcon from '../../assets/my-icons-collection/svg/004-chemistry.svg'
import healthIcon from '../../assets/my-icons-collection/svg/005-blood-donation.svg'


const Menu = (props) => {
    return (
      <section className='menu'>
        <button
          onClick={(e) => props.changeCurrentArticles(e.target.name)}
          className='category'
          type='button'
          id='localNews-button'
          name='local'>
          <img className='icon' src={newsIcon} alt=''/>
          Local News
        </button>
        <button
          onClick={(e) => props.changeCurrentArticles(e.target.name)}
          className='category'
          type='button'
          id='technology-button'
          name='technology'>
          <img className='icon' src={technologyIcon} alt=''/>
          Technology
        </button>
        <button
          onClick={(e) => props.changeCurrentArticles(e.target.name)}
          className='category'
          type='button'
          id='entertainment-button'
          name='entertainment'>
          <img className='icon' src={entertainmentIcon} alt=''/>
          Entertainment
        </button>
        <button
          onClick={(e) => props.changeCurrentArticles(e.target.name)}
          className='category'
          type='button'
          id='science-button'
          name='science'>
          <img className='icon' src={scienceIcon} alt=""/>
          Science
        </button>
        <button
          onClick={(e) => props.changeCurrentArticles(e.target.name)}
          className='category'
          type='button'
          id='health-button'
          name='health'>
          <img className='icon' src={healthIcon} alt=""/>
          Health
        </button>
      </section>
    )
}

export default Menu;

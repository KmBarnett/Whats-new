import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsArticle from './NewsArticle';



describe('articles', () => {

  it('Should exist', () => {
    const local =
    console.log(local);
    const { getByText, getByAltText, debug } = render(<NewsArticle
      articles={[{
        id: 1,
        headline: 'The Who postpones Denver Concert at the Pepsi Center',
        img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
        description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
        url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
      }]}
      handleError={jest.fn}
      />)


    const headline = getByText( 'The Who postpones Denver Concert at the Pepsi Center' )
    const description = getByText( 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.' )
    const url = getByText( 'Read This article' )
    const alt = getByAltText( 'description bellow' )
    debug()

    expect(headline).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(url).toBeInTheDocument()
    expect(alt).toBeInTheDocument()


  })


})

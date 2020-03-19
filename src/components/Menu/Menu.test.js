import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from './Menu';


describe('menu', () => {

  it('Should exist', () => {

    const {getByText} = render(<Menu
      changeCurrentArticles = {jest.fn()}
      />)
    const local = getByText( 'Local News' )
    const entertainment = getByText( 'Entertainment' )
    const health = getByText( 'Health' )
    const science = getByText( 'Science' )
    const technology = getByText( 'Technology' )

    expect(local).toBeInTheDocument()
    expect(entertainment).toBeInTheDocument()
    expect(health).toBeInTheDocument()
    expect(science).toBeInTheDocument()
    expect(technology).toBeInTheDocument()

  })

  it('Should exist', () => {

    const mockChangeCurrentArticles = jest.fn()
    const {getByText} = render(<Menu
      changeCurrentArticles = {mockChangeCurrentArticles}
      />)

      const local = getByText( 'Local News' )
      fireEvent.click(local)
      expect(mockChangeCurrentArticles).toHaveBeenCalledWith('local')

      const entertainment = getByText( 'Entertainment' )
      fireEvent.click(entertainment)
      expect(mockChangeCurrentArticles).toHaveBeenCalledWith('entertainment')

      const health = getByText( 'Health' )
      fireEvent.click(health)
      expect(mockChangeCurrentArticles).toHaveBeenCalledWith('health')

      const science = getByText( 'Science' )
      fireEvent.click(science)
      expect(mockChangeCurrentArticles).toHaveBeenCalledWith('science')

      const technology = getByText( 'Technology' )
      fireEvent.click(technology)
      expect(mockChangeCurrentArticles).toHaveBeenCalledWith('technology')


  })


})

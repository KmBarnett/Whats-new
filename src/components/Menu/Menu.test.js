import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from './Menu';


describe('menu', () => {

  it('Should exist', () => {

    const {getByText} = render(<Menu
      changeCurrentArticles = {jest.fn()}
      />)
    const local = getByText( 'Local' )
    const entertainment = getByText( 'entertainment' )
    const health = getByText( 'health' )
    const science = getByText( 'science' )
    const technology = getByText( 'technology' )

    expect(local).toBeInTheDocument()
    expect(entertainment).toBeInTheDocument()
    expect(health).toBeInTheDocument()
    expect(science).toBeInTheDocument()
    expect(technology).toBeInTheDocument()

  })


})

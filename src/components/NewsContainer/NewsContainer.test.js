import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsContainer from './NewsContainer';


describe('menu', () => {

  it('Should exist', () => {
    const {getByText} = render(<NewsContainer
      />)
  })


})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddPostButton from './AddPostButton'

describe('AddPostButton', () => {
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<AddPostButton onClick={handleClick} />)
    const button = getByText('Add Post')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

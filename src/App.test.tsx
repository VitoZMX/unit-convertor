import React from 'react'
import {render, screen} from '@testing-library/react'
import {App} from './App'

test('renders app component', () => {
    render(<App/>)
    const AppElement = screen.getByRole('button')
    expect(AppElement).toBeInTheDocument()
})
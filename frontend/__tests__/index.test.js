import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)

    // The test will look for any element with the 'heading' role (e.g., <h1>, <h2>)
    const heading = screen.getByRole('heading', {
      name: /DevOps Assignment/i, // This text should match a heading in your index.js
    })

    expect(heading).toBeInTheDocument()
  })
})

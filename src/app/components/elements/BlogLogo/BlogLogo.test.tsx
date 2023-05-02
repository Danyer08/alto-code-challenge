import { render } from '@testing-library/react'
import BlogLogo from './BlogLogo'
describe('BlogLogo component', () => {
  test('renders logo image', () => {
    const { getByAltText } = render(<BlogLogo />)
    const logo = getByAltText('Blog Logo')
    expect(logo).toBeInTheDocument()
  })
})

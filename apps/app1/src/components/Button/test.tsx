import { screen, render } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  it('shoud render button', () => {
    render(<Button />)
    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
  })
})

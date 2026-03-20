import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Greeting from "./Greeting"

describe('Greeting component', () => {
  test('renders *Hello* as a text', () => {
    render(<Greeting />)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
  })

  test("renders *It's nice to see you* if the button is not clicked", () => {
    render(<Greeting />)
    const element = screen.getByText("nice to see you", { exact: false })
    expect(element).toBeInTheDocument()
  })

  test("renders *It's not nice to see you* if the button is clicked", async () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    // Assert
    const element = screen.getByText("not nice to see you", { exact: false })
    expect(element).toBeInTheDocument()
  })

  test("does not render *It's nice to see you* once the button is clicked", async () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    // Assert
    const element = screen.queryByText("It's nice to see you")
    expect(element).toBeNull()
  })
})


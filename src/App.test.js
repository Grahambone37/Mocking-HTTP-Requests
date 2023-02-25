/* eslint-disable testing-library/prefer-find-by */
import App from './App'
import { render, screen, waitFor } from "@testing-library/react";

beforeEach(() => {
    fetch.resetMocks()
})

describe('will show username under header', () => {
    test('username fetched and put on page', async () => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'Graham Bone' }))
        render(<App />)
        let userName = await waitFor(() => screen.findByRole('heading', {level: 2}))

        expect(userName.textContent).toBe('Graham Bone')
    })
})

describe('button goes to github profile', () => {
    test("button goes to github profile and says right thing", async () => {
        fetch.mockResponseOnce(JSON.stringify({ url: "https://api.github.com/users/Grahambone37" }))
        render(<App />)
        let cite = await waitFor(() => screen.findByRole('link'))

        expect(cite.textContent).toBe('Link to GitHub account')
        expect(cite).toHaveAttribute('href', expect.stringContaining("https://api.github.com/users/Grahambone37"))
    })
})


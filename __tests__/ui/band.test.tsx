import BandPage from '@/pages/bands/[bandId]'
import { render, screen } from '@testing-library/react'
import { readFakeData } from '@/__tests__/__mocks__/fakeData'

test("band component displays the correct band info", async () => {
    const { fakeBands } = await readFakeData()
    render(<BandPage error={null} band={fakeBands[0]} />)

    const heading = screen.getByRole('heading', { name: /^the wandering bunnies/i })
    expect(heading).toBeInTheDocument()
})

test('If an error occurs while retriving the band list', () => {
    render(<BandPage error={'band not found'} band={null} />)

    const errorMessage = screen.getByRole('heading', { name: /^Could not retrieve band data:/i })
    expect(errorMessage).toBeInTheDocument()


    const errorSent = screen.getByRole('heading', { name: /band not found/i })
    expect(errorSent).toBeInTheDocument()
})
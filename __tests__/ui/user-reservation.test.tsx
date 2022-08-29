import { UserReservations } from "@/components/user/UserReservations"
import { render, screen } from "@testing-library/react"

test("Displays reservations and 'purchase more' button when reservations exist", async () => {
    render(<UserReservations userId={1} />)
    const purchaseButton = await screen.findByRole("button", { name: /purchase more tickets/i })
    expect(purchaseButton).toBeInTheDocument()
})

test("Ticket heading does not show and button show 'purchase tickets'", async () => {
    render(<UserReservations userId={0} />)
    const purchaseButton = await screen.findByRole('button', { name: /purchase tickets/i })
    expect(purchaseButton).toBeInTheDocument()

    const ticketsHeading = screen.queryByRole('heading', { name: "Yout tickets" })
    expect(ticketsHeading).not.toBeInTheDocument()
})
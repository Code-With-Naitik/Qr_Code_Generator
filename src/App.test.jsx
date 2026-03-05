import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// mock Google Analytics (VERY IMPORTANT)
vi.mock("./ga4", () => ({
    sendPageView: vi.fn(),
}));

describe("App Routing & Layout", () => {
    test("renders Navbar by default", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple logos may exist (navbar + footer)
        expect(
            screen.getAllByAltText("TheQRIFY Logo")[0]
        ).toBeInTheDocument();
    });

    test("hides Navbar when hideHeader=true", () => {
        render(
            <MemoryRouter initialEntries={["/?hideHeader=true"]}>
                <App />
            </MemoryRouter>
        );

        // Check that navbar is not rendered (no navigation element)
        expect(
            screen.queryByRole("navigation")
        ).not.toBeInTheDocument();
    });

    test("renders Home page on / route", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple website inputs exist (desktop + mobile)
        expect(
            screen.getAllByPlaceholderText("Enter your Website")[0]
        ).toBeInTheDocument();
    });

    test("renders Blog page on /blog route", () => {
        render(
            <MemoryRouter initialEntries={["/blog"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple "TheQRIFY Blog" headings exist (desktop + mobile)
        expect(
            screen.getAllByRole("heading", { name: "TheQRIFY Blog" })[0]
        ).toBeInTheDocument();
    });

    test("renders About page on /about route", () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByText(/About Us/i)
        ).toBeInTheDocument();
    });

    test("renders Contact page on /contact route", () => {
        render(
            <MemoryRouter initialEntries={["/contact"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByText("Get In Touch")
        ).toBeInTheDocument();
    });

    test("renders Privacy Policy page on /privacy_policy route", () => {
        render(
            <MemoryRouter initialEntries={["/privacy_policy"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("heading", { name: /Privacy Policy/i })
        ).toBeInTheDocument();
    });

    test("renders Terms page on /terms route", () => {
        render(
            <MemoryRouter initialEntries={["/terms"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("heading", { name: /Terms & Conditions/i })
        ).toBeInTheDocument();
    });
});

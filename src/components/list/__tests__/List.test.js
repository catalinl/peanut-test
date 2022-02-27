import { render, screen } from "@testing-library/react";
import List from "../List";

test("renders header on list page", () => {
    render(<List />);
    const headerElement = screen.getByText(/Movies App - List/i);
    expect(headerElement).toBeInTheDocument();
});

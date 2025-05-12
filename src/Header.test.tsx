import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
import { PageType } from "./pages";

describe("Header Component navigation tests", () => {
    let setPageMock: jest.Mock;
    let currentPage: PageType;

    beforeEach(() => {
        setPageMock = jest.fn();
        currentPage = { page: "Home" };
    });

    test("Clicking 'Home' calls setPage with page: 'Home'", () => {
        render(<Header setPage={setPageMock} currentPage={currentPage} />);
        const homeLink = screen.getByText(/home/i);
        fireEvent.click(homeLink);
        expect(setPageMock).toHaveBeenCalledWith({ page: "Home" });
    });

    test("Clicking 'Basic Quiz' calls setPage with page: 'Basic'", () => {
        render(<Header setPage={setPageMock} currentPage={currentPage} />);
        const basicLink = screen.getByText(/basic quiz/i);
        fireEvent.click(basicLink);
        expect(setPageMock).toHaveBeenCalledWith({ page: "Basic" });
    });

    test("Clicking 'Detailed Quiz' calls setPage with page: 'Detailed'", () => {
        render(<Header setPage={setPageMock} currentPage={currentPage} />);
        const detailedLink = screen.getByText(/detailed quiz/i);
        fireEvent.click(detailedLink);
        expect(setPageMock).toHaveBeenCalledWith({ page: "Detailed" });
    });
});

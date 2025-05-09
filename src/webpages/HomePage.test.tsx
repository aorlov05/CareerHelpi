import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { PageType } from "../pages";

describe("HomePage Component tests", () => {
    let setPageMock: jest.Mock;
    let handleSubmitMock: jest.Mock;
    let changeKeyMock: jest.Mock;

    beforeEach(() => {
        setPageMock = jest.fn();
        handleSubmitMock = jest.fn();
        changeKeyMock = jest.fn();
    });

    test("Renders Home Page title", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        expect(screen.getByText(/home page/i)).toBeInTheDocument();
    });

    test("Renders API Key input and Submit button", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        expect(screen.getByPlaceholderText(/insert api key here/i)).toBeInTheDocument();
        expect(screen.getByText(/submit/i)).toBeInTheDocument();
    });

    test("API Key input change triggers changeKey handler", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        const input = screen.getByPlaceholderText(/insert api key here/i);
        fireEvent.change(input, { target: { value: "12345" } });
        expect(changeKeyMock).toHaveBeenCalled();
    });

    test("Clicking Submit calls handleSubmit", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        const button = screen.getByText(/submit/i);
        fireEvent.click(button);
        expect(handleSubmitMock).toHaveBeenCalled();
    });

    test("Clicking Basic Quiz calls setPage with page: 'Basic'", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        const button = screen.getByText(/start simple questions/i);
        fireEvent.click(button);
        expect(setPageMock).toHaveBeenCalledWith({ page: "Basic" });
    });

    test("Clicking Detailed Quiz calls setPage with page: 'Detailed'", () => {
        render(
            <HomePage
                setPage={setPageMock}
                handleSubmit={handleSubmitMock}
                changeKey={changeKeyMock}
            />
        );
        const button = screen.getByText(/start detailed questions/i);
        fireEvent.click(button);
        expect(setPageMock).toHaveBeenCalledWith({ page: "Detailed" });
    });
});

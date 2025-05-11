import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BasicQuiz } from "./BasicQuiz";
import { PageType } from "../../pages";

describe("BasicQuiz", () => {
  let mockSetPage: jest.Mock;

  beforeEach(() => {
    mockSetPage = jest.fn();
  });

  test("renders all basic quiz questions", () => {
    render(<BasicQuiz setPage={mockSetPage} />);
    const questions = screen.getAllByRole("heading", { level: 3 });
    expect(questions).toHaveLength(10); // There are 10 questions
  });

  test("disables 'Get Results' button until all questions are answered", () => {
    render(<BasicQuiz setPage={mockSetPage} />);
    const button = screen.getByRole("button", { name: /get results/i });
    expect(button).toBeDisabled();

    // Answer all 10 questions
    const radios = screen.getAllByRole("radio");
    const firstRadioPerQuestion = radios.filter((_, idx) => idx % 4 === 0);
    firstRadioPerQuestion.forEach(radio => fireEvent.click(radio));

    expect(button).toBeEnabled();
  });

  test("calls setPage with correct answers when quiz is completed", () => {
    render(<BasicQuiz setPage={mockSetPage} />);
    const button = screen.getByRole("button", { name: /get results/i });

    const radios = screen.getAllByRole("radio");
    const firstRadioPerQuestion = radios.filter((_, idx) => idx % 4 === 0);
    firstRadioPerQuestion.forEach(radio => fireEvent.click(radio));

    fireEvent.click(button);

    expect(mockSetPage).toHaveBeenCalledTimes(1);
    const arg = mockSetPage.mock.calls[0][0] as PageType;

    if (arg.page !== "Results") {
    throw new Error("Expected page to be 'Results'");
    }

    expect(arg.answers).toHaveLength(10);

  });
});

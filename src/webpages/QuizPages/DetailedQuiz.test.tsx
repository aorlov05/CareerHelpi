import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DetailedQuiz } from "./DetailedQuiz";

describe("DetailedQuiz", () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    mockSetPage.mockReset();
  });

  test("renders all questions", () => {
    render(<DetailedQuiz setPage={mockSetPage} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(10); // There are 10 detailed questions
  });

  test("disables 'Get Results' until all questions are answered", () => {
    render(<DetailedQuiz setPage={mockSetPage} />);
    const button = screen.getByRole("button", { name: /get results/i });
    expect(button).toBeDisabled();
  });

  test("enables 'Get Results' after all questions are answered and calls setPage with answers", () => {
    render(<DetailedQuiz setPage={mockSetPage} />);

    const responses = screen.getAllByRole("textbox");

    responses.forEach((input, index) => {
      fireEvent.change(input, {
        target: { value: `Answer to question ${index + 1}` },
      });
    });

    const button = screen.getByRole("button", { name: /get results/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(mockSetPage).toHaveBeenCalledWith(
      expect.objectContaining({
        page: "Results",
        answers: expect.arrayContaining([
          expect.objectContaining({
            question_name: expect.any(String),
            question_result: expect.stringContaining("Answer to question"),
          }),
        ]),
      })
    );
  });
});

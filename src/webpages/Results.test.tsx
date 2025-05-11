import React from 'react';
import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { Answer } from './QuizPages/QuizQuestion';

jest.mock('react-markdown', () => {
  return ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
});

describe('Results Component', () => {
  const mockAnswers: Answer[] = [
    { question_name: 'What do you enjoy most in work?', question_result: 'Solving complex problems' },
    { question_name: 'What motivates you?', question_result: 'Helping others' },
  ];

  it('renders the answers', () => {
    render(<Results answers={mockAnswers} />);
    expect(screen.getByText('Q: What do you enjoy most in work?')).toBeInTheDocument();
    expect(screen.getByText('A: Solving complex problems')).toBeInTheDocument();
    expect(screen.getByText('Q: What motivates you?')).toBeInTheDocument();
    expect(screen.getByText('A: Helping others')).toBeInTheDocument();
  });

  it('renders loading state initially for GPT response', async () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    mockGetItem.mockReturnValue(JSON.stringify('fake-key'));
  
    render(<Results answers={mockAnswers} />);
  
    // Wait for the loading message to appear
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
  
    mockGetItem.mockRestore();
  });
  
});

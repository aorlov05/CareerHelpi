import "./Results.css";
import React, { useEffect, useRef, useState } from 'react';
import { Answer } from "./QuizPages/QuizQuestion";
import OpenAI from "openai";
import ReactMarkdown from "react-markdown";

type ResultsProps = {
  answers: Answer[];
};

export function Results({ answers }: ResultsProps): React.JSX.Element {
  const [gptResponse, setGptResponse] = useState<string>("");
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function getAIResponse(): Promise<void> {
      const openAIKey = localStorage.getItem("MYKEY");
      if (openAIKey === null) {
        setGptResponse("No API Key!");
        return;
      }
  
      const stringAIKey = JSON.parse(openAIKey);
      const client = new OpenAI({ apiKey: stringAIKey, dangerouslyAllowBrowser: true });
  
      const formattedAnswers = answers.map((ans, idx) => 
        `Q${idx + 1}: ${ans.question_name}\nA${idx + 1}: ${ans.question_result}`
      ).join("\n\n");
    
      const prompt = `Here are my career quiz questions and answers:\n\n${formattedAnswers}\n\nYou are a career advisor AI. Based on the user's quiz responses, analyze their work preferences, motivations, interests, and strengths. Recommend 2-3 career paths that align with their answers. For each career, provide a short explanation in 2-3 sentences. Respond using Markdown formatting with lists, headings, and bold text.`;
      console.log(prompt);

      try { 
        const response = await client.chat.completions.create({
          model: "gpt-4o-mini", 
          messages: [{ role: "user", content: prompt }]
        })
  
        setGptResponse(response.choices[0]?.message?.content ?? "No content.");
      } catch (e) {
        setGptResponse("Error retrieving GPT response.");
      }
    }

    getAIResponse();
  }, [answers]);

  return (
    <div className="results-page">
      <h1>Quiz Results</h1>
      <div className="results-list result-item">
        {
          gptResponse === "" ? <div><p>Loading...</p><img className="loading-icon" src="./spin_load.gif" alt="Loading"></img> </div>
          : <ReactMarkdown components={{
            // Map `h1` (`# heading`) to use `h2`s.
            h1: 'h2'
          }}>{gptResponse}</ReactMarkdown>
        }
      </div>
      <h1>Your Responses</h1>
      <div className="results-list">
        {answers.map((answer, index) => (
          <div key={index} className="result-item">
            <p>Q: {answer.question_name}</p>
            <p>A: {answer.question_result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

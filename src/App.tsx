import React, { useState } from 'react';
import './App.css';
import { Header } from "./Header";
import { HomePage } from './webpages/HomePage';
import { PageType } from "./pages";
import { BasicQuiz } from "./webpages/QuizPages/BasicQuiz";
import { DetailedQuiz } from './webpages/QuizPages/DetailedQuiz';
import {Results} from './webpages/Results';
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect


if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<PageType>({page:"Home"});
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function getPage() {
    switch (page.page) {
      case "Home":
        return <HomePage handleSubmit={handleSubmit} changeKey={changeKey} setPage = {setPage} />
      case "Basic":
        return <BasicQuiz setPage={setPage} />
      case "Detailed":
        return <DetailedQuiz setPage={setPage} />
      case "Results":
        return <Results answers={page.answers} />;
      default:
        return;
    }
  }

  return (
    <div className="App">
      <div className="animated-bg"></div>
      <Header setPage={setPage} currentPage={page} />
      {getPage()}
      <footer>
        Made by Andrew Orlov, Joshua Chelen, Gael Lucero-Palacios
      </footer>
    </div>
  );
}

export default App;

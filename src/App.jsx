import React, { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [showScore, setShowScore] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  function calculateScore() {
    let score = 0;
    for (let i = 0; i < data.length - 1; i++) {
      if (Number(userAnswers[i]) === data[i].answer) {
        score++;
      }
    }
    console.log(score);
    return score;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (questionNumber === data.length - 1) {
        clearInterval(interval);
        calculateScore();
        setShowScore(true);
      } else {
        setQuestionNumber(questionNumber + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [questionNumber]);

  useEffect(() => {
    console.log("Selected Option: " + selectedOption);
    setUserAnswers([...userAnswers, selectedOption]);
  }, [selectedOption]);

  return (
    <>
      {showScore ? (
        <div id="score">
          <h3>
            You have scored {calculateScore()} out of {data.length}
          </h3>
        </div>
      ) : (
        <div id="quiz">
          <h3>{data[questionNumber].question}</h3>
          <div className="options">
            {data[questionNumber].options.map((option, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="opt"
                    value={option}
                    onClick={() => setSelectedOption(option)}
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

import React, { useState, useEffect, useMemo } from 'react';
import Answer from '../components/Answer';
import Prize from '../components/Prize';
import config from "../config"; 

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(config.questions.length - 1);
  const [question, setQuestion] = useState(currentIndex);
  const quiestionsArray = useMemo(() => {
    return shuffle(config.questions);
  }, []);
  const currentQuestion = quiestionsArray[question];
  const currensAnswers = currentQuestion.answers;
  const currensAnswer = currentQuestion.rightAnswer;
  const alphabet = Array.apply(undefined, Array(26)).map(function(x,y) { 
    return String.fromCharCode(y + 65); 
  }).join('');
  const prize = config.prize;


  useEffect(() => {
    setQuestion(currentIndex);  
  }, [currentIndex]);


  function nextQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {

    }
  }

  function checkAnswer(answer) {
    if (answer === currentQuestion.rightAnswer) {
      nextQuestion();
    }
  }


  return (
      <div className="quiz-wrap">
          <div className="quiz">
            <h2 key={currentQuestion.id} onClick={nextQuestion} className="question">{currentQuestion.question}</h2>
            <div className="answers-wrap">
              {currensAnswers.map((answer, i) =>
                <Answer key={i}
                        letter={alphabet[i]}
                        answer={answer}
                        currensAnswer={currensAnswer}
                        onSelect={checkAnswer}
                />
              )}
            </div>
          </div>
          <div className="prize-wrap">
            {prize.map((prize, i) =>
              <Prize key={i} 
                     prize={prize}
              />
            )}
          </div>
      </div>
  );
}
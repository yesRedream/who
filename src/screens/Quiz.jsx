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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(currentIndex);
  const [disabledBtns, setDisabledBtns] = useState('');

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
    if (currentIndex < config.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {

    }
  }

  function checkAnswer(answer) {
    // if (answer === currentQuestion.rightAnswer) {
    if (currentQuestion.rightAnswer.includes(answer)) {
      nextQuestion();
    }
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function disableButtons() {
    setDisabledBtns('disabled');
    await delay(1700);
    setDisabledBtns('');
  }




  return (
      <div className="quiz-wrap">
          <div className="quiz">
            <h2 key={currentQuestion.id} onClick={nextQuestion} className="question">{currentQuestion.question}</h2>
            <div className={`answers-wrap ${disabledBtns}`}>
              {currensAnswers.map((answer, i) =>
                <Answer key={i}
                        letter={alphabet[i]}
                        answer={answer}
                        currensAnswer={currensAnswer}
                        disableButtons={disableButtons}
                        onSelect={checkAnswer}
                />
              )}
            </div>
          </div>
          <div className="prize-wrap">
            {prize.map((prize, i) =>
              <Prize key={i} 
                     prize={prize}
                     currentIndex={currentIndex}
                     prizeIndex={i}
              />
            )}
          </div>
      </div>
  );
}
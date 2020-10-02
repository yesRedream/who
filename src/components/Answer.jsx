import React, { useState, useEffect } from 'react';


export default function Answer({answer, letter, currensAnswer, onSelect, disableButtons, }) {
  const [status, setStatus] = useState('');
  // const [correctAnswers, setCorrectAnswers] = useState(currensAnswer.length);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));




  async function handleClick() {
    disableButtons();
    setStatus('selected');
    await delay(700);
    // if (answer === currensAnswer) {
    if (currensAnswer.includes(answer)) {
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
    await delay(1000);
    onSelect(answer);
    setStatus('');
    // let correctAnswers = currensAnswer.length;

    // setStatus('selected');
    // if (correctAnswers < 2) {
    //   disableButtons();
    // }
    // await delay(700);
    // if (currensAnswer.includes(answer)) {
    //   setStatus('correct');
    //   correctAnswers= correctAnswers - 1;
    //   console.log(correctAnswers);
    //   if (correctAnswers === 0) {
    //     console.log(correctAnswers);
  
    //     await delay(1000);
    //     onSelect(answer);
    //     setStatus('');
    //   }

    // } else {
    //   setStatus('wrong');
    // }
  }

  return (
      <div className={`answer-wrap ${status}`} onClick={handleClick}>
        <p className="answer-content">
          <span className="letter">{letter}</span>
          {answer}
        </p>
        <div className="svg-wrap">
          <svg width="373" height="72" viewBox="0 0 373 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z" fill="white" stroke="#D0D0D8"/>
          </svg>
        </div>
      </div>
  );
}
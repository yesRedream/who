import React, { useState, useEffect } from 'react';

export default function Answer({answer, letter, currensAnswer, onSelect, disableButtons,removeActiveBtn }) {
  const [status, setStatus] = useState('');

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    setStatus('');
  }, [currensAnswer]);

  async function handleClick() {
    disableButtons();
    setStatus('selected');
    await delay(700);
    if (currensAnswer.includes(answer)) {
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
    await delay(1000);
    onSelect(answer);
  }

  return (
    <div className={`answer-disable ${status}`}>
      <div className={`answer-wrap ${status}`} onClick={handleClick}>
        <p className="answer-content">
          <span className="letter">{letter}</span>
          {answer}
        </p>
        <div className="line"></div>
        <div className="svg-wrap">
          <svg width="373" height="72" viewBox="0 0 373 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z" fill="white" stroke="#D0D0D8"/>
          </svg>
          <svg width="288" height="56" viewBox="0 0 288 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" fill="white" stroke="#D0D0D8"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
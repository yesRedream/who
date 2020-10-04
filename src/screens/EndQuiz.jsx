import React, { useState } from 'react';
import Quiz from './Quiz';
import LikeLogo from '../components/LikeLogo';

export default function EndQuiz({score}) {
  const [start, setStart] = useState(false);

  if (start === false) {
    return (
        <div className="end-quiz-wrap">
            <div className="end-quiz">
                <LikeLogo/>
                <div className="heading-btn">
                  <div className="total-score">
                    <h5 className="total">Total score:</h5>
                    <h1 className="score">${score ? score : '0'} earned</h1>
                  </div>
                  <div className="btn" onClick={() => setStart(true)}>Try again</div>
                </div>
            </div>
        </div>
    );
  }

  return <Quiz/>
}
import React, { useState } from 'react';
import Quiz from './Quiz';
import LikeLogo from '../components/LikeLogo';

export default function StartQuiz() {
  const [start, setStart] = useState(false);

  if (start === false) {
    return (
        <div className="start-quiz-wrap">
            <div className="start-quiz">
                <LikeLogo/>
                <div className="heading-btn">
                    <h1 className="heading">Who wants to be <br/> a millionaire?</h1>
                    <div className="btn" onClick={() => setStart(true)}>Start</div>
                </div>
            </div>
        </div>
    );
  }

  return (
    <Quiz/>
  );
}
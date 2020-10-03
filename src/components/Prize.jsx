import React, { useState, useEffect } from 'react';

export default function Answer({prize, currentIndex, prizeIndex}) {
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (prizeIndex === 0) {
            setStatus("current");
        } else if (currentIndex === prizeIndex) {
            setStatus("current scale");
        }
        if (currentIndex > prizeIndex) {
            setStatus("riched");
        }
    }, [currentIndex, prizeIndex]);

    return (
        <div className={`prize ${status}`}>
            <p className="prize-content">
                {prize}
            </p>
            <div className="line"></div>
            <div className="prize-svg-wrap">
                <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" fill="white" stroke="#D0D0D8"/>
                </svg>
                <svg width="240" height="32" viewBox="0 0 240 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z" fill="white" stroke="#D0D0D8"/>
                </svg>

            </div>
        </div>
    );
}
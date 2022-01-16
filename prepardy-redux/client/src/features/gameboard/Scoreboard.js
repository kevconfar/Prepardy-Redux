import React from 'react';

import { useSelector } from 'react-redux';

import { score } from '../score/scoreSlice';

const Scoreboard = () => {

    const userScore = useSelector(score);

    return (
   
        <span className="score-count">
            <div id="scoreboard">
                <p className="playerName">Score</p>${userScore}
            </div>
        </span>
         

    )

}

export default Scoreboard;


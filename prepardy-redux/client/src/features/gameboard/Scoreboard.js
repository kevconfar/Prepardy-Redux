import React from 'react';

import { useSelector } from 'react-redux';

import { score } from '../score/scoreSlice';

const Scoreboard = () => {

    const userScore = useSelector(score);

    return (
   
        <div id="scoreboard">
            <p className="playerName">Score</p>${userScore}
        </div>
         

    )

}

export default Scoreboard;


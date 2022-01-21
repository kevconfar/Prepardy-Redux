import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllClues } from '../game/cluesSlice';

import DailyDouble from './DailyDouble';
import Answer from './Answer';
import { setGameComplete } from '../game/gameplaySlice';

const FinalPrepardy = ({category}) => {

    const dispatch = useDispatch();
    const clue = useSelector(selectAllClues).filter((x) => x.category === category);

    const [bet, setBet] = useState(0);
    const [submitBet, setSubmitBet] = useState(false);
    const handleBet = () => setSubmitBet(true);

    const [answered, setAnswered] = useState(false);

    const toPostGame = () => dispatch(setGameComplete);

    if (!submitBet) return (
        <div>
            <DailyDouble finalyPrepardy={true} handleBet={handleBet} />
        </div>
    )
    else return (
        <div>
            {!answered ? <p>{clue.question}</p> : <div></div>}
            <Answer value={bet} answer={clue.answer} setAnswered={setAnswered} clueId={clue.id} />
            { answered ? <button onClick={toPostGame}>Post-Game Review</button> : <div></div> }       
        </div>
    )
  
}

export default FinalPrepardy;
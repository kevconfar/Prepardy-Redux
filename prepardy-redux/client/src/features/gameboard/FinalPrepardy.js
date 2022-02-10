import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllClues } from '../game/cluesSlice';

import DailyDouble from './DailyDouble';
import Answer from './Answer';
import { setGameComplete } from '../game/gameplaySlice';
import { selectScore } from '../score/scoreSlice';

const FinalPrepardy = ({category}) => {

    const dispatch = useDispatch();
    const clue = useSelector(selectAllClues).filter((x) => x.category === category);

    const [bet, setBet] = useState(0);
    const [submitBet, setSubmitBet] = useState(false);
    const handleBet = (e) => setBet(e.target.value);

    const [answered, setAnswered] = useState(false);
    const score = useSelector(selectScore);


    const toPostGame = () => dispatch(setGameComplete());

    if (!submitBet) return (
        <div>
            <div className="header">
                <h1>FINAL PREPARDY!</h1>
            </div>
            <div className="category">
                <div className="header">
                    <h1>{category}</h1>
                </div>
            </div>
            <p>How much would you like to wager? You may bet up to ${score}.</p>
            <input onChange={handleBet} onSubmit={() => setSubmitBet(true)} type="number"/>
        </div>
    )
    else return (
        <div>
            <div className="category">
                <div className="header">
                    <h1>{category}</h1>
                </div>
            </div>
            {!answered ? <p>{clue.question}</p> : <div></div>}
            <Answer value={bet} answer={clue.answer} setAnswered={setAnswered} clueId={clue.id} />
            { answered ? <button onClick={toPostGame}>Post-Game Review</button> : <div></div> }       
        </div>
    )
  
}

export default FinalPrepardy;
import React, { useState } from 'react';

import Answer from './Answer';
import DailyDouble from './DailyDouble';

import { useSelector, useDispatch } from 'react-redux';
import { addIncorrectClue, selectSelectedClue, setSelectedClue } from '../game/cluesSlice';
import { setIsClueSelected } from '../game/gameplaySlice';
import { propTypes } from 'react-bootstrap/esm/Image';

const AnswerForm = () => {

    const dispatch = useDispatch();

    const clue = useSelector(selectSelectedClue);

    const [bet, setBet] = useState(clue.value);
    const handleBet = (e) => setBet(e.target.value); // pass to DailyDouble;

    const [answered, setAnswered] = useState(false);
    const [dailyDouble, setDailyDouble] = useState((clue.dd === true));

    const backToGame = () => {
        dispatch(setSelectedClue({}));
        dispatch(setIsClueSelected());
    }
    const pass = () => {
        dispatch(addIncorrectClue(clue.id));
        dispatch(setSelectedClue({}));
        dispatch(setIsClueSelected());
    }


    if (dailyDouble) return (
        <div>
            <DailyDouble handleBet={handleBet}/>
            <button onClick={() => setDailyDouble(false)}>Place Bet</button>
        </div>
    )
    else return (
        <div id="question">
            {!answered ? <p>{clue.question}</p> : <div></div>}
            <Answer value={bet} answer={clue.answer} setAnswered={setAnswered} clueId={clue.id} />
            {answered ? <button onClick={backToGame}>Back</button> : <button onClick={pass}>Pass</button>}
        </div>
    )
}


export default AnswerForm;
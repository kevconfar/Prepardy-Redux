import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Answer from './Answer';
import DailyDouble from './DailyDouble';

import { useSelector, useDispatch } from 'react-redux';
import { addIncorrectClue, selectSelectedClue, setSelectedClue } from '../game/cluesSlice';
import { incrementAnsweredQuestions, setIsClueSelected } from '../game/gameplaySlice';
import { propTypes } from 'react-bootstrap/esm/Image';

import Hint from './Hint';


const AnswerForm = (props) => {

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
        dispatch(incrementAnsweredQuestions());
        backToGame();
    }


    if (dailyDouble || props.finalPrepardy) return (
        <div>
            <DailyDouble handleBet={handleBet}/>
            <button onClick={() => setDailyDouble(false)}>Place Bet</button>
        </div>
    )
    else return (

        <div id="response" className='expanded-card'>
         <div id="question">
            {!answered ? <p>{clue.question.toUpperCase()}</p> : <div></div>}
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Answer value={bet} answer={clue.answer} setAnswered={setAnswered} clueId={clue.id} />
            
            
            </div>
            {answered ? <button onClick={backToGame}>Back</button> :<div style={{display: 'flex', justifyContent: 'center'}}> <button onClick={pass}>Pass</button></div>}
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Hint/>
            </div>
        </div>
        </div>
    )
}

AnswerForm.propTypes = {
    finalPrepardy: PropTypes.bool
}

export default AnswerForm;
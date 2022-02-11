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


    //maybe include buzzer in Answer.js, 
    // const [buzzed, setBuzzed] = useState(false);
    const [buzzTime, setBuzzTime] = useState(0) // [buzzTime, answerTime]
    const handleBuzz = () => {
        let t = Date().getTime();
        setBuzzTime(t);
    }

    const backToGame = () => {
        dispatch(setSelectedClue({}));
        dispatch(setIsClueSelected());
    }
    const pass = () => { // IDEA: change to return jsx element that states correct answer and has backToGame button
        dispatch(addIncorrectClue(clue.id));
        dispatch(incrementAnsweredQuestions());
        backToGame();
    }

    // start just testing

    // user taps enter or space if they want to answer THEN answer form/input shows
    // time how long AFTER read-time is over 
    // ONE timer, a state value is created at FIRST click of space/enter (buzz in) AND how long it takes to start typing (to answer).
    // timer will STOP incrementing after user starts typing

    // timer hack: dont use an actual timer, just log the times and calculate elapsed time using the differences between the recorded values.


    const buzzIn = () => {

        return (
            <div className="buzz-input">
                <input type="submit" onSubmit={handleBuzz} />

            </div>
        )
    }


    // end just testing


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
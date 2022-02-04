import React, { useState } from 'react';

import Answer from './Answer';
import DailyDouble from './DailyDouble';

import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedClue, setSelectedClue } from '../game/cluesSlice';
import { setIsClueSelected } from '../game/gameplaySlice';

import Hint from './Hint';


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
    const pass = () => dispatch(setIsClueSelected());

    if (dailyDouble) return (
        <div>
            <DailyDouble handleBet={handleBet} />
            <button onClick={() => setDailyDouble(false)}>Place Bet</button>
        </div>
    )
    else return (

        <div className="expanded-card">
         <div id="question" >
            {!answered ? <p>{clue.question}</p> : <div></div>}
            <div className="d-flex justify-content-center">
            <Answer value={bet} answer={clue.answer} setAnswered={setAnswered} clueId={clue.id} />
            
            
            </div>
            {answered ? 
                <div className="d-flex justify-content-center">
                <button onClick={backToGame}>Back</button> 
                </div>
                :
                <div>
                    <div className="d-flex justify-content-center"> 
                        <button onClick={pass}>Pass</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Hint/>
                    </div>
                </div>
            }
            
        </div>
        </div>
    )
}

export default AnswerForm;
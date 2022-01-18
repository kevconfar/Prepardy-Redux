import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setIsClueSelected, incrementAnsweredQuestions } from '../game/gameplaySlice';
import { selectSelectedClue, setSelectedClue, addIncorrectClue, addCorrectClue } from '../game/cluesSlice';

import { decrementScore, incrementScore } from '../score/scoreSlice';

const Response = () => {

    const clue = useSelector(selectSelectedClue);
    const dispatch = useDispatch();

    const [assist, setAssist] = useState(false);

    const [guess, setGuess] = useState(""); // STATE AND HANDLERS FOR USER RESPONSE
    const [submitGuess, setSubmitGuess] = useState(false);
    const handleGuess = (e) => setGuess(e.target.value);
    const submitAnswer = (e) => {
        if (e.key === 'Enter') setSubmitGuess(true);
    }

    const [bet, setBet] = useState(0); // STATE AND HANDLERS FOR DAILYDOUBLE BETS
    const [submitBet, setSubmitBet] = useState(false);
    const handleBet = (e) => setBet(e.target.value);
    const submitWager = () => setSubmitBet(true);

    const isDailyDouble = (clue.dd === true) // BOOLEAN THAT CHECKS IF CLUE IS DAILY DOUBLE

    const checkAnswer = () => { // COMPARES USER GUESS TO CLUE.ANSWER
        var g = guess.toLowerCase();
        var a = clue.answer.toLowerCase();

        const wager = (isDailyDouble) ? bet / 2 : clue.value / 2;

        if (a === g || a === "the " + g || a === g + "s" || a === "a " + g || a === "an " + g) {
            dispatch(incrementScore(wager))
            dispatch(addCorrectClue(clue.id));
            return true;
        }
        if (a !== g) {
            dispatch(decrementScore(wager));
            dispatch(addIncorrectClue(clue.id));
            return false;
        }
        
    }

    const backToGame = (e) => { // CHANGES isClueSelected to FALSE and OPENS GAMEBOARD
        dispatch(incrementAnsweredQuestions()); 
        dispatch(setIsClueSelected());
        dispatch(setSelectedClue({}));
    }

    const assistMode = () => {
        const arr = clue.answer.split(" ");
        const output = []

        const line = "___ "
        arr.each((x) => output.push(line * x.length));
        
        return <p>{output.join('  ')}</p>
    }
    const handleAssist = () => (assist) ? setAssist(false) : setAssist(true);

    if (isDailyDouble && !submitBet) return (
        <div className="daily-double">
            <h1>DAILY DOUBLE!</h1>
            <h3>How much would you like to wager?</h3>
            <input onChange={handleBet} value={bet} type="number" />
            <button onClick={submitWager}>SUBMIT</button>
        </div>
    )
    else return (
        <div id="question">
   
            {!submitGuess ? (
                <div>
                    <p>{clue.question}</p>
    
                    <br></br>
                    <input onKeyUp={submitAnswer} onChange={handleGuess} value={guess} placeholder="Answer Here" />
                    <br></br><br></br>
                    {/* <button onClick={submitAnswer}>ANSWER</button> */}
                </div>
            ) : (
                <div>
                    {checkAnswer() ? (
                        <div>
                            <h1>CORRECT!</h1>
                        </div>
                    ) : (
                        <div>
                            <h1>INCORRECT!</h1>
                            <h2>The correct answer is: {clue.answer}</h2>
                        </div>
                    )}

                    <button onClick={backToGame}>BACK</button>
                </div>
            )}
        
        </div>



    )
}


export default Response;
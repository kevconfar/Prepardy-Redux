import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setIsClueSelected } from '../game/gameplaySlice';
import { selectSelectedClue, setSelectedClue } from '../game/cluesSlice';

import { decrementScore, incrementScore } from '../score/scoreSlice';

const Response = () => {

    const clue = useSelector(selectSelectedClue);
    const dispatch = useDispatch();

    const [assist, setAssist] = useState(false);

    const [guess, setGuess] = useState(""); // STATE AND HANDLERS FOR USER RESPONSE
    const [submitGuess, setSubmitGuess] = useState(false);
    const handleGuess = (e) => setGuess(e.target.value);
    const submitAnswer = () => setSubmitGuess(true);

    const [bet, setBet] = useState(clue.value); // STATE AND HANDLERS FOR DAILYDOUBLE BETS
    const [submitBet, setSubmitBet] = useState(false);
    const handleBet = (e) => setBet(e.target.value);
    const submitWager = () => setSubmitBet(true);

    const isDailyDouble = (clue.dd === true) // BOOLEAN THAT CHECKS IF CLUE IS DAILY DOUBLE
    const dailyDouble = () => { // THE JSX USED IF CLUE.DD === TRUE
        return (
            <div className="daily-double">
                <h1>DAILY DOUBLE!</h1>
                <h3>How much would you like to wager?</h3>
                <input onChange={handleBet} value={bet} type="number"/>
                <button onClick={submitWager}>SUBMIT</button>
            </div>
        )
    }

    const checkAnswer = () => { // COMPARES USER GUESS TO CLUE.ANSWER
        var g = guess.toLowerCase();
        var a = clue.answer.toLowerCase();

        // return (a === g) ? true : false;

        if (a === g || a === "the " + g || a === g + "s" || a === "a " + g) {
            dispatch(incrementScore(parseInt(bet)));
            return true;
        }
        if (a !== g) {
            dispatch(decrementScore(parseInt(bet)));
            return false;
        }
        
    }

    const backToGame = () => { // CHANGES isClueSelected to FALSE and OPENS GAMEBOARD 
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

    return (
        <div id="question">
   
            {!submitGuess ? (
                <div>
                    <p>{clue.question}</p>
                    <br></br><br></br>

                    <br></br>
                    <input onChange={handleGuess} value={guess} placeholder="Answer Here" />
                    <br></br><br></br>
                    <button onClick={submitAnswer}>ANSWER</button>
                </div>
            ) : (
                <div>
                    {checkAnswer() ? (
                        <div>
                            <h1>CORRECT!</h1>
                            <h2>Answer: {clue.answer}</h2>
                            <h2>Guess: {guess}</h2>
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
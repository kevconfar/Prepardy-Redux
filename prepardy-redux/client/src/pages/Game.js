/*

Use the SelectedClue state in CluesSlice to control when the clicked clues pop up and disappear.

When a clue is clicked the state value for SelectedClue is re-assigned to the selected Clue Object.
    - EX: dispatch(setSelectedClue(clueObject))
    
The value of SelectedClue will determine what is displayed.
    - if (SelectedClue === {}) display only the Gameboard
    - if (SelectedClue !== {}) the Clue/AnswerForm pops up

When the answer timer runs out OR the user answers, SelectedClue will be reset to {} (and the AnswerForm will disappear)
    - if (timeLeft === 0 || answerSubmitted === true) dispatch(setSelectedClue({}))     // example of the logic that will be used in AnswerForm

The AnswerForm will dispatch an action to increment the score (depending on whether the user input matches the prop answer).




*/



import React, { useState } from "react";

import { selectGame } from "../features/game/gameSlice";
import { selectAllClues, setCluesState, selectSelectedClue } from "../features/game/cluesSlice";
import { useSelector, useDispatch } from "react-redux";

import { isClueSelected } from "../features/game/gameplaySlice";

import { Row, Col } from "react-bootstrap";

import Gameboard from '../features/gameboard/Gameboard';
import Scoreboard from "../features/gameboard/Scoreboard";

// import Response from '../features/gameboard/Response';
import AnswerForm from "../features/gameboard/AnswerForm";


export default function Game() {

    const selectedClue = useSelector(isClueSelected);

    return (
        <div>
            <header className="top-header">
                <h1>PREPARDY!</h1>
            </header>
            <Scoreboard />
            {(!selectedClue) ? <Gameboard /> : <AnswerForm />}
            
        </div>

    )
}
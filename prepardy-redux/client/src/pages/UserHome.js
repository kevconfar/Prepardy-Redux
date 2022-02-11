/*

This will display all the user statistics.

The components still need to be made.
Buzzer Time Ins
Correct to Incorrect Ratio
Topics and Categories the user frequently misses.
*/
import React from "react";

import SearchGames from "../features/welcome/SearchGames";
import { useSelector } from "react-redux";
import { selectIncorrectClues, selectCorrectClues } from "../features/game/cluesSlice";
import { answeredQuestions } from "../features/game/gameplaySlice";

export default function Profile() {

    const incorrect = useSelector(selectIncorrectClues);
    const correct = useSelector(selectCorrectClues);
    const answered = useSelector(answeredQuestions);
    
    return (
        <div >
            {/* <SearchGames /> */}
            <h1>PROFILE PAGE</h1>
            <br/>
            <h3>Your Correct Answers</h3>

            {correct.map((clue, i) => {
                return (
                    <li>{clue}</li>
                )
            })}
            <h3> You've answered {answered} Questions </h3>
            
        </div>
    )
}
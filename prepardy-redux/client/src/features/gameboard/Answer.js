import React, { useState } from 'react';
import PropTypes from 'prop-types';


import { incrementScore, decrementScore } from '../score/scoreSlice';
import { useDispatch } from 'react-redux';
import { addCorrectClue, addIncorrectClue } from '../game/cluesSlice';
import { incrementAnsweredQuestions } from '../game/gameplaySlice';


const Answer = (props) => {

    const dispatch = useDispatch();

    const [guess, setGuess] = useState("");
    const [submit, setSubmit] = useState(false);

    const [correct, setCorrect] = useState(false);

    const handleGuess = (e) => setGuess(e.target.value);
    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            setSubmit(true);
            dispatch(incrementAnsweredQuestions());
            props.setAnswered(true);
        }
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
                


            </div>
        )
    }


    // end just testing


    const checkAnswer = () => { // COMPARES USER GUESS TO CLUE.ANSWER
        var g = guess.toLowerCase();
        const ans = props.answer, a = props.answer.toLowerCase()

        const filt = (str) => {
            return str.replace(/^the\s|^an\s|^a\s/i, "");
        }
        const filtA = filt(a), filtG = filt(g);

        const arrA = filtA.split(" ").filter((x) => x !== "and").sort();
        const arrG = filtG.split(" ").filter((x) => x !== "and").sort();
        const lenA = arrA.length
        const lenG = arrG.length

        let correct = false;
        if (ans === guess || a === g || a === "the " + g || a === g + "s" || a === "a " + g || a === "an " + g) {
            correct = true;
        } else if (filtA === filtG || filtA + "s" === filtG || filtA === filtG + "s") {
            correct = true;
        } else if (arrA === arrG || arrA[lenA - 1] === arrG[lenG - 1]) {
            correct = true;
        } else {

            const nameRegx = /([A-Z]\w+|[A-Z]\.)\s?([A-Z]?\.)?\s?([A-Z]\w+)/
            if (nameRegx.test(ans)) {
                const match = ans.match(nameRegx);
                if (match[3] === arrG[lenG - 1] || match[3].toLowerCase() === arrG[lenG - 1].toLowerCase()) {
                    correct = true;
                }
            }
        }

        if (correct) {
            dispatch(incrementScore(props.value / 2));
            dispatch(addCorrectClue(props.clueId));
            return true;
        } else {
            dispatch(decrementScore(props.value / 2));
            dispatch(addIncorrectClue(props.clueId));
            return false;
        }
    }
 
    if (!submit) return (
        <div>
            <input type="text" onChange={handleGuess} onKeyUp={handleSubmit} />

        </div>
    )
    else return (
        <div>
            {checkAnswer() ? 
                <div>
                    <p>CORRECT!</p>
                </div> 
                : 
                <div>
                    <p>INCORRECT!</p>
                    <p>The correct answer is: {props.answer}</p>
                </div>}
        </div>
    )
}

Answer.propTypes = {
    answer: PropTypes.string,
    value: PropTypes.number,
    setAnswered: PropTypes.func,
    clueId: PropTypes.string
}

export default Answer;
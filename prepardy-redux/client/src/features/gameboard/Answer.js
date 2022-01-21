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

    // const checkAnswer = () => {

    //     let ans = props.answer, ges = guess;
    //     let a = ans.toLowerCase(), g = ges.toLowerCase();

    //     const filt = (str) => str.replace(/^the\s|^an\s|^a\s/i, "");

    //     let filtA, filtG;
    //     // let correct = false;
    //     if (a === g || a + "s" === g || a === g + "s") {
    //         // correct = true;
    //         setCorrect(true);
    //     } else {
    //         filtA = filt(a);
    //         filtG = filt(g);
    //         if (filtA === filtG || filtA === filtG + "s" || filtA + "s" === filtG) {
    //             correct = true;
    //         } else {
                // const nameRegx = /([A-Z]\w+|[A-Z]\.)\s?([A-Z]?\.)?\s?([A-Z]\w+)/
    //             const andRegx = /\w+\sand\w+/i

    //             const arrG = g.split(" ");
    //             const lenG = arrG.length();

                // if (nameRegx.test(ans)) {
                //     const match = ans.match(nameRegx);
                //     if (match[3] === arrG[lenG - 1] || match[3].toLowerCase() === arrG[lenG - 1].toLowerCase()) {
                //         correct = true;
                //     }
    //             } else if (andRegx.test(a)) {
    //                 if (a.split(" and ").sort() === g.split(" and ").sort()) {
    //                     correct = true;
    //                 }
    //             }
    //         }
    //     }
    //     if (correct === true) {
    //         dispatch(incrementScore(props.value));
    //         dispatch(addCorrectClue(props.clueId))
    //         return true;
    //     } else {
    //         dispatch(decrementScore(props.value));
    //         dispatch(addIncorrectClue(props.clueId));
    //         return false;
    //     }        
    // }
 
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
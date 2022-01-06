import React, { useState } from 'react';

import './answer.css';



function Answer() {


    const [ userAnswer, setUserAnswer ] = useState("");

    const answering = (char) => {
        const answer = `${userAnswer}${char}`
        setUserAnswer(answer);
    }

    return (
        <div>
            <input
                className="answer"
                value={userAnswer} 
                onChange={(e)=>setUserAnswer(e.target.value)}
            ></input>
            <row>
                {/* {[...userAnswer].map((char) => <h3>{char}</h3>)} */}
                {userAnswer}
            </row>


        </div>
    )
}

export default Answer;


/*
USER EXPERIENCE 

1. user selects a clue by value
2. a new screen pops up. it displays the clue, an optional timer (you can toggle it on and off), and WAITS for the user to start typing.
3. when the user starts typing, their answer pops up on the screen, not in a white form box, but each letter suspended over the background.
    - this minimizes clutter on the screen and creates a TRUER Jeopardy experience: the clue is read and the contestant JUST answers.
    - the reading and answering of the clue flow seamlessly. 



EXTRA FEATURE:   HINT MODE AND HINT OPTIONS

    - Imagine you are on a clue. You don't 100% KNOW the answer, BUT the answer is in your brain. Y
    - You can make a wild guess, OR with a little help YOU can find the answer and help your brain to quickly find as well as remember trivia
        *  _ _ _ _   _ _ _ _ _   // shows how many words and letters there are but not what letters
        *  T _ _ _ S  //  show specific letters in the word BUT not all the letters





*/
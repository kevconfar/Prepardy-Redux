import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectSelectedClue } from '../game/cluesSlice';
import { answeredQuestions } from '../game/gameplaySlice';
import { selectGame } from '../game/gameSlice';

import Categories from './Categories';
import FinalPrepardy from './FinalPrepardy';


const Gameboard = () => {

    const game = useSelector(selectGame);
    const { p, dp, fp } = game.rounds;

    // const [categories, setCategories] = useState(p);

    const answered = useSelector(answeredQuestions);

    // if (answered === 30) setCategories(dp);
    // if (answered === 60) setCategories(fp);

    if (answered < 30) return (
        <Categories categories={p} />
    )
    if (answered >= 30 && answered < 60) return (
        <Categories categories={dp} />
    )
    if (answered === 60) return (
        <FinalPrepardy category={fp[0]} />

    )


    // return (
    //     <div>
    //         <Categories categories={categories} />
    //     </div>
    // )
    
    // return (
    //     <div id={isClueSelected ? "question" : "gameboard"}>
    //         {isClueSelected ? (
    //             <div>
    //                 <AnswerForm
    //                     answer={selectedClue.answer}
    //                     value={selectedClue.value}
    //                     question={selectedClue.question}
    //                     dd={selectedClue.dd}
    //                 />
    //             </div>
    //         ) : (   
    //             <Categories
    //                 categories={categories}
    //             />
    //         )}
    //     </div>
    // );
}



export default Gameboard;



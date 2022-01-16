import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectSelectedClue, numberOfAnsweredClues } from '../game/cluesSlice';
import { selectGame } from '../game/gameSlice';

import Categories from './Categories';


const Gameboard = () => {

    const game = useSelector(selectGame);
    const { p, dp, fp } = game.rounds;

    const [categories, setCategories] = useState(p);

    const selectedClue = useSelector(selectSelectedClue);
    const isClueSelected = (selectedClue !== {});
    
    const answered = useSelector(numberOfAnsweredClues);

    if (answered === 30) setCategories(dp);
    if (answered === 60) setCategories(fp);

    return (
        <div>
            <Categories categories={categories} />
        </div>
    )
    
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
};



export default Gameboard;



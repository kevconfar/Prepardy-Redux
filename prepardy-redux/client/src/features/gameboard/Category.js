// COMPONENT RESPONSIBLE FOR CREATING CATEGORY COLUMNS
// EACH COLUMN WILL DISPLAY THE "CATEGORY NAME" AT THE TOP AND RENDER 5 CLUES WITH MATCHING CATEGORIES, ARRANGED BY VALUE ($ -> $$$).

import React from 'react';
import Clue from './Clue';

import { selectAllClues, selectIncorrectClues, selectCorrectClues, selectCluesByCategory } from '../game/cluesSlice';

import { useSelector } from 'react-redux';


const Category = ({title}) => {

    const clues = useSelector(selectAllClues);
    const incorrect = useSelector(selectIncorrectClues);
    const correct = useSelector(selectCorrectClues);

    const categoryClues = clues.filter((clue) => clue.category === title);

    return (
        <div className="category">
            <div className="column">
                <div className="header">{title}</div>
                <ul>
                    {categoryClues.map((clue) => {
                        return (
                            <li>
                                <Clue
                                    clueObj={clue}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );

    // return (
    //     <div className="category">
    //         <div className="column">
    //             <div className="header">{title}</div>
    //             <ul>
    //                 {categoryClues.map((clue) => {
    //                     return (
    //                         <li>
    //                             {incorrect.includes(clue) || correct.includes(clue) ? (
    //                                 <div className="clueValue"></div>
    //                             ) : (
    //                                 <Clue
    //                                     clueObj={clue}
    //                                 />
    //                             )}
    //                         </li>
    //                     );
    //                 })}
    //             </ul>
    //         </div>
    //     </div>
    // );
};

export default Category;


// Category.propTypes = {
//     title: PropTypes.string
// };
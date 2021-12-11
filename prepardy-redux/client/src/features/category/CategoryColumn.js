import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Clue } from '../clue.js';



/*  
    PROPS = CategoryAndClues Object 

    {
        name: "CATEGORY TITLE",
        clues: [ ...clueStrings ]
    }

*/

// 6 Category Columns will be rendered
// CategoryColumn will be imported to GameBoard, and mapped out with the proper data

export const CategoryColumn = (props) => {

    const { category, clues } = props; // destructured the props object, assigning the properties to easily-accessible variables

    return (

        <div className="category">
            <div className="column">





            </div>

            



        </div>
    )


    }





    


}


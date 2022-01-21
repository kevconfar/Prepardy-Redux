import React from "react";
import PropTypes from "prop-types";

import { setSelectedClue, selectSelectedClue } from "../game/cluesSlice";
// import { selectAllClues } from "../game/cluesSlice";
import { useDispatch, useSelector } from "react-redux";

import { setIsClueSelected } from '../game/gameplaySlice';
import { selectCorrectClues, selectIncorrectClues } from "../game/cluesSlice";

const Clue = ({clueObj}) => { 

    const dispatch = useDispatch();
    const incorrect = useSelector(selectIncorrectClues);
    const correct = useSelector(selectCorrectClues);

    const handleClick = () => {
        // alert(`${clueObj.question}`);

        dispatch(setSelectedClue(clueObj));
        dispatch(setIsClueSelected());
        // clueObj.played = true

    }

    return ( 
        <div className="clue"> 
            {/* {!props.selected && !props.answered && ( */}
                <div
                    // onClick={() => setOpen(true)}
                    onClick={handleClick}
                    className="normal-card"
                    layoutId="expandable-card"
                >
                    <h1 layoutId="expandable-card-h" className="clueValue">
                        ${clueObj.value ? clueObj.value : 1000}
                    </h1>
                </div>
            {/* )} */}
        </div>

    );
};

export default Clue;

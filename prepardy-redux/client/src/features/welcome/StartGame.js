import React from 'react';

import { Link } from 'react-router-dom';
 
import { useDispatch, useSelector } from 'react-redux';
import { selectGame } from '../game/gameSlice';
import { setCluesState } from '../game/cluesSlice';

import {
    Button
} from "react-bootstrap";

function StartGame() {

    const dispatch = useDispatch();

    
    const game = useSelector(selectGame);
    const gameIsSelected = (game === {}); // True IF a game has been selected, else False

    const setClues = () => dispatch(setCluesState({gameID: game.game.gameID}));

    return (

        <Link to="/game" >
            <Button 
                disabled={gameIsSelected}
                onClick={() => setClues()}
            >  
            START   
            </Button>
        </Link>
    )

}

export default StartGame;


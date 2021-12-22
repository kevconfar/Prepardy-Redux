import React from "react";

import { setSelectedGame } from "../game/gameSlice";
import { useDispatch } from "react-redux";

import {
    ListGroup,
} from "react-bootstrap";


const GameViewer = (game) => {


    const { p, dp, fp } = game.rounds;
    const highScore = game.scores[2];
    const date = game.date;

    const dispatch = useDispatch();
    dispatch(setSelectedGame(game)); // the Game being viewed will be set as the SelectedGame

    return (
        <div className='game-viewer'>
            <h1>{date}</h1>
            <h3>WINNING SCORE {highScore}</h3>
            {/* <h3></h3> */}
            <h3>CATEGORIES</h3>
            <ListGroup className='categories-viewer'>
                {[...p, ...dp, ...fp].map(category => <ListGroup.Item>{category}</ListGroup.Item>)}
            </ListGroup>
        </div>
    )

}

export default GameViewer;

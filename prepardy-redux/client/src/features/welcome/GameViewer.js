import React from "react";

import { setSelectedGame } from "../game/gameSlice";
import { useDispatch } from "react-redux";

import {
    ListGroup,
    Container
} from "react-bootstrap";


function GameViewer(game) {


    const { p, dp, fp } = game.game.rounds;
    const highScore = game.game.scores[2];
    const date = game.game.date;

    // const dispatch = useDispatch();
    // dispatch(setSelectedGame(game)); // the Game being viewed will be set as the SelectedGame

    return (
        <div className='game-viewer'>
            <Container>
                <h1>{date}</h1>
                <h3>WINNING SCORE {highScore}</h3>
                {/* <h3></h3> */}
                <h3>CATEGORIES</h3>
                <ListGroup className='categories-viewer'>
                    {[...p, ...dp, ...fp].map(category => <ListGroup.Item>{category}</ListGroup.Item>)}
                </ListGroup>
            </Container>
        </div>
    )

}

export default GameViewer;

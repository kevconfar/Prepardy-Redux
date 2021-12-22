import React, { useState, useEffect } from 'react';
import {
    Container
} from "react-bootstrap";
import StartGame from "../features/welcome/StartGame";
import GameBrowser from "../features/welcome/GameBrowser";

import axios from 'axios';


import { setSelectedGame } from '../features/game/gameSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { selectAllGames } from '../features/game/gameSlice';
/* 

We will import <GameBrowser /> and <StartGame />.

I want to create a search function that allows that allows the user to change the browseGames state to games matching their search.
e.g. If you want type "Roman", it pulls up all Games with "Roman" in their Categories.
This might be a feature to integrate later.

*/
function Welcome() {

    return (
        <div>
            <Container>
                <div id="home" className="content">
                    <span style={{ fontSize: 60 }}>
                        <h1 className="d-flex justify-content-center">Welcome to PREPARDY!</h1>
                    </span>
                </div>
                <GameBrowser />
                <StartGame />
                
            </Container>
        </div>
    )
}

export default Welcome;

    
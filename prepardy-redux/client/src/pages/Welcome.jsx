import React from 'react';
import {
    Container
} from "react-bootstrap";
import { StartGame } from "../features/welcome/StartGame";
import { GameBrowser } from "../features/welcome/GameBrowser";
/* 

We will import <GameBrowser /> and <StartGame />.

I want to create a search function that allows that allows the user to change the browseGames state to games matching their search.
e.g. If you want type "Roman", it pulls up all Games with "Roman" in their Categories.
This might be a feature to integrate later.

*/
export default function Home() {
    return (
        <>
        <Container>
            <div id="home" className="content">
                <span style={{ fontSize: 60 }}>
                    <h1 className="d-flex justify-content-center">Welcome to PREPARDY!</h1>
                </span>
                <GameBrowser />
                <StartGame />
                
            </div>
            
        </Container>
        </>
    )
}
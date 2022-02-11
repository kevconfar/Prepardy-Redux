import React, {useState} from 'react';
import {
    Container,
    Carousel
} from "react-bootstrap";
import { useSelector } from 'react-redux';

import StartGame from "../features/welcome/StartGame";
// import GameBrowser from "../features/welcome/GameBrowser";
import { selectAllGames } from '../features/game/gameSlice';
import GameViewer from '../features/welcome/GameViewer';
import SearchGames from '../features/welcome/SearchGames';


export default function Welcome() {

    const games = useSelector(selectAllGames);
    


    return (
        <div>
            {/* {alert("already logged in!")} */}
            <Container>
                <div id="home" className="content">
                    <span style={{ fontSize: 60 }}>
                        <h1 className="d-flex justify-content-center">Welcome to PREPARDY!</h1>
                    </span>
                </div>
                <Container >
                {/* <SearchGames/> */}
                <br/>
                {/* <Carousel>
                    <Carousel.Item>{games.map(game => <GameViewer />)}</Carousel.Item>    
                </Carousel> */}
                <div className="d-flex justify-content-center">
                    
                <StartGame />
                    </div>
                
                </Container>
                
            </Container>
        </div>
    )

    // return (
    //     <div>
    //         <GameBrowser />
    //         <h1>WELCOME PAGE! WELCOME PAGE!</h1>
    //     </div>
    // )
}

    
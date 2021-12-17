import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { browseGames, setSelectedCategories, setSelectedGame } from "../game/gameSlice";

import { GameViewer } from "./GameViewer";
import { StartGame } from "./StartGame";

import { Carousel } from "react-bootstrap";

export const GameBrowser = () => {

    const games = useSelector(browseGames);

    return (
        <div className="games-browser" >
            {/* {games.map(game => <GameViewer game={game}></GameViewer>)} */}
            <Carousel>
                {games.map(game => {
                    return (
                        <div>
                            <Carousel.Item>
                                <h1>Game Viewer</h1>
                                {/* <GameViewer game={game} /> */}
                            </Carousel.Item>
                            <StartGame game={game} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )


}







    /* <Carousel.Item>
        <Carousel.Caption>
        
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel> */
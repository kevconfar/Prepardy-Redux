// import { Carousel} from "bootstrap";
import React from "react";

import { useState, useEffect } from "react";
// import axios from "axios";

// // const axios = require('axios');

import { Form, Carousel, Container } from "react-bootstrap";
 
import { useSelector, useDispatch } from "react-redux";
import { selectGame, getNewGames, selectAllGames } from "../features/game/gameSlice";

import TestGameViewer from "../features/welcome/TestGameViewer";


export default function Tester() {


    const [searchType, setSearchType] = useState("season");
    const [searchTerm, setSearchTerm] = useState("30")

    const dispatch = useDispatch();
    const games = useSelector(selectAllGames);

    const handleClick = () => {
        dispatch(getNewGames({searchType, searchTerm: "27"}))
    }

    const length = games.length
   

    return (
        <Container>
            <br></br>
            <h1 className="d-flex justify-content-center">Welcome to PREPARDY!</h1>
            <br></br><br></br>
    
            <Carousel className="d-flex h-100 align-items-center justify-content-center">
                {/* {games.map(x => <Carousel.Item><Carousel.Caption><TestGameViewer game={x} /></Carousel.Caption></Carousel.Item>)} */}
                {/* {games.map(x => <TestGameViewer game={x} />)} */}
                    {games.map(x => {
                        return (
                            <Carousel.Item>
                                <TestGameViewer game={x} />
                                <br></br><br></br>
                            </Carousel.Item>

                        )
                    })}
            </Carousel>
            {/* <ul>
                {games.map(x => <li><TestGameViewer game={x} /></li>)}
            </ul>
      */}

            <br></br><br></br><br></br>
            <button onClick={handleClick}>CLICK</button>
        </Container>
    )



}


import React from "react";
import { useSelector } from "react-redux";

import { selectAllGames } from "../game/gameSlice";

import GameViewer from "./GameViewer";
import { Carousel } from "react-bootstrap";

function GameBrowser() {

    const games = useSelector(selectAllGames);


    return (
        <div className="games-browser" >

                {/* {games.map(game => <Carousel.Item><GameViewer game={game} /></Carousel.Item>)} */}
                {games.map(game => {
                    return (
                            <Carousel.Item>
                                <GameViewer game={game} />
                            </Carousel.Item>
                    );
                })}
        </div>
    )
}

export default GameBrowser;






//     /* <Carousel.Item>
//         <Carousel.Caption>
        
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
// </Carousel> */
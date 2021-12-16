import React from 'react';

import { Link } from 'react-router-dom';
 
import { useDispatch, useSelector } from 'react-redux';
import { selectedGame } from '../game/gameSlice';
import { setCluesState } from '../game/cluesSlice';

export const StartGame = () => {

    const dispatch = useDispatch();

    const setClues = () => dispatch(setCluesState(game.gameId)); // Async reducer might be a problem ... 
    
    const game = useSelector(selectedGame);
    const gameIsSelected = (selectedGame !== {}); // True IF a game has been selected, else False

    return (

        <Link to="gameboard-url" >
            <Button 
                disabled={gameIsSelected}
                onClick={() => setClues(game.gameId)}
            >  
            START   
            </Button>
        </Link>
    )

}

// <Carousel>
//     <Carousel.Item>
//         <Carousel.Caption>
//             <h3>{game.date}</h3>
//             <p>Highest Score: {game.scores[2]}</p>
//             <p>Game Data: {game.date}</p>

//             <Card style={{ width: "10rem" }}>
//                 <Card.Header>YOUR</Card.Header>
//                 <ListGroup variant="flush">
//                     {browseGames.each}
//                     <ListGroup.Item> CATEGORY #1</ListGroup.Item>
//                     <ListGroup.Item> CATEGORY #2</ListGroup.Item>
//                     <ListGroup.Item> CATEGORY #3 </ListGroup.Item>
//                     <ListGroup.Item> CATEGORY #4 </ListGroup.Item>
//                     <ListGroup.Item> CATEGORY #5 </ListGroup.Item>
//                 </ListGroup>
//             </Card>
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
// </Carousel>
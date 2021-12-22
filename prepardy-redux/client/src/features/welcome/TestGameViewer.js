import React from 'react';

import { Container, Col, Row, Carousel} from 'react-bootstrap';

function TestGameViewer(game) {

    const { season, date, gameID, scores, rounds } = game.game
    const { p, dp, fp } = rounds

    // const output = (game) => {

    //     const { season, date, gameID, scores, rounds } = game.game
    //     const { p, dp, fp } = rounds

    //     return (
    //         <Carousel.Item>
    //             <Carousel.Caption>
    //                 <h3>Season {season}, Game {gameID}</h3>
    //                 <p>Contestant Scores: ${scores[0]}, ${scores[1]}, ${scores[2]}</p>
    //                 <Row>
    //                     <Col>
    //                         <ul>{p.map(category => <li key={category}>{category}</li>)}</ul>
    //                     </Col>
    //                     <Col>
    //                         <ul>{dp.map(category => <li key={category}>{category}</li>)}</ul>
    //                     </Col>
    //                 </Row>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //     )

    // }

    // return (
    //     <Container>
    //         <Carousel>
    //             {games.map(x => output(x))}
    //         </Carousel>
    //     </Container>
        
    // )


    return (

        <Container>
            <h3>Season {season}, Game {gameID}, {date}</h3>
        
            <h4>Contestant Scores</h4> 
            <p>${scores[0]}, ${scores[1]}, ${scores[2]}</p>
            <h4 className="categoryViewLabel">CATEGORIES</h4>
            <Row>
                <Col md="auto">
                    <ul>{p.map(category => <li className="clueValue" key={category}>{category}</li>)}</ul>
                </Col>
                <Col md="auto">
                    <ul>{dp.map(category => <li className="clueValue" key={category}>{category}</li>)}</ul>
                </Col>
            </Row>
        </Container>
    )



}

export default TestGameViewer;
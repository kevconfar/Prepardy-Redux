import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { browseGames, setSelectedGame, setSelectedCategories } from "../game/gameSlice";
import { setClues } from "../game/cluesSlice";

import {
    Col,
    Row,
    Form,
    Container,
    Button,
    Card,
    ListGroup,
    Accordion
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {

    const games = useSelector(browseGames); // assigns the 15 randomly fetched games from initialState in gameSlice
    const dispatch = useDispatch(); // will be used with setClues, setSelectedGame, and setSelectedCategories

    return (
        <Container>
            <div id="home" className="content">
                <span style={{ fontSize: 60 }}>
                    <h1>Welcome to PREPARDY!</h1>
                </span>
                <div className="whole">
                    <Container>
                        <div className="settings">
                            <span style={{ fontSize: 25 }}>Quiz Settings</span>
                        </div>
                        <Accordion>
                            <Accordion.Toggle
                                as={Button}
                                className="button"
                                variant="primary"
                                size="lg"
                                eventKey="0"
                            >
                                CUSTOM
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Col>
                                    <Card>
                                        <Card.Header className="text-dark">
                                            GAME OPTIONS
                                        </Card.Header>
                                        <Form.Control
                                            on
                                            variant="primary"
                                            type="text"
                                            placeholder="SEASON"
                                        />
                                    </Card>
                                </Col>
                            </Accordion.Collapse>

                            <Accordion.Toggle
                                as={Button}
                                variant="primary"
                                size="lg"
                                eventKey="1"
                            >
                                RANDOM
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Col>
                                    <Card>
                                        <Row>
                                            <Card.Header className="text-dark">
                                                YOUR CATEGORIES
                                            </Card.Header>

                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item> CATEGORY #1</ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #2</ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #3 </ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #4 </ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #5 </ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item> CATEGORY #6</ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #7</ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #8</ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #9 </ListGroup.Item>
                                                    <ListGroup.Item> CATEGORY #10 </ListGroup.Item>
                                                </ListGroup>
                                            </Col>

                                        </Row>
                                    </Card>
                                </Col>
                            </Accordion.Collapse>
                        </Accordion>

                        <Button
                            className="button"
                            border="black"
                            variant="primary"
                            size="lg"
                            href="/game"
                        >
                            Start Quiz
                        </Button>
                    </Container>
                </div>
            </div>
        </Container>
    );
}
export default Welcome;

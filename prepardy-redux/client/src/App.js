import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import UserHome from "./pages/UserHome";

import Tester from "./pages/Tester.js"; // THIS IS THE TEST FILE I CREATED TO FIX THE MONGO --> REDUX FLOW
import GameTester from "./pages/GameTester.js";

import Answer from "./features/answer/Answer.js";

import {
  Col,
  Row,
  Container
  
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Container className="d-flex justify-content-center">
        <nav >
          <Row>
            <Col>
              <Link to="/">Home</Link>
            </Col>
            <Col>
              <Link to="/game">Game</Link>
            </Col>
            <Col>
              <Link to="/profile">Profile</Link>
            </Col>
          </Row>  
        </nav>
        </Container>

        <Routes>
          <Route path="/tester" element={<Tester/>} /> 
          <Route path="/game" element={<Game/>} />
          <Route path="/profile" element={<UserHome/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/gametester" element={<GameTester />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

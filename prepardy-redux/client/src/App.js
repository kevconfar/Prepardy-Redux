import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Gameboard from "./pages/Gameboard";
import UserHome from "./pages/UserHome";

import Tester from "./pages/Tester.js"; // THIS IS THE TEST FILE I CREATED TO FIX THE MONGO --> REDUX FLOW

import FetchGames from "./features/mongoFetch/fetchGames";

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
          <Route path="/game" element={<Gameboard/>} />
          <Route path="/profile" element={<UserHome/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/testgames" element={<FetchGames />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

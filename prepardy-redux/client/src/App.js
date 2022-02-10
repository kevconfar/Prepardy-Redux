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
          <Route path="/game" element={<Game/>} />
          <Route path="/profile" element={<UserHome/>} />
          <Route path="/" element={<Welcome/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

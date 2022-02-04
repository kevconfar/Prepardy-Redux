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
// import Login from "./features/welcome/Login";
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
              <Link to="/">Welcome</Link>
            </Col>
            <Col>
              <Link to="/game">Game</Link>
            </Col>
            <Col>
              <Link to="/profile">Profile</Link>
            </Col>
            {/* <Col>
              <Link to="/login">Log In</Link>
            </Col> */}
          </Row>  
        </nav>
        </Container>

        <Routes>
          <Route path="/game" element={<Game/>} />
          <Route path="/profile" element={<UserHome/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/answer" element={<Answer />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

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

import Answer from "./features/answer/Answer.js";

import Login from './features/welcome/Login';
import Logout from "./features/welcome/Logout";
import CreateAccount from './features/user/CreateAccount';
import useToken from "./app/useToken";


import {
  Col,
  Row,
  Container
  
} from "react-bootstrap";

function App() {

  const {token, setToken} = useToken();

  return (
    <Router>
      <div>
        <Container >
        <nav className="d-flex justify-content-center">
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
              {!token ? <Login setToken={setToken} /> : <Logout setToken={setToken}/>}
            </Col> */}
          </Row>  
        </nav>
        <div className="d-flex justify-content-end">
              {!token ? <Login setToken={setToken} /> : <Logout setToken={setToken}/>}
              </div>
        </Container>

        <Routes>
          <Route path="/game" element={<Game/>} />
          <Route path="/profile" element={<UserHome/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/create-account" element={<CreateAccount/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

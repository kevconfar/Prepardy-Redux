import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";

async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({setToken}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>

            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>
                  <p>Username</p>
                    <Form.Control type="text" onChange={e => setUserName(e.target.value)}/>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                <p>Password</p>
                  <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
                </Form.Label>
              </Form.Group>
            
              <Button type="submit" onClick={handleClose}>Submit</Button>
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Create Account
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login;
import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function CreateAccount({setNewUser}) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = e => {
        e.preventDefault();
        const newUser = ({
          name,
          email,
          username,
          password
        });
        setNewUser(newUser, alert('User Created!'));
    }
    

    return (
        <div id='createAccount' >
            <h1 className="d-flex justify-content-center">Create Account</h1>
            <Container className="d-flex justify-content-center">
                
            <Form className="form" onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Label>
                  <p>First and Last Name</p>
                    <Form.Control type="text" onChange={e => setName(e.target.value)}/>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <p>Email</p>
                    <Form.Control type="text" onChange={e => setEmail(e.target.value)}/>
                </Form.Label>
              </Form.Group>
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
            
              <Button type="submit">Submit</Button>
            
            </Form>
            </Container>
        </div>
    )
};
import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Welcome from '../../pages/Welcome';


async function registerUser(credentials) {
    return fetch('http://localhost:3000/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   };

   const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

export default function CreateAccount({setNewUser}) {

    // const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [successful, setSuccessful] = useState(false);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };


    const handleSubmit = async e => {
        e.preventDefault();
        setSuccessful(true);
        const newUser = await registerUser({
          
          email,
          username,
          password
        });
        setNewUser(newUser, alert('User Created!')).then(() => {
            setSuccessful(true);
          });
    }

    if (successful) {
        return <Welcome />
    }
    

    return (
        <div id='createAccount' >
            <h1 className="d-flex justify-content-center">Create Account</h1>
            <Container className="d-flex justify-content-center">
                
            <Form className="form" onSubmit={handleSubmit} >
               
              <Form.Group>
                <Form.Label>
                  <p>Email</p>
                    <Form.Control type="text" value={email} onChange={onChangeEmail} validations={[required, validEmail]}/>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <p>Username</p>
                    <Form.Control type="text" value={username} onChange={onChangeUsername} validations={[required, vusername]}/>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                <p>Password</p>
                  <Form.Control type="password" value={password} onChange={onChangePassword} validations={[required, vpassword]}/>
                </Form.Label>
              </Form.Group>
            
              <Button type="submit">Submit</Button>
            
            </Form>
            </Container>
        </div>
    )
};
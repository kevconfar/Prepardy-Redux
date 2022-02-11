import React from "react";
import { Button } from "react-bootstrap";



function Logout({ setToken}) {
    
    
    const removeToken = () => { 
        localStorage.removeItem("token");
        setToken(null, alert("logged out!"));
      }
      
      
    
      return (
        <div>
          
          <Button variant="primary" onClick={removeToken}>
            Logout
          </Button>
          </div>

      )
};

export default Logout;
import React, {useState} from 'react';
import styled from 'styled-components';


const StyledLetter = styled.ul`
  display: inline-block;
  padding: 15px;
  button {
    display: inline-block;
    text-transform: uppercase;
    width: 50px;
    
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  button.letter {
    border-bottom: 3px solid black;
    margin-right: 15px;
    font-weight: bold;
    font-size: 26px;
    span {
      visibility: hidden;
    }
    span.visible {
      visibility: visible;
    }

  }

`;

const Letter = (props) => {

    const [visible, setVisible] = useState(false);
    const handleVisibility = (e) => setVisible(true);
    
   

    return (
       <StyledLetter>
            <button onClick={handleVisibility} key={props.index} letter="_" className="letter">
              {!visible ? "_" : <span className="visible">{props.letter}</span>}
            </button>
        </StyledLetter>
    )
};

export default Letter;
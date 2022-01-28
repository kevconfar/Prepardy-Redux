import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedClue } from '../game/cluesSlice';
import Letter from './Letters';
// import styled from 'styled-components';

// const Section = styled.section`padding: 20px 0 0;`;
// const StyledLetter = styled.ul`
//   display: inline-block;
//   padding: 15px;
//   button {
//     display: inline-block;
//     text-transform: uppercase;
//     width: 50px;
    
//     margin-bottom: 15px;
//     box-sizing: border-box;
//   }
//   button.letter {
//     border-bottom: 3px solid black;
//     margin-right: 15px;
//     font-weight: bold;
//     font-size: 26px;
//     span {
//       visibility: hidden;
//     }
//     span.visible {
//       visibility: visible;
//     }

//   }

// `;

const Hint = () => {

    const clue = useSelector(selectSelectedClue);

    const [hint] = useState(clue.answer);
    const [show, toggleShow] = useState(false);

    return (
        <div>
            <button onClick={() => toggleShow(!show)}>Get a Hint {show}</button> 
            {show && <div>
              {hint.split('').map((element, index) => {
                let letter = element;
                return (
                  <Letter key={index} letter={letter} visible={true}/>
                )
              })}
             
            
    </div>}
        </div>
        
        
    );

}
 

export default Hint;
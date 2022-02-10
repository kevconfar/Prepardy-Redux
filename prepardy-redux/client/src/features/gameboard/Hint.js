import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedClue } from '../game/cluesSlice';
import Letter from './Letters';

<<<<<<< HEAD
const Section = styled.section`padding: 20px 0 0;`;
const StyledLetter = styled.ul`
  display: inline-block;
  padding: 15px;
  li {
    display: inline-block;
    text-transform: uppercase;
    width: 50px;
    
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  li.letter {
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
=======
>>>>>>> e6bf84360b45edc78a7f63eb736ad9cb329fc3ac

const Hint = () => {

    const clue = useSelector(selectSelectedClue);

    const [hint] = useState(clue.answer);
    const [show, toggleShow] = useState(false);

<<<<<<< HEAD
    const letters = hint.split('').map((letter, i) => (
        <StyledLetter key={i}>
            <li key={i} letter="_" className="letter">
                <span>{letter}</span>
            </li>
        </StyledLetter>
    ));
=======
    
    
>>>>>>> e6bf84360b45edc78a7f63eb736ad9cb329fc3ac

    return (
        <div>
          
            <button onClick={() => toggleShow(!show)}>Get a Hint</button> 
            {show && <div>
              
              {hint.split('').map((letter, index) => {
                return (
                  <Letter key={index} letter={letter} />
                )
              })}
             
            
    </div>}
        </div>
        
        
<<<<<<< HEAD
    )

};
=======
    );

}
>>>>>>> e6bf84360b45edc78a7f63eb736ad9cb329fc3ac
 

export default Hint;
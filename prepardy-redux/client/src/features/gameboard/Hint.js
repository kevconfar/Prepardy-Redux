import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedClue } from '../game/cluesSlice';
import Letter from './Letters';


const Hint = () => {

    const clue = useSelector(selectSelectedClue);

    const [hint] = useState(clue.answer);
    const [show, toggleShow] = useState(false);

    
    

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
        
        
    );

}
 

export default Hint;
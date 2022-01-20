import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedClue } from '../game/cluesSlice';
import styled from 'styled-components';

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
    &[data-red='true'] span {
      visibility: visible;
      color: black;
    }
  }

`;

const Hint = () => {

    const clue = useSelector(selectSelectedClue);

    const [hint, setHint] = useState(clue.answer);
    const [show, toggleShow] = useState(false);

    const letters = hint.split('').map((letter, i) => (
        <StyledLetter key={i}>
    <li key={i} letter="_" className="letter">
        <span>{letter}</span>
    </li>
    </StyledLetter>
));

    return (
        <div>
            <button onClick={() => toggleShow(!show)}>Get a Hint {show ? '' : ''}</button> 
            {show && <div>
            {letters}
    </div>}
        </div>
        
        
    )
//     // const dispatch = useDispatch();
//     const words = clue.answer.split('');
//     const letters = words.map((word, i) => (
//         <StyledTitle key={i}>
//       {word.map((letter, i) => (
//         <li
//           key={i}
//           className="titleLetter"
//           >
//               <span>{letter}</span>
//           </li>
//     ))}
//     <li>&nbsp;</li>
//     </StyledTitle>
//   ));

//   return <Section className="title">{letters}</Section>;
};
    

    
    //     const arr = clue.answer.split('');
    //     const output = [];

    //     const line = "___ ";
    //     arr.each((x) => output.push(line * x.length));
        
    //     return <p>hint here{output.join('  ')}</p>;
    // }
    // const handleAssist = () => (assist) ? setAssist(false) : setAssist(true);

//     if (assist === true) {
//         return(
//             <div>
//                 <h1>{assistMode}</h1>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <button value={assistMode} onClick={() => setAssist(true)}>Get a Hint</button>
//             {/* <button onClick={handleAssist}>Get A Hint</button> */}
//         </div>
//     );
// }

export default Hint;
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { incrementScore, decrementScore } from '../score/scoreSlice';

import { selectSelectedClue } from '../game/cluesSlice';


const DailyDouble = (question) => {

    const [bet, setBet] = useState(0);
    const [placedBet, setPlacedBet] = useState(false);
    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setPlacedBet(true);
    // }
    const handleChange = (e) => {
        e.preventDefault();
        setBet(e.target.value);
    }

    const dailyDouble = () => {
        return (
            <div className="daily-double">
                <h1>DAILY DOUBLE!</h1>
                <h3>How much would you like to wager?</h3>
                <input type="number" value={bet} onChange={handleChange} />
                <input type="submit" onSubmit={() => setPlacedBet(true)} />
            </div>
        );
    }


    return (
        <div>
            {!placedBet ? dailyDouble : <div>{question}</div>}
        </div>
    );

    // if (placedBet === false) return (

    //     // <div className="daily-double">
    //     //     <h1>DAILY DOUBLE!</h1>
    //     //     <h3>How much would you like to wager?</h3>
    //     //     <input type="number" value={bet} onChange={handleChange} />
    //     //     <input type="submit" onSubmit={handleSubmit} />
    //     // </div>
    // );
    // else if (placedBet) return (

    //     <div>
    //         {selectedClue.question}
    //         <Response answer={selectedClue.answer} value={bet.parseInt()} />




    //     </div>
    // )




    
}

export default DailyDouble;
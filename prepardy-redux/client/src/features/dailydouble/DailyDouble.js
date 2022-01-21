import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectScore } from '../score/scoreSlice';
import { selectRound } from '../game/gameplaySlice';

export const DailyDouble = () => {

    const [bet, setBet] = useState(0);
    const [submit, setSubmit] = useState(false);

    const defaults = { "p" : 1000, "dp" : 2000 }
    const bank = useSelector(selectScore);
    const round = useSelector(selectRound);

    const maxBet =  (defaults[round] > bank) ? defaults[round] : bank;

    const handleBet = (e) => setBet(e.target.value);
    const submitBet = (e) => {
        if (e.key === "Enter") setSubmit(true);
    }

    return (
        <div className="daily-double">
            <div className="header">
                DAILY DOUBLE!
            </div>
            <h2>You may wager up to ${maxBet}.</h2>
            <input onChange={handleBet} placeholder="Place Wager" onSubmit={submitBet} type="number" max={maxBet} />

        </div>
    )

}


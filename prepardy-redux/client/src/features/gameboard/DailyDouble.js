import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectRound } from '../game/gameplaySlice';
import { selectScore } from '../score/scoreSlice';

const DailyDouble = (props) => {

    const defaults = {"p" : 1000, "dp" : 2000}
    const score = useSelector(selectScore);
    const round = useSelector(selectRound);

    let maxBet;
    (score > defaults[round]) ? maxBet = score : maxBet = defaults[round];

    return (
        <div className="daily-double">
            <header className="top-header">
                <h1>DOUBLE PREPARDY!</h1>
            </header>   
            <p id="question">How much do you want to wager? You may bet up to ${maxBet}</p>
            <input type="number" onChange={props.handleBet} max={maxBet}/>
        </div>
    )


}

DailyDouble.propTypes = {
    handleBet: PropTypes.func
}

export default DailyDouble;
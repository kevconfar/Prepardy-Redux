import React from 'react';

import Gameboard from '../features/gameboard/Gameboard';
import Categories from '../features/gameboard/Categories';
import Category from '../features/gameboard/Category';

import { selectGame } from '../features/game/gameSlice';

import { useSelector } from 'react-redux';

const GameTester = () => {

    const game = useSelector(selectGame);
    const {p, dp, fp} = game.rounds;

    return (
        <div>
            {p.map((cat) => <Category title={cat} />)}

            {/* <ul>
                {p.map((cat) => <li>{cat}</li>)}
            </ul> */}
            {/* <Categories categories={p} /> */}

        </div>
    )
}

export default GameTester;
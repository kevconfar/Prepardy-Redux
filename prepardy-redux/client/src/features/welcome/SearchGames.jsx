import React from 'react';

import { useDispatch } from 'react-redux';
import { changeBrowseGames } from '../game/gameSlice';

const SearchGames = () => {

    
    /* 
    allows users to search through the database for clues by category, season, etc.
    
    ROUTES TO USE: 
        -  `localhost:3000/games/category/${searchTerm}`
        -  `localhost:3000/games/season/${searchTerm}`

    */

    const dispatch = useDispatch();

    return (
        <div className="search-games">
            
            <FloatingLabel
                controlId="floatingInput"
                label="Search By Category"
                className="mb-3"
            >
                <Form.Control type="string" placeholder="History" onChange={ () => } />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Search By Season">
                <Form.Control type="string" placeholder="37" />
            </FloatingLabel>
       


        </div>
    )
}
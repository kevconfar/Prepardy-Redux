import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { getNewGames } from '../game/gameSlice';

import { Button, Col, Row, Container } from 'react-bootstrap';


function SearchGames() {

    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("");

    const dispatch = useDispatch();    

    const handleSearchType = (type) => {
        setSearchType(type)
    }
    const handleSubmit = () => {
        dispatch(getNewGames({searchTerm: search, searchType: searchType}))
    }

    return (
        <Container>
            <div className="search-games">
                <Col>
                        <Button onClick={() => handleSearchType("season")}>SEASON</Button>
                        <Button onClick={() => handleSearchType("category")}>CATEGORY</Button>
                    <input onChange={(e) => setSearch(e.target.value)} />
                    <br></br><br></br>
                    <Button onClick={handleSubmit}>SEARCH</Button>
                </Col>            
            </div>
        </Container>
    )
}

export default SearchGames;
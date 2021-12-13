







/*

terminiology:
    - GamesDB : represents the Games Collection in the MongoDB
    - CluesDB : represents the Clues Collection in MongoDB
    - CluesState : name for the chunk of state in the store with all the fetched Clue docs
    - GamesState : a slice of the state that stores the fetched Game doc

-- NOTE: two separate states (each with multiple slices) will be used to create the game. GamesState (managed with GamesReducer) and CluesState (managed with CluesReducer).

1.  In the <WelcomePage>, the user browses through the GamesDB, selects one, and the fetched Game doc becomes the GameState.

    EX:   const GameState = { gameID: 6969, caegories: [ ...categoryTitles ], played: false, scores: [ ...scores ] }

2. the gameID from GameState is used to fetch all clues and put them in the store.

3. clicking "START" (or whatever button/etc. is used to launch the game) opens the <GameBoard>, accessing the CluesState from the store and feeding it to all the game components.


    EX:     const ClueState = {
                prepardy: {
                    1: { name: "Category Name", clues: [ ...clues ] },
                    2: { name: "Category Name", clues: [ ...clues ] },
                    3: { name: "Category Name", clues: [ ...clues ] },
                    4: { name: "Category Name", clues: [ ...clues ] },
                    5: { name: "Category Name", clues: [ ...clues ] },
                    6: { name: "Category Name", clues: [ ...clues ] }
                }
                doublePrepardy: {
                    1: { name: "Category Name", clues: [ ...clues ] },
                    2: { name: "Category Name", clues: [ ...clues ] },
                    3: { name: "Category Name", clues: [ ...clues ] },
                    4: { name: "Category Name", clues: [ ...clues ] },
                    5: { name: "Category Name", clues: [ ...clues ] },
                    6: { name: "Category Name", clues: [ ...clues ] }
                }
                finalPrepardy: { name: "Category Name", clue: "This is the clue string." }     
            }

    
4.  The board will be populated by prepardy or doublePrepardy with some simple logic.

    - EX:   if ( timeElapsed === 30 || questionsAnswered === 30 ) {
                startDoublePrepardy() 
            }


<Category>: maps out a column of ClueCards beneath a Category Title placard.

        ____________________
        | AMERICAN HISTORY |     <------- Categorys are fed from GamesState.categories (an ORDERED array of categories).
        --------------------              The indexes w
        |                  |
        |       $200       |     <------- selecting a <ClueCard> will either:
        |                  |                a. send the string from <ClueCard> to the <ClueDisplay>
        --------------------                b. pass the Clue.ID from <ClueCard> to <ClueDisplay>
        |       $400       |
        |                  |
        --------------------
        |                  |
        |       $600       |
        |                  |
        --------------------
        |                  |
        |       $800       |
        |                  |
        --------------------
        |                  |
        |       $1000      |
        |                  |
        --------------------









*/
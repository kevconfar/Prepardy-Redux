import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



// ATTENTION:   THE NOTES BELOW MAY BE OUTDATED. READ AT YOUR OWN RISK.




// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

// /* 
// TERMINOLOGY USED:
//   - GameState = refers to the data (cat. names and clues) in the GameSlice
//   - GameMenu = the React component that renders the menu in which users select their game
//   - GameBoard = the interactive component that displays ClueCategory's and Clue's.


// PREPARDY WILL USE A COMBINATION OF REDUX-STATE (clues,user_statistics,etc.) AND REACT-STATE (score,timer,etc.)

//   REDUX STATE:
//     1.  cluesSlice
//         - array of three key-value pairs
//           - keys: prepardy, doublePrepardy, finalPrepardy
//           - values: [ ...{ name: "CATEGORY", clues: [ ...clues ] } ] OR { name: "CATEGORY" clue: "clue string" }
//     2.  statsSlice:
//     3.  gamesSlice

//   REACT STATE:
//     1. timer: auto-decremented by 1.0 second per second
//     2. buzzTime: array comprised of the buzz in times (in miliseconds) for each clicked clue (e.g. [ .0523, .0324, etc.])
//     3. score
//     4


// 1.  <GameMenu/> (previously called Welcome) renders first, with links to <GameBoard/> and <UserHome/> rendered beneath it
// 2.  selecting a game in <GameMenu/> will set the GameState (organized into prepardy, doublePrepardy, and finalPrepardy chunks)
// 3.  clicking "START GAME" will open the <GameBoard/>, which will be populated with clues and categories from GameState

// {                               
//   name: "CATEGORY NAME",        
//   clues: [ ...clueStrings ]    <-- -- -- CategoryClue objects will be mapped over, fed to <CategoryColumns/>                                                                           
// }                                                                           

//     Example:

//         CategoryClues.map((clues) => {
//           return <CategoryColumn name={clues.name} clues={clues.clues} />
//         }

//     Note: CategoryColumn will map over the ordered array of clues, returning <Clue clue={clueString} />











// - the <GameBoard/> component will render six <CategoryColumn/> compoennts
//     * the <CategoryColumn/> component will render five <Clue/> components under a header with of the columns Clue.category values


// - the <AnswerForm/> component will be rendered when a <Clue/> is clicked.
//     * the AnswerForm will either render over the GameBoard, OR clicking a clue will set the GameBoard to return null (it will disappear)
// - 
// */



// // render <Welcome /> and links to <GameBoard /> <UserHome />
// function App() { 
//   return (

//     <div className='App'>
//       <header className='App-header' />
//       <main>
//         <div className='welcome-menu'>
//           <Welcome /> 
//         </div>
//         <div className='gameboard'>
//           <GameBoard />
//           <AnswerForm />
//         </div>
//         <div className='user-home'>
//           <UserHome />
//         </div>
//       </main>
//     </div>

//   );
// }

// export default App;

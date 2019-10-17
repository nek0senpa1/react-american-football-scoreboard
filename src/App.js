//TODO: STEP 1 - Import the useState hook.
import React, {useState, useReducer} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

import BottomBoard from './BottomBoard';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  console.log(homeScore)

  const addHomeTD = () => {
    let previous = homeScore;

    setHomeScore( previous + 7 )
  }

  const addHomeFG = () => {
    let previous = homeScore;

    setHomeScore( previous + 3 )
  }

  function addAwayTD () {
    let previous = awayScore;

    setAwayScore( previous + 7 )
  }

  function addAwayFG () {
    let previous = awayScore;

    setAwayScore( previous + 3 )
  }

  return (
    <div className="container">

      <div>
        <BottomBoard homeScore={homeScore} awayScore={awayScore} />
        
      </div>



      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={addHomeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={addHomeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={addAwayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={addAwayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>


    </div>
  );
}

export default App;

//TODO: STEP 1 - Import the useState hook.
import React, {useState, useReducer} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function BottomBoard(banana) {
 
  console.log(banana)
  
  return (
    <div className="container">

      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{banana.homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{banana.awayScore}</div>
          </div>
        </div>
        
        <BottomRow />
      </section>

    </div>
  );
}

export default BottomBoard;

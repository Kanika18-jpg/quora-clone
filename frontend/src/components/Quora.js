import React from 'react';
import QuoraHeader from "./QuoraHeader";
import "./css/Quora.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";
import Feed from "./Feed.js";

function Quora() {
  return (
    <div className="quora">
        <QuoraHeader />
        <div className="quora__contents">
          <div className="quora__content">
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>
    </div>
  )
}

export default Quora
import React from "react";
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import './App.css'
import Widgets from "./Widgets";

function App() {
  return (
    //BEM block element model
    <div className="app">

      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;

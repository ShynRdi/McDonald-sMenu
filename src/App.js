import "./App.css";
import Cartcontainer from "./Components/Cartcontainer/Cartcontainer";
import Itemcontainer from "./Components/Itemscontainer/Itemscontainer";
import React, { useEffect } from "react";

function App() {
  return (
    <div className="main-page-container">
      <div className="box-container">
        <Itemcontainer />
        <Cartcontainer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Vote from "./pages/Vote";
import Swap from "./pages/Swap";
import Pool from "./pages/Pool";
import Chart from "./pages/Chart";
import Votev2 from "./pages/Votev2";
import "./App.css";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Swap/>} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/vote" element={<Vote />} />
          <Route path='/chart' element={<Chart />}/>
          <Route path="/voteb" element={<Votev2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

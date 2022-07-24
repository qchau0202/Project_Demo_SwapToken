import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vote from "./pages/Vote";
import Swap from "./pages/Swap";
import Pool from "./pages/Pool";
import "./App.css";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div className="bodyBackground">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

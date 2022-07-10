import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swap from "./pages/Swap";
import Pool from "./pages/Pool";
import "./App.css";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/Pool" element={<Pool />} />
          {/* <Route path='/pool' element={<Pool/>}/>
      <Route path='/vote' element={<Vote/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

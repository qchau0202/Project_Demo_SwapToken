import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swap from "./pages/Swap";
import "./App.css";
import Vote from "./pages/Vote";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Swap />} />
          {/* <Route path='/pool' element={<Pool/>}/> */}
      <Route path='/vote' element={<Vote/>}/>
        </Routes>
        {/* <Vote/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

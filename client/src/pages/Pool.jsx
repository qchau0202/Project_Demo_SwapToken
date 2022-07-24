import React from "react";
import "../components/css/pool.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Pool = () => {
  return (
    <>
      <div className="container">
        <div className="top">
          <p>Pools Overview</p>
        </div>
        <div className="box">
          <p>Your active V3 liquidity positions will appear here.</p>
          <WalletMultiButton/>
        </div>
        <div className="bottom">
         <div className="links-a">
          <p>Learn about providing liquidity</p>
          <p className="des">Check out our v3 LP walkthrough and migration guides.</p>
         </div>
         <div className="links-b">
          <p>Top pools</p>
          <p className="des">Explore Uniswap Analytics.</p>
         </div>
        </div>
      </div>
    </>
  );
};
export default Pool;

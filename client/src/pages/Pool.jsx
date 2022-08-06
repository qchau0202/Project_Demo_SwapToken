import { Grid, Button } from "@nextui-org/react";
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
          <WalletMultiButton  className="hmmm"/>
        </div>
        <div className="bottom">
         <div className="links-a">
          <b><p>Learn about providing liquidity</p></b>
          <b><p className="des">Check out our v3 LP walkthrough and migration guides.</p></b>
         </div>
         <div className="links-b">
          <b><p>Top pools</p></b>
          <b><p className="des">Explore Uniswap Analytics.</p></b>
         </div>
        </div>
      </div>
    </>
  );
};
export default Pool;

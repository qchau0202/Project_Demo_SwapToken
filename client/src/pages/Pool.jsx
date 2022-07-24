import { Grid, Button } from "@nextui-org/react";
import React from "react";
import "../components/css/pool.css";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Pool = () => {
  return (
    <>
      <div className="container">
        <div className="top">
          <p>Pools Overview</p>
        </div>

        <div className="box">
          <p>Your active V3 liquidity positions will appear here.</p>
          <Button color="secondary" size="lg">Select Wallet</Button>
        </div>
      </div>
    </>
  );
};
export default Pool;

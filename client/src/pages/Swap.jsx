import React from "react";
import { Card, Grid, Input, Button } from "@nextui-org/react";
import { AiOutlineSetting, AiOutlineArrowDown } from 'react-icons/ai';
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "../components/css/swap.css";

export default function Swap() {
  return [
    <div>
    <Grid.Container className="all">
      <Grid className="swap">
        <Card className="swap1">
          <h5 className="text">Swap</h5>
          <AiOutlineSetting color="white" />
          <Card className="money">
            <Input label="From" placeholder="0.0" />
          </Card>
          <AiOutlineArrowDown />
          <Card className="money">
            <Input label="To (estimated)" placeholder="0.0" />
          </Card>
          <Button color="secondary" shadow size="lg">Select Wallet</Button>
        </Card>
      </Grid>
    </Grid.Container>
  </div>
  ]
}



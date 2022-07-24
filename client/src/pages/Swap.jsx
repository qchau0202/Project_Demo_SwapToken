import React from "react";
import { Card, Dropdown, Grid, Input, Text } from "@nextui-org/react";
import { AiOutlineSetting, AiOutlineArrowDown } from 'react-icons/ai';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "../components/css/swap.css";

export default function Swap() {
  
  return [
    <div>
    <Grid.Container justify="center">
      <Grid className="swap">
        <Card className="swap1">
          <div className="top">
            <h5>Swap</h5>
            <AiOutlineSetting />
          </div>
          <Card>
            <Input label="From" placeholder="0.0" />
            <Dropdown></Dropdown>
          </Card>
          <AiOutlineArrowDown />
          <Card>
            <Input label="To (estimated)" placeholder="0.0" />
            <Dropdown></Dropdown>
          </Card>
          <WalletMultiButton />
        </Card>
      </Grid>
    </Grid.Container>
  </div>
  ]
}



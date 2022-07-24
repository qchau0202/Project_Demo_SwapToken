import React from "react";
import { Card, Dropdown, Grid, Input, Text } from "@nextui-org/react";
import { AiOutlineSetting } from 'react-icons/ai';
import "../components/css/swap.css";

export default function Swap() {
  
  return [
    <div>
    <Grid.Container justify="center">
      <Grid className="swap">
        <Card className="swap1">
        <Text h5>Swap</Text>
        <AiOutlineSetting />
        <div className="money">
        <Input placeholder="0.0" />
        <Dropdown></Dropdown>
        </div>
        <div className="money">
          <Input placeholder="0.0" />
          <Dropdown></Dropdown>
        </div>
        </Card>
      </Grid>
    </Grid.Container>
  </div>
  ]
}



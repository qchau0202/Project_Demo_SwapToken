import React from "react";
import {  Avatar, Card, Dropdown, Grid, Text, Tooltip } from "@nextui-org/react";
import { FontAwesome } from 'react-icons';
import "../components/css/swap.css";

const Swap = () => {
  return [
    <div>
    <Grid.Container justify="center">
      <Grid>
        <Card className="swap">
        <Text h5>Swap</Text>
        <Dropdown placement="">
          <Dropdown.Button>

          </Dropdown.Button>
        </Dropdown>
        </Card>
      </Grid>
    </Grid.Container>
  </div>
  ]
};
export default Swap;

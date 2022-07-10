import React from "react";
import {  Avatar, Card, Dropdown, Grid, Text, Tooltip } from "@nextui-org/react";
import "../components/css/swap.css";

const Swap = () => {
  return [
    <div>
    <Card className="swaptoken">
      <Text h4>Swap</Text>
      <Grid.Container justify="flex-end" gap={2}>
        <Grid>
          <Dropdown>
            <Dropdown.Trigger>
              <Avatar />
            </Dropdown.Trigger>
            <Dropdown.Menu color="secondary" aria-label="Settings">
              <Dropdown.Section title="Transaction Settings">
                
              </Dropdown.Section>
              <Dropdown.Section title="Interface Settings">
                <Grid.Container>
                  <Grid>
                    <Text h5>Auto Router API</Text>
                    <Tooltip content="Your transaction will revert if the price changes unfavorably by more than this percentage" placement="left">
                      
                    </Tooltip>
                  </Grid>
                </Grid.Container>

              </Dropdown.Section>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
    </Card>
  </div>
  ]
};
export default Swap;

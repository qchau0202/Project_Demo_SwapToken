import React from "react";
import {  Avatar, Card, Dropdown, Grid, Text, Tooltip } from "@nextui-org/react"

const Swap = () => {
  return [
    <div>
    <Card>
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
                <div>
                  <div>
                    <Text h5>Auto Router API</Text>
                    <Tooltip content="Your transaction will revert if the price changes unfavorably by more than this percentage" placement="left">
                      
                    </Tooltip>
                  </div>
                </div>
                <div>

                </div>
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

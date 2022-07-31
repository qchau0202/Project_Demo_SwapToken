import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Grid,
  Button,
} from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import UniSwapLogo from "../assets/uniswap-4441964-3680017.webp";
import "./css/header.css";

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("close");
  };

  return (
    <header>
      <div>
        <Link to={"/"}>
          <Image src={UniSwapLogo} className="logo" />
        </Link>
      </div>

      <div className="categories">
        <Grid.Container gap={3.5} justify="center">
          <Grid><Link to={"/"} className="textLink">Swap</Link></Grid>
          <Grid><Link to={"/pool"} className="textLink">Pool</Link></Grid>
          <Grid><Link to={"/vote"} className="textLink">Vote</Link></Grid>
          <Grid><Link to={"/chart"} className="textLink">Chart</Link></Grid>
        </Grid.Container>
      </div>

      <div className="settings">
        <WalletMultiButton/>
      </div>
    </header>
  );
};
export default Header;

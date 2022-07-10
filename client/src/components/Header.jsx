import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Grid,
} from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import UniSwapLogo from "../assets/uniswap-uni-logo.svg";
import "./css/logo.css";
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
      <div className="logo">
        <Link to={"/"}>
          <Image src={UniSwapLogo} className="logo" />
        </Link>
      </div>

      <div className="categories">
        <Grid.Container gap={2} justify="center">
          <Grid><Link to={"/Swap"}>Swap</Link></Grid>
          <Grid><Link to={"/Pool"}>Pool</Link></Grid>
          <Grid><Link to={"/vote"}>Vote</Link></Grid>
          <Grid><Link to={"/Chart"}>Chart</Link></Grid>
        </Grid.Container>
      </div>

      <div className="settings">
        <WalletMultiButton/>
      </div>
    </header>
  );
};
export default Header;

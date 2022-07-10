import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Pagination,
  Card,
  Grid,
  Dropdown,
  Modal,
  Text,
  Button,
} from "@nextui-org/react";
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
          <Grid>Swap</Grid>
          <Grid>Pool</Grid>
          <Grid>Vote</Grid>
          <Grid>Chart</Grid>
        </Grid.Container>
      </div>

      <div className="settings">
        <Button auto shadow onClick={handler}>
          Connect Wallet
        </Button>
        <Modal closeButton open={visible} onClose={closeHandler}></Modal>
      </div>
    </header>
  );
};
export default Header;
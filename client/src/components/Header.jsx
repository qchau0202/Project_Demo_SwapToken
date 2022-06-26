import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Pagination, Card, Grid } from "@nextui-org/react";
import UniSwapLogo from "../assets/uniswap-uni-logo.svg";
import "./css/logo.css"
import "./css/header.css"
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <Image src={UniSwapLogo} className='logo'/>
        </Link>
      </div>

      <div className="categories">
        <Grid.Container gap={2} justify='center'>
            <Grid>Swap</Grid>
            <Grid>Pool</Grid>
            <Grid>Vote</Grid>
            <Grid>Chart</Grid>
        </Grid.Container>
      </div>
      <div className="settings"></div>
    </header>
  );
};
export default Header;

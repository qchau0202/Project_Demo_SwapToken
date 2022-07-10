import {
    NextUIProvider,
    Container,
    Card,
    Row,
    Text,
    Button,
    Switch,
  } from "@nextui-org/react";
  import React from "react";
  import "../components/css/Vote.css"
  // import Votecp from "../components/Vote";
  
  function Vote() {
    return (
      <Container className="container" xl>
        <div className="a">
          <div className="vote">
            <h5 className="voteText">Uniswap Governance</h5>
            <p className="voteText2">UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.</p>
            <a href="#" className="voteText3">Read more about Uniswap governance</a>
          </div>
        <div className="b">
          <Text className="Text" b h3 css={{
              color: 'white'
          }}>
            Proposals
          </Text>
          <Button className="button" auto color={`error`} >
           Create Proposal
          </Button>
        </div>
        <div className="b">
         <b> <h4 className="colorText"  >
          Show Cancelled
          </h4></b>
          <Switch color="error" checked={true} />
        </div>
        <div className="votecp">
         <p></p>
         <p></p>
         <p></p>
         </div>
         <div className="c">
          <p className="footer">A minimum threshold of 0.25% of the total UNI supply is required to submit proposals</p>
          <p className="footer"> Uniswap available in:<a>Vietnamese</a></p>
         </div>
        </div>
       
      </Container>
    );
  }
  
  export default Vote;
  
  
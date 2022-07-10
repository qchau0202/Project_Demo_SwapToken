import {
    NextUIProvider,
    Container,
   Modal,
   
  } from "@nextui-org/react";
  import React from "react";
import "../css/VoteV2.css"
  // import Votecp from "../components/Vote";
  
  function Votev2() {
    return (
      <Container className="containerv2">
        <div className="votev2" >
       <h4 className="h4text" >Create Proposal</h4>

       <div className="carda" >
       <strong>Tip: </strong>
       Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action, 
       <a href="#" className="textcolora"><strong>read the docs.</strong></a>
       </div>
        <div className="cardb"> 
         <p className="textcardb">Proposed Action</p>
         <h4>Transfer Token</h4>
        </div>
        <div className="cardb"> 
         <p >To</p>
         <input className="inputcardc" type="text" placeholder="Wallet Address or ENS name"></input>
        </div>
        <div className="cardb"> 
         <input className="inputcardd" type="text" placeholder="0.0"></input>
        </div>
        <div className="carde"> 
         <p >To</p>
         <input className="inputcarde" type="text" placeholder="Proposal Title"></input>
         <hr className="hr" />
         <textarea className="textarea" placeholder="## Summary 

         Insert your summary here

         ## Methodology

         Insert your methodology here

         ## Conclusion

         Insert your conclusion here
         "></textarea>
        </div>
        <button disabled="" class="buttonvote" >
          You must have 2.500.000 votes to submit a proposal
          </button>
          <div className="f">
        <p className="pf">Don’t have 2.5M votes? Anyone can create an autonomous proposal using</p>
       <a className="af">fish.vote</a>
       </div>
       </div>
      </Container>
    );
  }
  
  export default Votev2;
  
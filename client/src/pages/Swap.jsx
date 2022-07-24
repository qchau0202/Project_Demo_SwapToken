import React, { useCallback } from "react";
import { Card, Dropdown, Grid, Input,  Button } from "@nextui-org/react";
import { AiOutlineSetting, AiOutlineArrowDown } from "react-icons/ai";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "../components/css/swap.css";

export default function Swap() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const handleOnSubmit = useCallback(async (event) => {
    event.preventDefault();
    console.log("hsahdkjjjashkd");
    const { recipientAddress, amount } = event.target;

    if (!publicKey) {
      alert("Please open a wallet first");
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipientAddress.value,
        lamports: amount.value * LAMPORTS_PER_SOL,
      })
    );

    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "processed");
    alert ("You have successfully transferred coins")
    recipientAddress.value = "";
    amount.value = "";
  }, [publicKey, sendTransaction, connection]);

  return (
    <Grid.Container justify="center">
      <form className="swap" onSubmit={handleOnSubmit}>
        <Card className="swap1">
          <div className="top">
            <h5>Swap</h5>
            <AiOutlineSetting />
          </div>
          <Card>
            <Input label="From" placeholder="0.0" name="recipientAddress" />
            <Dropdown></Dropdown>
          </Card>
          <AiOutlineArrowDown />
          <Card>
            <Input label="To (estimated)" placeholder="0.0" name="amount" />
            <Dropdown></Dropdown>
          </Card>
          <Button className="button" auto color={`error`} type="submit">
            Create Proposal
          </Button>
        </Card>
      </form>
    </Grid.Container>
  );
}

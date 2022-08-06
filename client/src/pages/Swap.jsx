import React, { useCallback } from "react";
import { Card, Grid, Input,  Button } from "@nextui-org/react";
import { AiOutlineArrowDown } from "react-icons/ai";
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
    <Grid.Container className="all">
      <form className="swap" onSubmit={handleOnSubmit}>
        <Card className="swap1">
            <h3 className="text">Send</h3>
          <Card className="money">
            <Input label="Send" placeholder="Place Wallet Id" name="recipientAddress" size="lg" css={{ $$inputColor: 'rgb(51, 54, 61)' }}/>
          </Card>
          <AiOutlineArrowDown color="gray" />
          <Card className="money">
            <Input label="Number Of Coins" placeholder="0.0" name="amount" size="lg" css={{ $$inputColor: "rgb(51, 54, 61)" }}/>
          </Card>
          <br />
          <Button color="secondary" size="xl" type="submit" className="btn">Send coin</Button>
        </Card>
      </form>
    </Grid.Container>
  );
}

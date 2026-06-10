const express = require("express");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
app.use(express.json());


const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);


const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


const abi = [
  {
    "inputs": [{ "internalType": "string", "name": "_msg", "type": "string" }],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }
];

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  wallet
);


app.get("/message", async (req, res) => {
  try {
    const msg = await contract.getMessage();
    res.json({ message: msg });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/message", async (req, res) => {
  try {
    const tx = await contract.setMessage(req.body.message);
    await tx.wait();

    res.json({ message: "Updated on blockchain" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running"));
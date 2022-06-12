const express = require('express');
const cors = require('cors')
const app = express();
const { createUser, getProducts } = require('./database')

app.use(cors());
app.use(express.json());

app.post("/createuser", (req, res) => {
  if (req) console.log("req recieved")
  const {uid, address, phone} = req.body;
  console.log(`uid ${uid}, address: ${address}, phone ${phone}`)
  createUser(uid, address, phone)
  res.status(200).send("user created")
})

app.get("/products",  (req, res) => {
  const data =  getProducts((data) => {
    res.send(data)
  });
})

app.listen(3002, () => {console.log("server running on port 3002")})
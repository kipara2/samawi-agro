const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// APPROVE
app.post("/approve", (req, res)=>{
 console.log("APPROVE:", req.body.paymentId);
 res.send({result:"success"});
});

// COMPLETE
app.post("/complete", (req, res)=>{
 console.log("COMPLETE:", req.body);
 res.send({result:"success"});
});

app.listen(3000, ()=>console.log("Server running on port 3000"));

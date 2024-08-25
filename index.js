const express = require('express');
const app = express();

require('dotenv').config();
 let port = process.env.PORT ;
 //add cors 
var cors = require('cors') ;
app.use(cors())
 
//add body parser 
app.use(express.json())
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 

// connection with db  
const {connectDB}  = require("./config/mongooseConnect");
connectDB();


app.get('/', (req, res) => {
  res.status(200).json({
    "name":"ankul"
  })
})

// add/router  
const router = require('./routes/vehicleRoute');
app.use("/api/v1" , router);
// app.post("/api/v1/set" , (req,res)=>{
//     res.send("yess")
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ...........`)
})


const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect("dbUrl", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
    console.log("connection is established")
})
.catch((err)=>{
    console.log("no connection",err.message)
})

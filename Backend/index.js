const express = require('express')
const db = require('mongoose')
const cors = require('cors')
const app = express();
const userRouter = require('./Routes/userRouter.js')
db.connect("mongodb://localhost:27017/hell").then(()=>{
    console.log("successfully connected to db")
});
app.use(cors());
app.use(express.json());
app.use('/',userRouter)
const Port = 5602
app.listen(Port,()=>{
    console.log("successfull");
})

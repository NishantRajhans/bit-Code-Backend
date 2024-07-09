const express=require('express')
const app = express()
const DBconnection=require("./Config/Database")
const AuthRoutes=require("./Routes/AuthRoutes")
const PracticeRoutes=require("./Routes/PracticeRoutes")
const cors=require("cors")
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const PORT=process.env.PORT ||3000
dotenv.config();
app.use(bodyParser.json())
app.use(cors())
app.use("/api/v1/Auth",AuthRoutes);
app.use("/api/v1/Practice",PracticeRoutes);
DBconnection.connect()
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
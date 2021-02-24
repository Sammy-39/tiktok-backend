import express from 'express'
import mongoose from 'mongoose'

import Data from './data.js'
import Videos from './dbModel.js'

// app config
const app = express()
const port = process.env.PORT || 9000

// middlewares
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    next()
})

// DB Config
const dbURL = 'mongodb://sammy:sammydb@cluster0-shard-00-00.pvarl.mongodb.net:27017,cluster0-shard-00-01.pvarl.mongodb.net:27017,cluster0-shard-00-02.pvarl.mongodb.net:27017/tiktok?ssl=true&replicaSet=atlas-wb3j6y-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

// api endpoints
app.get("/",(req,res)=>{
    res.status(200).send("hello")
})

app.get("/v1/posts",(req,res)=>{
    res.status(200).json(Data)
})

app.get("/v2/posts",(req,res)=>{
    Videos.find((err,data)=>{
        if(err){ res.status(500).send(err) }
        else{ res.status(200).send(data) }
    })
})

app.post("/v2/posts",(req,res)=>{
    Videos.create(req.body,(err, data)=>{
        if(err){ res.status(500).send(err) }
        else{ res.status(201).send(data) }
    })
})

// listen
app.listen(port,()=>{
    console.log("Server running on port",port)
})
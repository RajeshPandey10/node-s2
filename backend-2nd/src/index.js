import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port =process.env.PORT

app.use(express.json())

app.get('/',(req,res)=>{
    
    const person ={
        name:"dev",
        address:"itahari",
        age:33
    }
    //object destructering

res.json({response:person})


})


app.get('/age',(req,res)=>{
     const person ={
        name:"dev",
        address:"itahari",
        age:50
    }
    const {age,name} =person
    res.json({peron:age,hello:name})
})



app.listen(port,()=>{
    console.log(`our waiter is on working mode..server is running on port ${port}`)
})
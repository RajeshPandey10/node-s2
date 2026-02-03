import express from "express"

const app = express()


app.get('/',(req,res)=>{
res.send("<h1>welcome to our resturent . what you gonna have today?</h1>")
})

app.get("/samosa",(req,res)=>{
    res.send("<h1>here is your samosa . enjoy your meal</h1>")
})

app.get("/tea",(req,res)=>{
    res.send("this is our last cup")
})























app.listen(8000,()=>{
    console.log("our waiter is on working mode..server is running on port 8000")
})
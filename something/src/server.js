import express from "express";
import bodyParser from "body-parser"; //automatically parse the json data from request body and convert it into a js object,which is then store in req.body
import dotenv from "dotenv";
import { db } from "./database/db.js";
import personRoutes from '../src/routes/person.route.js'
import logRequest from "./middlewares/logRequest.middleware.js";
import passport from "./utils/passport.js";
dotenv.config();
const port = process.env.PORT;
const app = express();

//middlewares
app.use(bodyParser.json()); //as we are sending data in json format
// app.use(logRequest)
app.use(passport.initialize())

app.get("/", (req, res) => {
  res.send(
    "<h1>hello sir!!! Welcome to our restrurent .. what do you want to have today???</h1>"
  );
});

app.get("/samosa", (req, res) => {
  const samosa = {
    name: "Big samosa",
    quantity: 20,
    taste: "spicy",
  };
  res.send(samosa);
});

//person api
app.use('/person',passport.authenticate('local',{session:false}),personRoutes)


app.listen(port, () => {
  console.log("server is running on port " + port);
});

import express from "express";
import Person from "../models/person.model.js";
import logRequest from "../middlewares/logRequest.middleware.js";
const router =express.Router()

router.post("/", async (req, res) => {
  try {
    const data = req.body; //assuming that data in req.body
    const newPerson = new Person(data);
    const person = await newPerson.save();
    console.log("person data saved successfully");
    res.status(201).json({ person, sucess: true });
  } catch (error) {
    console.log("error occured while creating person", error);
    res
      .status(500)
      .json({ message: "error occured while creating person", error });
  }
});
router.get("/",async(req,res)=>{
    try {
        const data =await Person.find()
        res.status(200).json({message:"person fetched sucessfully",data})
    } catch (error) {
        console.log("error occured while fetching person", error);
    res
      .status(500)
      .json({ message: "error occured while fetching person", error });
  
    }
})

//parameterized api
router.get("/:work",async(req,res)=>{
    try {
        const work =req.params.work
        if(work=='developer'||work=="manager"||work=="trainee"){
            const response = await Person.find({work:work})
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"Invalid work type"})
        }

    } catch (error) {
        console.log("error occured while fetching person", error);
    res
      .status(500)
      .json({ message: "error occured while fetching person", error });
  
    }
})




export default router
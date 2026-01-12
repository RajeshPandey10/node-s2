import passport from "passport";

import LocalPassport from "passport-local"
import Person from "../models/person.model.js";
const LocalStrategy = LocalPassport.Strategy;


passport.use(
    new LocalStrategy(async(username,password,done)=>{
        //auth logic
        try {
            const user = await Person.findOne({username:username});
            if(!user) return done(null,false,{message:"Incorrect Username"})
            const isPasswordMatch =await user.comparePassword(password) ;

            if(isPasswordMatch){
                return done(null,user)
            }
            else{
                return done(null,false,{message:"Incorrect Password"})
            }

            
        } catch (error) {
            return done(error)
        }
    })
)

export default passport
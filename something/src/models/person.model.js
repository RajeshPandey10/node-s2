import mongoose, { Schema } from "mongoose";

import bcrypt from "bcrypt";
//define
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  work: {
    type: String,
    enum: ["developer", "manager", "trainee"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

personSchema.pre("save", async function () { //alwaye use the normal function to use the this operator dont use the arrow function
  const person = this;

  // Hash only if password has been modified (or is new)
  if (!person.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(10);
    // Overwrite the plain password with the hashed version
    person.password = await bcrypt.hash(person.password, salt);
    // No next() call needed; resolving the function advances the hook
  } catch (error) {
    // In Mongoose 9, throw errors directly to abort the save
    throw error;
  }
});


personSchema.methods.comparePassword = async function (candidatePassword){
  try {
    //use bcrypt to compare
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const Person = mongoose.model("Person", personSchema);

export default Person;

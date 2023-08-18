const mongoose = require("mongoose");

const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email id exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  phone:{
    type:Number,
    min:10,
    max:10,
    required:true,
    unique:true,
  }
});

const Student = new mongoose.model("Student",studentSchema);
module.exports = Student;

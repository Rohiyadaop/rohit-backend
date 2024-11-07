import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    coverImaage: {
      type: String,
    },
    whatchhistory: {
      type: mongoose.Schema.ObjectId,
      ref: "value",
    },
    password: {
      type: String,
      required: [true, "password is required "],
    },
    refrestoken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// password incrypt with condition 
userSchema.pre( "save",async function (next){
   if(!this.isModified("password")){
    return next();
   }
    this.password=bcrypt.hash(this.password,10)  // take the password and round 
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    // check the password is correct or not
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userSchema);
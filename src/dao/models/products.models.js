import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
    min: 0,
  },
  thumbnail:{
    type: String,
    required: true,

  },
  stock:{
    type: Number,
    required: true,
    min: 0,
    default: 0,

  },
  code:{
    type: String,
    required: true,
    unique: true,
  },
  category:{
    type: String,
    required: true,
  },
  status:{
    type: Boolean,
    required: true,
    default: true,
    
  }
},
{
  timestamps: true,
},
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const ProductModel = mongoose.model("Product", schema);